// Make sure you have already using aframe and vreditor-sdk js first.

var app = new VREditor()

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
