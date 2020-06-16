import AWS from 'aws-sdk'
import get from 'lodash/get'

AWS.config.region = get(process, 'env.AWS_REGION', '')
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: get(process, 'env.AWS_IDENTITY_ID', '')
})

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {
    Bucket: get(process, 'env.AWS_S3_BUCKET', '')
  }
})

export default s3
