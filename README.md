# @chalkygames123/stylelint-config

[![code style: airbnb](https://img.shields.io/badge/code_style-airbnb-ff5a5f?logo=airbnb&logoColor=fff)](https://github.com/airbnb/javascript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4?logo=prettier&logoColor=fff)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/semantic--release-enabled-brightgreen?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![Renovate: enabled](https://img.shields.io/badge/Renovate-enabled-brightgreen?logo=RenovateBot&logoColor=fff)](https://renovatebot.com/)
[![CI](https://github.com/chalkygames123/stylelint-config/actions/workflows/ci.yaml/badge.svg)](https://github.com/chalkygames123/stylelint-config/actions/workflows/ci.yaml)

Default stylelint config used by @chalkygames123

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

When using stylelint with Prettier, you should extend [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier) after any other shareable configs to turn off all rules that are unnecessary or might conflict with Prettier. While the above configs include rules that will be turned off by doing that, you can also extend `@chalkygames123/stylelint-config/prettier` if you want to turn them back on.

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
