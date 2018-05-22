const axios = require('axios')
const CredentialModule = require('../module/credential')

const credentialModule = new CredentialModule()

const UploadModule = class UploadModule {
  upload (file = {}, fileName = '', contentType = '') {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('upload aliyun: ', testImg)
        const signUrl = await credentialModule.getSignUrl(fileName, contentType)
        const resp = await axios({
          method: 'put',
          url: signUrl,
          body: {
            file
          }
        })
        resolve(resp.data)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = UploadModule
