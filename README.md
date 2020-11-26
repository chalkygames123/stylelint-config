# @chalkygames123/stylelint-config

[![code style: airbnb](https://img.shields.io/badge/code_style-airbnb-ff5a5f?logo=airbnb&logoColor=fff)](https://github.com/airbnb/javascript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079)](https://github.com/semantic-release/semantic-release)

Default stylelint config used by @chalkygames123.

## Install

```shell
$ npm install @chalkygames123/stylelint-config --save-dev
```

## Usage

CSS:

```javascript
// .stylelintrc.js

module.exports = {
  extends: ['@chalkygames123/stylelint-config/css'],
}
```

SCSS:

```javascript
// .stylelintrc.js

module.exports = {
  extends: ['@chalkygames123/stylelint-config/scss'],
}
```