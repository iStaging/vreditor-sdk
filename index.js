// vreditor-sdk need to have aframe first.
// ```
// npm install aframe vreditor-sdk --save
// ```
// Or use yarn. After you install, import vreditor sdk's js, css. Check the sample.

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
