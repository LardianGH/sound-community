
# sound-community
Warning: For others cloning this at it's current state, as this project is currently under-development, it is not going to be completely functional, stuff like the '/' route are set to whatever page I am currently working on, the page can be changed by switching the current component for another of the components imported to App.js

An online community-driven soundboard, constantly expanding it's catalog of sound effects uploaded by other users. For use in short movies, animations, or just for fun.

To hook it up to your s3 bucket, create a .env file that looks like this:

AWSAccessKeyId={IAM user Access key ID}
AWSSecretKey={IAM user Secret key}
Bucket={bucket name}

Dependencies:

Howl js - Plays sound files
Axios - Makes calls to the api

(Currently required jquery to make uploads, am attempting to find an alternative)
