# VREditor sdk

VREditor sdk is a full site service which help you to create and edit your VR content more easily.

## Resource

Tutorial: https://medium.com/@istaging_RD/vrmaker-sdk-create-your-virtual-tour-c6b4d796da29

Document: https://evs-doc-test.istaging.com.cn

vreditor-sdk github: https://github.com/iStaging/vreditor-sdk

vrviewer-sdk github: https://github.com/iStaging/vrviewer-sdk

## Getting Started

* First, you need to sign up VR Maker SDK account by contact iStaging mailto:benjamin@staging.com.tw.

* Then check your nodejs version, we recommend you use the version upper 8.5.0.

## How to use

```javascript
npm install vreditor-sdk (or use yarn)
```

// You need a server to communicate istaging service first.

Run sample nodejs server, check it all.
(Also, you can integrate api to your own server, check the api documation.)

### ES6:

``` bash
// Before use vreditor-sdk, you need to have aframe first.
// ex: `npm install aframe --save`
import 'aframe'

// import vreditor-sdk js, css.
import 'vreditor-sdk'
import 'vreditor-sdk/dist/vreditor-sdk.css'

// init VREditor
VREditor.init({
  username: '', // enter the tenant account username you signup.
  password: '', // enter tenant account password you signup.
  serverURL: 'http://localhost:3000', // Point to your backend server, here we point to the sample node server.
  el: '#vreditor-sdk',
  lang: 'en', // We support 'en' and 'zh-cn' now.
  shouldGoToDetailsPage: true, // default false, if you only have one panoCollection, it will go to panoCollection detail page automatically.
  viewerPreviewHost: {
    url: 'xxx', // enter the website you host to make sure share function work.
    previewInSdk: true // default false, open new window or inside sdk.
  }
})
...
// Everything is ready, enjoy.
```

### Use static file by cdn:

``` bash
// in .html file.
<head>
  <link href="https://www.istaging.com/sdk/vreditor-sdk.css" rel="stylesheet"></link>
</head>

<body>
  <div id="vreditor-sdk"></div>

  <script type="text/javascript" src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
  <script type="text/javascript" src="https://www.istaging.com/sdk/vreditor-sdk.js"></script>
</body>
```

``` bash
// In .js file.

app.init({
  username: '', // enter the tenant account username you signup.
  password: '', // enter tenant account password you signup.
  serverURL: 'http://localhost:3000', // Point to your server, here we point to the sample node server.
  el: '#vreditor-sdk',
  lang: 'zh-cn', // We support 'en' and 'zh-cn' now.
  shouldGoToDetailsPage: true, // default false, if you only have one panoCollection, it will go to panoCollection detail page automatically.
  viewerPreviewHost: {
    url: 'xxx', // enter the website you host to make sure share function work.
    previewInSdk: true // default false, open new window or inside sdk.
  }
})
```

### VR Editor SDK is easily bind with VR Viewer SDK
iStaging VR Editor is a WebVR solution for developers, you can edit your content, and display by VR Viewer.
Check out node sample server in the exmaples folder to explore what we do it.

``` bash
npm start
```

# Thanks
