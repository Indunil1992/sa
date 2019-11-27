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
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}