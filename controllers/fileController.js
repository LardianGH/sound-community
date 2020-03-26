const db = require("../models");
const aws = require('aws-sdk'); 
const multerS3 = require( 'multer-s3' );
const multer = require('multer');
const path = require( 'path' );

require('dotenv').config(); // Configure dotenv to load in the .env file

const s3 = new aws.S3({
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey,
    region: process.env.Region,
  });  // Create a new instance of S3
  
  const FileUpload = multer({
      storage: multerS3({
          s3: s3,
          bucket: process.env.Bucket,
          acl: 'public-read',
          key: function (req, file, cb) {
              cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
          }
      }),
      //change filesize limit here
      limits:{ fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
      fileFilter: function( req, file, cb ){
          checkFileType( file, cb );
      }
  }).single('profileImage');
  
  /**
   * Check File Type
   * @param file
   * @param cb
   * @return {*}
   */
  function checkFileType( file, cb ){
      // Allowed ext
      const filetypes = /mp3|wav|m4a/;
      // Check ext
      const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
      // Check mime
      const mimetype = filetypes.test( file.mimetype );
      if( mimetype && extname ){
          return cb( null, true );
      } else {
          cb( 'Error: Images Only!' );
      }
  }

  module.exports = {

    sign_s3: function(req, res) {

      if(req.session.userName) {
        console.log("Uploading file")
        FileUpload( req, res, ( error ) => {
          console.log("After multer ------------------------------------")
        
          console.log( 'requestOkokok', req.file);
          console.log( 'error', error );
          if( error ){
            console.log( 'errors', error );
            res.json( { error: error } );
          } else {
            // If File not found
            if( req.file === undefined ){
              console.log(req.body)
              console.log( 'Error: No File Selected!' );
              res.json( 'Error: No File Selected' );
            } else {
              // If Success
              const fileKey = req.file.key;
              const url = req.file.location;
              const user = req.session
              const soundInfo = {
                fileKey,
                userID: user._id
              }
              
                // Save the file name into database into sound model
                db.Sound
                .create({
                  fileKey,
                  userID: user._id
                })
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
             
            
            }
          }
        });

      }
      else {
        res.status(422).json("no username saved")
        console.log("no username saved")
      }
          
        },
        
        /*download_s3: function(req, res) {
          console.log(req.body.filename)
        console.log("req ran")
        s3.getObject(
          { Bucket: "sound-community", key: req.body.filename },
          function(error, data) {
            if (error != null ) {
            console.log("failed: " + error);
          } else {
            console.log(data)
            res.json(data)
          }
        }
        )
        } */
        
        download_s3: async function(req, res) {
        //  console.log(req.body.filename)
       // console.log("start")
            try {
              aws.config.setPromisesDependency(),
              aws.config.update({
                accessKeyId: process.env.accessKeyId,
                secretAccessKey: process.env,
                region: process.env.Region,
              });
              const response = await s3.listObjectsV2({
                Bucket: process.env.Bucket,
                Prefix: req.body.filename
              }).promise()
        
        response.Region = process.env.Region
        
        //console.log(response); //the [0] is only for the first one.
        res.json(response);
        
            } catch(error) {
            console.log(error)
            }},

            getFileUploader: function(req, res) {
             // console.log(req.body.filename)
              db.Sound
              .findOne({fileKey: req.body.filename})
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
            },

            getFileUploader2: function(req, res) {
              console.log(req.body.data)
               db.User
               .findOne({_id: req.body.data.userID})
               .then(dbModel => res.json(dbModel))
               .catch(err => res.status(422).json(err));
             }

            

  }