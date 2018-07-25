// Make sure you have already using aframe and vreditor-sdk js first.

VREditor.init({
  username: '',
  password: '',
  serverURL: 'http://localhost:3000', // enter the api server you host to connect the node sample server.
  el: '#vreditor-sdk',
  lang: 'zh-cn',
  primaryColor: '#bcbdc1',
  shouldGoToDetailsPage: true, // shouldGoToDetailsPage will auto go to panoCollection detail page if you have only one panoCollection
  viewerPreviewHost: {
    url: 'xxx', // enter the website you host to make sure share function work.
    previewInSdk: true // defalt false
  }
})
