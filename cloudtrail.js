/**
 * cloudtrail.js
 * Read AWS CloudTrail log file and upload to an existing Keen.io project.
 *
 * Your Keen.io project api values need to exist in the environment that
 * this is running in.
 *
 * export projectId=...
 * export writeKey=...
 * export readKey=...
 * export masterKey=...
 *
 * Run this with the name of the JSON file as an argument.
 *
 */


var Keen = require('keen.io');
var fs = require ('fs');

var keen = Keen.configure({
    projectId: process.env.projectId,
    writeKey: process.env.writeKey,
    readKey: process.env.readKey,
    masterKey: process.env.masterkey
});

if (process.argv[2] == null) {
    console.log("Usage: " + process.argv[0] + "filename");
    process.exit(1);
}
var inputFile = process.argv[2];

fs.readFile(inputFile, handleFile);


function handleFile(err, data) {
    if (err) throw err;

    var eventObj = JSON.parse(data);

    eventObj.Records.forEach(function (value) {
        console.log("event:" + value.eventTime);

        keen.addEvent("records", value, function (err, res) {
                //console.log("done");
                if (err) {
                    console.log("err:" + err);
                } else {
                    console.log("upload:" + res);
                }
            }
        );

    })

}

