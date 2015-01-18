# keen-aws-cloudtrail
Simple NodeJS app to upload AWS CloudTrail log files into a Keen.io project

Your Keen.io project api values need to exist in the environment that this is running in.

    * export projectId=...
    * export writeKey=...
    * export readKey=...
    * export masterKey=...

 Run this with the name of the JSON file as an argument: `node cloudtrail.js filename`
 
 **NOTE: CloudTrail logs can contain sensitive data.**
 You should consider what files you may upload and whether or not they contain any data that might be considered sensitive.
 
 CloudTrail logs contain numerous fields indicating what sort of event occurred and various aspects of it.
 Documentation for them can be found at [http://docs.aws.amazon.com/awscloudtrail/latest/userguide/event_reference_top_level.html](http://docs.aws.amazon.com/awscloudtrail/latest/userguide/event_reference_top_level.html)
 
 Once data has been uploaded to your Keen project you can perform various queries on it using the workbench.
 
 
 
 
 
