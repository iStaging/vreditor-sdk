// VREditor sdk need to have aframe first.
// Then import vreditor sdk's js, css.

import 'aframe'
// import 'vreditor-sdk'
// import 'vreditor-sdk/dist/vreditor-sdk.css'
import './dist/vreditor-sdk'
import './dist/vreditor-sdk.css'

const app = new VREditor() // eslint-disable-line
app.init({
  el: '#vreditor-sdk',
  lang: 'zh-cn'
})
