# VREditor sdk

VREditor sdk is a full site service which help you to create and edit your VR content more easily.

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
    - product tag
    - panorama default view
    - floorplan
  - language
    - en
    - zh-cn

## How to use
Clone the sample nodejs server, change the account you signup in istaging website and start it, that's all.
(Also, you can integrate api to your own server, check the api documation.)

### ES6:

``` bash
// you need server to communicate istaging service first.
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

// Point to your server, here we point to the sample node server.
// We support 'en' and 'zh-cn' now.
app.init({
  serverURL: 'http://localhost:3000',
  el: '#vreditor-sdk',
  lang: 'en'
})
...
// Everything is ready after you login, enjoy.
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

// Point to your server, here we point to the sample node server.
// We support 'en' and 'zh-cn' now.
app.init({
  serverURL: 'http://localhost:3000'
  el: '#vreditor-sdk',
  lang: 'zh-cn'
})
// Check more by clone and install it with `npm start`.
```

# Thanks
