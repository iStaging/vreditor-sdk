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

Run sample nodejs server, change the account you signup in istaging website and start it, that's all.
(Also, you can integrate api to your own server, check the api documation.)

### ES6:

``` bash
// You need a server to communicate istaging service first.
// In the config/index.js, enter your account/password then start the sample node server.
```

``` bash
// Before use vreditor-sdk, you need to have aframe first.
// ex: `npm install aframe --save`
import 'aframe'

// import vreditor-sdk js, css.
import 'vreditor-sdk'
import 'vreditor-sdk/dist/vreditor-sdk.css'

// init VREditor
VREditor.init({
  clientURL: 'xxx',
  serverURL: 'http://localhost:3000', // Point to your backend server, here we point to the sample node server.
  el: '#vreditor-sdk',
  lang: 'en' // We support 'en' and 'zh-cn' now.
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
  clientURL: 'xxx',
  serverURL: 'http://localhost:3000', // Point to your server, here we point to the sample node server.
  el: '#vreditor-sdk',
  lang: 'zh-cn' // We support 'en' and 'zh-cn' now.
})
```

### VR Editor SDK is easily bind with VR Viewer SDK
iStaging VR Editor is a WebVR solution for developers, you can edit your content, and display by VR Viewer.
Check out node sample server in the exmaples folder to explore what we do it.

``` bash
npm start
```

# Thanks
