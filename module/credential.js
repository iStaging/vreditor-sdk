const axios = require('axios')

const CredentialModule = class CredentialModule {
  getSignUrl (fileName = '', contentType = '') {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('get aliyun oss token')

        const resp = await axios({
          method: 'get',
          url: `/api/v1/credential/signUrl`,
          params: {
            fileName,
            contentType
          }
        })
        resolve(resp.data)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = CredentialModule
