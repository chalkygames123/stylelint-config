# @chalkygames123/stylelint-config

[![code style: airbnb](https://img.shields.io/badge/code_style-airbnb-ff5a5f?logo=airbnb&logoColor=fff)](https://github.com/airbnb/javascript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4?logo=prettier&logoColor=fff)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079)](https://github.com/semantic-release/semantic-release)
[![Renovate: enabled](https://img.shields.io/badge/Renovate-enabled-brightgreen?logo=RenovateBot&logoColor=fff)](https://renovatebot.com)

Default stylelint config used by @chalkygames123.

## Install

```shell
$ npm install @chalkygames123/stylelint-config --save-dev
```

## Usage

This package provides configs for both CSS and SCSS. You can choose which one you would like to extend.

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

### Prettier

The above configs include rules that are turned off by the [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier). To turn them back on, you should also extend `@chalkygames123/stylelint-config/prettier` after the `stylelint-config-prettier`.

CSS:

```javascript
// .stylelintrc.js

module.exports = {
  extends: [
    '@chalkygames123/stylelint-config/css',
    'stylelint-config-prettier',
    '@chalkygames123/stylelint-config/prettier',
  ],
}
```

SCSS:

```javascript
// .stylelintrc.js

module.exports = {
  extends: [
    '@chalkygames123/stylelint-config/scss',
    'stylelint-config-prettier',
    '@chalkygames123/stylelint-config/prettier',
  ],
}
```
