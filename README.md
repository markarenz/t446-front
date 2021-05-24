# MMS Headless CMS

## Headless Architecture
- This frontend consumes the product of the CMS not an API from the CMS itself. This bolsters security and simplifies the operation
    - In this instance, the backend pushes content and images to an S3 bucket and the app pulls in that content at load time
    - For a larger site, naturally, we would split the content into separate files for easier loading, but since the whole site's content fits in a JSON file smaller than a JPG file, it makes sense to keep this structure for now.
- From a cost management perspective, this headless site is remarkably cheap to host.
- Please see the T446 Backend for more information on the content management system app (not an API)

## Starting the app
- npm run start
