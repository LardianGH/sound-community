## Warning:
 For others cloning this at it's current state, as this project is currently under-development, it is not going to be completely functional. I have a very minimalist navbar setup for navigation during development. Most pages are not done and look very ugly and not fully functional, you have been warned.

# sound-community
An online community-driven soundboard, constantly expanding it's catalog of sound effects uploaded by other users. For use in short movies, animations, or just for fun.

## Deployed version
deploying soon

## Installing and running locally
Clone the repo using HTTPS:
````
https://github.com/LardianGH/sound-community.git
````
or SSH:
````
git@github.com:LardianGH/sound-community.git
````

### Prerequisites
Git bash - https://gitforwindows.org/

Node.js - https://nodejs.org/en/download/

MongoDB - https://docs.mongodb.com/manual/installation/

AWS Account - https://aws.amazon.com/

### Generating AWS IAM credentials
After logging in to your AWS account, in the search bar under "Find Services" type: IAM
![image](./client/public/Readme-images/AWS-IAM.png)
Under "IAM Resources" click on: Users and then "Add user"
![image](./client/public/Readme-images/AWS-Users.png)
Select "Programmatic access"
![image](./client/public/Readme-images/AWS-Programmatic-access.png)
Don't choose any permissions yet; click next
Don't add any tags; click next
Click "Create user"
![image](./client/public/Readme-images/AWS-Create-user.png)
Click on your user's name and then choose "Add inline policy"
![image](./client/public/Readme-images/AWS-Inline.jpg)
Open the "JSON" tab and copy/paste this into the box:
````
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListAllMyBuckets",
                "s3:PutObject",
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::*"
            ]
        }
    ]
}
````
Before you create your bucket, copy the User ARN, you will need this to link the IAM to your bucket
![image](./client/public/Readme-images/AWS-User-ARN.png)

### Creating your bucket
In the navbar at the top of the page, click on "Services", in the searchbar type: "S3"
![image](./client/public/Readme-images/AWS-S3.png)
click on create bucket and give it a unique name and enter the region (I guess pick the one closest to you)
![image](./client/public/Readme-images/AWS-Create-bucket.png)
Don't use any configuration options, you do NOT want versioning, it will fill your bucket with thousands of files and take up all your storage space; click next
Do not block public access to your bucket, this app currently relies on the bucket being public.
![image](./client/public/Readme-images/AWS-Public-access.png)
Click on your newly created bucket
![image](./client/public/Readme-images/AWS-Select-bucket.png)
Under the "Bucket policy" tab, copy and paste this:
````
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::261911591689:user/Example"
            },
            "Action": "s3:ListBucket",
            "Resource": "arn:aws:s3:::sc-example-bucket"
        },
        {
            "Sid": "AddCannedAcl",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::261911591689:user/Example"
            },
            "Action": [
                "s3:PutObject",
                "s3:PutObjectAcl"
            ],
            "Resource": "arn:aws:s3:::sc-example-bucket/*",
            "Condition": {
                "StringEquals": {
                    "s3:x-amz-acl": "public-read"
                }
            }
        }
    ]
}
````
but replace arn:aws:iam::261911591689:user/Example with your own User ARN
![image](./client/public/Readme-images/AWS-Replace-ARN.png)
and replace arn:aws:s3:::sc-example-bucket and arn:aws:s3:::sc-example-bucket/* in front of resource with your own ARN at the top of the page.
pay attention to the two resources, the second one has a /* but the first one does not, this is important.
![image](./client/public/Readme-images/AWS-Bucket-ARN.png)
Save and go to the "CORS configuration" tab, copy and paste this into the box
````
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <MaxAgeSeconds>3000</MaxAgeSeconds>
    <AllowedHeader>Authorization</AllowedHeader>
</CORSRule>
</CORSConfiguration>
````
Save, and that's it. You should be able to upload, search for and play sound files.

### Hooking up bucket

To hook the app up to your s3 bucket, create a .env file in the sound-community repository that looks like this:
(Without the brackets) And here is a list of all the AWS region codes - https://docs.aws.amazon.com/general/latest/gr/rande.html
````
AWSAccessKeyId={IAM user Access key ID}
AWSSecretKey={IAM user Secret key}
Region={bucket region code}
Bucket={bucket name}
````

Dependencies:

Howl js - Plays sound files
Axios - Makes calls to the api

(Currently required jquery to make uploads, am attempting to find an alternative)
