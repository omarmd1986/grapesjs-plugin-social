## Options

|Option|Description|Default|
|-|-|-
|`option1`|Description option|`default value`|





## Download

* NPM
  * `npm i grapesjs-plugin-social`
* GIT
  * `git clone https://github.com/omarmd1986/grapesjs-plugin-social.git`





## Usage

```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-plugin-social.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['gjs-social'],
      pluginsOpts: {
        'gjs-social': {
          // options
        }
      }
  });
</script>
```





## Development

Clone the repository

```sh
$ git clone https://github.com/omarmd1986/grapesjs-plugin-social.git
$ cd grapesjs-plugin-social
```

Install dependencies

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```


## License

BSD 3-Clause
