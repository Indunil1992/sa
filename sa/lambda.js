let AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition();

exports.handler = function (event, context, callback) {
    rekognition.detectLabels({
        Image: {
            S3Object: {
                Bucket: "indunil.trigger",
                Name: "quiz400.jpg"
            }
        }
    }).promise()
        .then(data => {
             console.log(data);
 console.log("dataaaaaaa");

            // your code goes here
        })
        .catch(err => {
                         console.log(err);
 console.log("errrrrrrrrrrrrrrrrrrrr");
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}