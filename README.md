# VREditor sdk

VREditor sdk help you to create and edit your VR content more easily.

## documation
[https://istaging.gitbook.io/vr-maker-sdk](https://istaging.gitbook.io/vr-maker-sdk)

- vreditor
  - panoCollection
    - CRUD
    - copy
    - preview
  - panorama
    - CRUD
    - sort
    - search
  - marker
    - point
    - tag
    - memo
    - panorama default view
  - language
    - en
    - zh-cn

## How to use

### ES6:

``` bash
npm install vreditor-sdk --save (yarn)
```

``` bash
// Before use vreditor-sdk, you need to have aframe first.
// ex: `npm install aframe --save`
import 'aframe'

// import vreditor-sdk js, css.
import 'vreditor-sdk'
import 'vreditor-sdk/dist/vreditor-sdk.css'

var app = new VREditor()

// Init with your token (login istaging service to get the token).
// We support 'en' and 'zh-cn' now.
app.init({
  el: '#vreditor-sdk',
  lang: 'en'
})
...
// Everything is ready by your token, enjoy.

// Check more by clone and install it `npm run dev`.
```

### Use static file by cdn:

``` bash
// in .html file.
<head>
  <link href="../dist/vreditor-sdk.css" rel="stylesheet"></link>
</head>

<body>
  <div id="vreditor-sdk"></div>

  <script type="text/javascript" src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
  <script type="text/javascript" src="../dist/vreditor-sdk.js"></script>
  <script type="text/javascript" src="./index.js"></script>
</body>
```

``` bash
// In .js file.
var app = new VREditor()

// Init with your token (login istaging service to get the token).
// We support 'en' and 'zh-cn' now.
app.init({
  el: '#vreditor-sdk',
  lang: 'zh-cn'
})
// Check more by clone and install it `npm start`.
```

# Thanks
