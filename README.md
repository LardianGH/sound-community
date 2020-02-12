
# sound-community
An online community-driven soundboard, constantly expanding it's catalog of sound effects uploaded by other users. For use in short movies, animations, or just for fun.

To hook it up to your s3 bucket, create a .env file that looks like this:

AWSAccessKeyId={IAM user Access key ID}
AWSSecretKey={IAM user Secret key}
Bucket={bucket name}

Dependencies:

Howl js - Plays sound files
Axios - Makes calls to the api

(Currently required jquery to make uploads, am attempting to find an alternative)
