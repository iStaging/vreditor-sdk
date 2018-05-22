// Make sure you have already using aframe and vreditor-sdk js first.

// New and init vreditor with the element you give and the data(panoramas) which come from vrmaker backend service.
var vrEditor = new VREditor()

vrEditor.init({
  clientURL: '', // enter the website you host to make sure share function work.
  serverURL: 'http://localhost:3000', // enter the api server you host to connect the node sample server.
  el: '#vreditor-sdk',
  lang: 'zh-cn'
})
