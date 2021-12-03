# @chalkygames123/stylelint-config

[![code style: airbnb](https://img.shields.io/badge/code_style-airbnb-ff5a5f?logo=airbnb&logoColor=fff)](https://github.com/airbnb/javascript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4?logo=prettier&logoColor=fff)](https://github.com/prettier/prettier)
[![semantic-release: conventionalcommits](https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![Renovate: enabled](https://img.shields.io/badge/Renovate-enabled-brightgreen?logo=RenovateBot&logoColor=fff)](https://renovatebot.com/)
[![CI](https://github.com/chalkygames123/stylelint-config/actions/workflows/ci.yaml/badge.svg)](https://github.com/chalkygames123/stylelint-config/actions/workflows/ci.yaml)

Default Stylelint config used by @chalkygames123

## Install

```shell
$ npm install @chalkygames123/stylelint-config --save-dev
```

## Usage

This package provides a single config that covers both CSS and SCSS. It will automatically apply SCSS rules to `.scss` files. Extend it in your config:

```javascript
// .stylelintrc.js

module.exports = {
	extends: ['@chalkygames123/stylelint-config'],
};
```

### Prettier

When using Stylelint with Prettier, you should extend [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier) after any other shareable configs to turn off all rules that are unnecessary or might conflict with Prettier. While the above configs include rules that are turned off by doing that and have a different format from Prettier, you can also extend `@chalkygames123/stylelint-config/prettier` if you want to turn them back on:

```javascript
// .stylelintrc.js
module.exports = {
	extends: [
		'@chalkygames123/stylelint-config',
		'stylelint-config-prettier',
		'@chalkygames123/stylelint-config/prettier',
	],
};
```
