const axios = require('axios')

const MarkerModule = class MarkerModule {
  create(markers = []) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('create markers')

        const resp = await axios({
          method: 'post',
          url: `/api/v1/marker`,
          data: {
            markers
          }
        })
        resolve(resp.data)
      } catch (error) {
        reject(error)
      }
    })
  }

  getById(panoId = '') {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('get markers')

        const resp = await axios({
          method: 'get',
          url: `/api/v1/marker`,
          params: {
            panoId
          }
        })
        resolve(resp.data)
      } catch (error) {
        reject(error)
      }
    })
  }

  // update(id = '', panoramas = []) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       console.log('update panorama')
  //
  //       const resp = await axios({
  //         method: 'put',
  //         url: `${istagingService.url}/api/v1/panorama`,
  //         headers: {
  //           'tenant-token': istagingService.token
  //         },
  //         params: {
  //           id
  //         },
  //         data: {
  //           panoramas
  //         }
  //       })
  //       resolve(resp.data)
  //     } catch (error) {
  //       reject(error)
  //     }
  //   })
  // }

  remove(id = '') {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('delete marker')

        const resp = await axios({
          method: 'delete',
          url: `/api/v1/marker`,
          params: {
            id
          }
        })
        resolve(resp.data)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = MarkerModule
