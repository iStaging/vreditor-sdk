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

app.onCreatePanoramas = (data) => {
  console.log('onCreatePanoramas: ', data)
}

app.onDeletePanoramas = (data) => {
  console.log('onDeletePanoramas: ', data)
}

app.onUpdatePanorama = (data) => {
  console.log('onUpdatePanorama: ', data)
}

app.onSortPanoramas = (data) => {
  console.log('onSortPanoramas: ', data)
}

app.onSaveMarkerSuccess = (data) => {
  console.log('onSaveMarkerSuccess: ', data)
}

app.onSaveMarkerError = (data) => {
  console.log('onSaveMarkerError: ', data)
}
