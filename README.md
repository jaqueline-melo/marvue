# MARVUE

<a href="https://www.codefactor.io/repository/github/marco-tulio-melo/marvue"><img src="https://www.codefactor.io/repository/github/marco-tulio-melo/marvue/badge" alt="CodeFactor" /></a>

## A boilerplate to `assemble` your team. Whatever it takes.

The main goal of **Marvue** is to set patterns to be followed by any front-end developer working on Vue JS projects.

<p align="center">
	<img src="https://i.imgur.com/Bg3mtGB.png" width="400px" />
</p>

## :rocket: Startup

Step by step to get this up and running

### Clone repo and go to project folder

```sh
$ git clone https://github.com/marco-tulio-melo/marvue.git && cd marvue
```

### Install dependencies

```sh
$ npm install
```

### Start server

```sh
$ npm run serve
```

### Compiles and minifies for production

```sh
$ npm run build
```

To check it on the browser, simply go to: `http://localhost:8080`

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## :trident: Git flow

To file a new a feature

- create a branch from `master` branch. Use the pattern: `feature/description`
- file a pull request on `master` branch
- since your PR is aproved, it will be merged to `master` branch
- in a moment in time we'll create a release, using the pattern: `release/vX.X.X`

## :heavy_check_mark: Patterns

These are some of patterns definitions to help us to keep a default arquitecture.

- Package manager: [npm](https://medium.com/@vincentnewkirk/npm-vs-yarn-2019-e88757b17038), sure
- Node version: [v10.x](https://nodejs.org/ca/blog/release/v10.16.3)
- Background: [Vue CLI](https://cli.vuejs.org)
- UI Kit library: [Vuetify js](https://vuetifyjs.com)
- Linter: [standardjs](https://standardjs.com) and [vue/recommended](https://github.com/vuejs/eslint-plugin-vue)
- Http Requests: [Axios](https://github.com/axios/axios#features)
- i18n: [vue-i18n](https://www.npmjs.com/package/vue-i18n)
- Docker compose and dockerfile

## :floppy_disk: Components

Here is component's and UI libs dependencies:

- Charts: [vue-apexcharts](https://apexcharts.com/docs/vue-charts)
- Vuetify: [Vuetify](https://vuetifyjs.com/pt-BR/)

## :open_file_folder: Project structure

- **src/assets**: Static files (images, fonts and icons)
- **src/common**: Utilities, resources, constants, assets, configurations, i18n and others
- **src/components**: Components of React to be shared and reused in the project
- **src/containers**: Page components that apply business knowledge and present themselves as pages
- **src/routes**: Routes of app to be used by SPA and user navigation
- **src/store**: State management

<div id='license'/>

## :scroll: License 

```
MIT license. Copyright (c) 2020 Marco Túlio Melo.
For more information, see the LICENSE file.
```
