# myhotpics

A simple library managed with Amazon S3 and made for use with [Vercel](https://vercel.com).


## getting started

You will need:

* An Amazon Identity Pool ID
* An Amazon S3 bucket

Next up:

1. Copy the build environment example:   
  `cp .env.example .env`
2. Put in the information needed to connect to Amazon
3. Also, add that info to your Vercel app as secrets:   
  `vercel secrets add aws-region [value]`   
  `vercel secrets add aws-identity-id [value]`   
  `vercel secrets add aws-s3-bucket  [value]`   
3. You can now run `npm run now` to start.
