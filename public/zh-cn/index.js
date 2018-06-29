// Make sure you have already using aframe and vreditor-sdk js first.

VREditor.init({
  username: '', // enter the tenant account username you signup.
  password: '', // enter tenant account password you signup.
  clientURL: '', // enter the website you host to make sure share function work.
  serverURL: 'http://localhost:3000', // enter the api server you host to connect the node sample server.
  el: '#vreditor-sdk',
  lang: 'zh-cn'
})
