const axios = require('axios')
const {
  account
} = require('../config')

const TenantModule = class TenantModule {
  login (options = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('tenant login')

        const resp = await axios({
          method: 'post',
          url: `/api/v1/tenant/login`,
          data: account
        })
        resolve(resp.data)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = TenantModule
