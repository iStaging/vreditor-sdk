// Make sure you have already using aframe and vreditor-sdk js first.

VREditor.init({
  username: '',
  password: '',
  serverURL: 'http://localhost:3000', // enter the api server you host to connect the node sample server.
  el: '#vreditor-sdk',
  lang: 'en',
  primaryColor: '#bcbdc1',
  defaultMarkerIcons: {
    point: [{
      name: 'leftArrow',
      url: 'https://evs-prod.oss-cn-hangzhou.aliyuncs.com/static/iconTypes/left-arrow.png'
    }, {
      name: 'leftFrontArrow',
      url: 'https://evs-prod.oss-cn-hangzhou.aliyuncs.com/static/iconTypes/left-front-arrow.png'
    }, {
      name: 'frontArrow',
      url: 'https://evs-prod.oss-cn-hangzhou.aliyuncs.com/static/iconTypes/front-arrow.png'
    }, {
      name: 'rightFrontArrow',
      url: 'https://evs-prod.oss-cn-hangzhou.aliyuncs.com/static/iconTypes/right-front-arrow.png'
    }, {
      name: 'rightArrow',
      url: 'https://evs-prod.oss-cn-hangzhou.aliyuncs.com/static/iconTypes/right-arrow.png'
    }, {
      name: 'point',
      url: 'https://evs-prod.oss-cn-hangzhou.aliyuncs.com/static/iconTypes/point.png'
    }],
    product: [{
      name: 'product',
      url: 'https://evs-prod.oss-cn-hangzhou.aliyuncs.com/static/iconTypes/product.png'
    }],
    tag: [{
      name: 'tag',
      url: 'https://evs-prod.oss-cn-hangzhou.aliyuncs.com/static/iconTypes/tag.png'
    }],
    memo: [{
      name: 'memo',
      url: 'https://evs-prod.oss-cn-hangzhou.aliyuncs.com/static/iconTypes/memo.png'
    }],
    popup: [{
      name: 'video',
      url: 'https://evs-prod.oss-cn-hangzhou.aliyuncs.com/static/iconTypes/video.png'
    }, {
      name: 'link',
      url: 'https://evs-prod.oss-cn-hangzhou.aliyuncs.com/static/iconTypes/link.png'
    }]
  },
  shouldGoToDetailsPage: true, // shouldGoToDetailsPage will auto go to panoCollection detail page if you have only one panoCollection
  viewerPreviewHost: {
    url: 'xxx', // enter the website you host to make sure share function work.
    previewInSdk: true // defalt false
  }
})
