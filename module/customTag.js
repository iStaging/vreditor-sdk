const axios = require('axios')

const CustomTagModule = class CustomTagModule {
  getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('get customTags by platform: ')

        const resp = await axios({
          method: 'get',
          url: `/api/v1/customTag`
        })
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = CustomTagModule
