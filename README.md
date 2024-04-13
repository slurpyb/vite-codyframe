<div align="center">
  <a href="https://vitejs.dev/"><img width="200" height="200" hspace="10" src="https://vitejs.dev/logo.svg" alt="vite logo" /></a>
  <a href="https://codyhouse.co/"><img width="200", height="200" hspace="10", src="https://raw.githubusercontent.com/codyhouse/codyframe/master/main/img/logo.png" /></a>
  <h1>Vite Codyframe</h1>

  <p>
    Quick start repository for creating websites using <a href="https://codyhouse.co" >Codyframe</a>
  </p>
</div>

## Why
I discovered <a href="https://vitejs.dev/">Vite</a> whilst working on a FastAPI project using Tiangolo's wonderful <a href="https://github.com/tiangolo/full-stack-fastapi-template">full-stack production template</a>. The bundled Gulpfile included with Codyframe always gave me grief on my systems so I swapped it out for good.

## Requirements
- node>=20.x
- Access to Codyframe components (paid - optional)


## Installation
```bash
git clone https://github.com/slurpyb/vite-codyframe.git
```
```bash
cd vite-codyframe && npm install
```

```bash
npm run preview
```

## Usage
1. Install as above
2. Copy your SCSS components or custom SCSS to ```"src/scss/components"```
3. Copy your js components or custom js scripts to ```"src/js/components"```
4. Include your components in ```"src/js/main.js"```

```js
// src/js/main.js
// ...

// SCSS:
import '../scss/components/_1_404.scss'

// do not remove this
import '../../node_modules/codyframe/main/scss/util.scss'

// JS:
import './components/_1_adaptive-navigation.js'

// ...
```

> #### Q: Why import one-by-one instead of globbing?
>
> I've made a nasty habit out of dropping tons of components and scripts into a big directory and bloating my projects up so I'm trying to keep it to just what I need. I'm also a massive noob and couldn't get Vite to play nice with globs. Feel free to school me.

5. Build/bundle and run
```bash
npm run build && npm run preview
```

## Todo
- Include a filewatcher and auto-reload/auto-build plugin. I'm still demoing a few options.