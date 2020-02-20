const db = require("../models");
var aws = require('aws-sdk'); 
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
	const filetypes = /.mp3|png|gif/;
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

createUser: function(req, res) {
  console.log("req.hey")
  console.log(req.body)

    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},

sign_s3: function(req, res) {
console.log("Uploading file")

FileUpload( req, res, ( error ) => {
  console.log(res)
  console.log("After multer ------------------------------------")
  console.log(req)

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
      const imageName = req.file.key;
      const imageLocation = req.file.location;
// Save the file name into database into profile model
      res.json( {
        image: imageName,
        location: imageLocation
      } );
    }
  }
});
  
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
console.log("start")
    try {
      aws.config.setPromisesDependency(),
      aws.config.update({
        accessKeyId: "AKIATZ6ZFXMESNZONGZ3",
        secretAccessKey: "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",
        region: "us-east-2",
      });
      const response = await s3.listObjectsV2({
        Bucket: "sound-community"
      }).promise();

console.log(response);

    } catch(error) {
    console.log(error)
    }}
};