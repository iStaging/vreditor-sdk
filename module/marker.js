const axios = require('axios')

const MarkerModule = class MarkerModule {
  create(panoramaId = '', markers = []) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('create markers: ', markers)

        const resp = await axios({
          method: 'post',
          url: `/api/v1/marker`,
          data: {
            panoramaId,
            markers
          }
        })
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }

  getById(panoramaId = '') {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('get markers: ', panoramaId)

        const resp = await axios({
          method: 'get',
          url: `/api/v1/marker`,
          params: {
            panoramaId
          }
        })
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }

  update(markers = []) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('update markers list: ', markers)

        const resp = await axios({
          method: 'put',
          url: `/api/v1/marker`,
          data: {
            markers: markers
          }
        })
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }

  remove(id = '') {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('delete marker: ', id)

        const resp = await axios({
          method: 'delete',
          url: `/api/v1/marker`,
          params: {
            id
          }
        })
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = MarkerModule
