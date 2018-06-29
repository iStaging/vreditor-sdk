const axios = require('axios')

const TenantModule = class TenantModule {
  login (username, password) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('tenant login')

        const resp = await axios({
          method: 'post',
          url: `/api/v1/tenant/login`,
          data: {
            username,
            password
          }
        })
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = TenantModule
