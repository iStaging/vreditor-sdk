const axios = require('axios')

const CredentialModule = class CredentialModule {
  getSignUrl (type = '', fileName = '', contentType = '') {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('get aliyun oss token')

        const resp = await axios({
          method: 'get',
          url: `/api/v1/credential/signUrl`,
          params: {
            type,
            fileName,
            contentType
          }
        })
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = CredentialModule
