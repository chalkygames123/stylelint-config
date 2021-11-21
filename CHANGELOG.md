### [6.0.1](https://github.com/chalkygames123/stylelint-config/compare/v6.0.0...v6.0.1) (2021-11-21)


### Bug Fixes

* stop extending `@chalkygames123/stylelint-config/prettier` ([5d2febb](https://github.com/chalkygames123/stylelint-config/commit/5d2febbf5c44f2f0960f6a8c69011cff226b7c8a))

## [6.0.0](https://github.com/chalkygames123/stylelint-config/compare/v5.0.1...v6.0.0) (2021-11-21)


### ⚠ BREAKING CHANGES

* The `@chalkygames123/stylelint-config/prettier` shared config has been removed. It was intended to include only rules that are disabled by `stylelint-config-prettier` but have a different format from Prettier. However, since the `at-rule-empty-line-before` rule has the same format as Prettier, and the `rule-empty-line-before` rule is not disabled as of `stylelint-config-prettier` v9.0.0, the config is no longer required.

### Bug Fixes

* remove `@chalkygames123/stylelint-config/prettier` shareable config ([43e2038](https://github.com/chalkygames123/stylelint-config/commit/43e2038b272bca947dfd64f0ea274656dc127ba5))

### [5.0.1](https://github.com/chalkygames123/stylelint-config/compare/v5.0.0...v5.0.1) (2021-10-12)


### Bug Fixes

* **deps:** pin dependencies ([3850b8e](https://github.com/chalkygames123/stylelint-config/commit/3850b8ed3a64ee9b459d87c42dbf2e5bfc7f5e17))

## [5.0.0](https://github.com/chalkygames123/stylelint-config/compare/v4.0.1...v5.0.0) (2021-07-11)


### ⚠ BREAKING CHANGES

* Properties for which the order is unspecified are now expected to be after any other properties in alphabetical order.

### Features

* change `unspecified` option of `order/properties-order` rule to `bottomAlphabetical` ([b9a27ab](https://github.com/chalkygames123/stylelint-config/commit/b9a27abcba2eaafbed129ae46915781f9fb075b9))

### [4.0.1](https://github.com/chalkygames123/stylelint-config/compare/v4.0.0...v4.0.1) (2021-05-31)


### Bug Fixes

* **scss:** disable `no-descending-specificity` rule that was unintentionally enabled ([b16df36](https://github.com/chalkygames123/stylelint-config/commit/b16df367491f733d99856d2e3aed65de4092dcd7))

## [4.0.0](https://github.com/chalkygames123/stylelint-config/compare/v3.0.2...v4.0.0) (2021-04-26)


### ⚠ BREAKING CHANGES

* **deps:** update peer dependency stylelint to >=13.13.0

### Bug Fixes

* **deps:** update dependency stylelint-config-standard to v22 ([104ab0f](https://github.com/chalkygames123/stylelint-config/commit/104ab0f887b00034c050cac42ca9f9cb0211ef91))
* **deps:** update peer dependency stylelint to >=13.13.0 ([8042eed](https://github.com/chalkygames123/stylelint-config/commit/8042eed29112821397d4c6ad62d8ac889f8a2e51))

### [3.0.2](https://github.com/chalkygames123/stylelint-config/compare/v3.0.1...v3.0.2) (2021-04-06)


### Bug Fixes

* disable `no-descending-specificity` rule due to its limitation ([01dd69f](https://github.com/chalkygames123/stylelint-config/commit/01dd69f3ed784aa89a1586c282a4229fa365a09a))

### [3.0.1](https://github.com/chalkygames123/stylelint-config/compare/v3.0.0...v3.0.1) (2021-03-26)


### Reverts

* chore: tweak .husky/.gitignore ([06c6a22](https://github.com/chalkygames123/stylelint-config/commit/06c6a22cbb5605db167d141580a72adb13f62439))

## [3.0.0](https://github.com/chalkygames123/stylelint-config/compare/v2.2.0...v3.0.0) (2021-03-20)


### ⚠ BREAKING CHANGES

* **deps:** update peer dependency stylelint to >=13.12.0

### Bug Fixes

* **deps:** update peer dependency stylelint to >=13.12.0 ([bf2b2cd](https://github.com/chalkygames123/stylelint-config/commit/bf2b2cd9201b4ac757f706cdca7070d991a5ff64))
* remove `declaration-block-no-duplicate-custom-properties` rule ([0ffe455](https://github.com/chalkygames123/stylelint-config/commit/0ffe455b364317be7e388eef4caf2585382b6185))
* **deps:** update dependency stylelint-config-standard to v21 ([89f4a29](https://github.com/chalkygames123/stylelint-config/commit/89f4a29b286f770a3c91b761c5515d4487f629a8))

## [2.2.0](https://github.com/chalkygames123/stylelint-config/compare/v2.1.1...v2.2.0) (2021-02-14)


### Features

* enable declaration-block-no-duplicate-custom-properties rule ([e1c4a40](https://github.com/chalkygames123/stylelint-config/commit/e1c4a4002a4068ac9fa17b5d36e986aac6946aab))
* enable reportInvalidScopeDisables and reportNeedlessDisables options ([da250ff](https://github.com/chalkygames123/stylelint-config/commit/da250ff83b0762854a346ba577575acced2a1be1))


### Bug Fixes

* remove unnecessary dependency stylelint-order ([9219012](https://github.com/chalkygames123/stylelint-config/commit/9219012d599fc77d0f7db3de0b257ec3bf6c9800))

### [2.1.1](https://github.com/chalkygames123/stylelint-config/compare/v2.1.0...v2.1.1) (2020-11-26)


### Bug Fixes

* **scss:** disable the no-empty-source rule that was unintentionally enabled ([d3c7559](https://github.com/chalkygames123/stylelint-config/commit/d3c755984f4dc43fd9b54a43e3c7f113f9994d12))

## [2.1.0](https://github.com/chalkygames123/stylelint-config/compare/v2.0.1...v2.1.0) (2020-11-26)


### Features

* move the rules that are conflict with Prettier into a separate config ([ff7f1b1](https://github.com/chalkygames123/stylelint-config/commit/ff7f1b1b57c8b2ae5a609b8c806a0f394ebc1169))


### Bug Fixes

* disable the no-empty-source rule that was unintentionally enabled ([dfa337a](https://github.com/chalkygames123/stylelint-config/commit/dfa337acda7585a9d10b8214e6659ccee2e9b31f))
* remove the declaration-empty-line-before rule ([cf8464e](https://github.com/chalkygames123/stylelint-config/commit/cf8464ed4cc3a140111bf4d1dfe2e3d88939c98a))

### [2.0.1](https://github.com/chalkygames123/stylelint-config/compare/v2.0.0...v2.0.1) (2020-11-26)


### Bug Fixes

* **scss:** disable the at-rule-no-unknown rule that was unintentionally enabled ([5223898](https://github.com/chalkygames123/stylelint-config/commit/5223898a38a2891819f462549bcb4a99728ee700))

## [2.0.0](https://github.com/chalkygames123/stylelint-config/compare/v1.0.1...v2.0.0) (2020-11-26)


### ⚠ BREAKING CHANGES

* The stylelint-config-prettier is no longer extended to make it optional and allow
users to extend additional configs.

### Bug Fixes

* stop extending the stylelint-config-prettier ([395fb05](https://github.com/chalkygames123/stylelint-config/commit/395fb05ca7ac75a92f44fb74a5192967e9becf6a))

### [1.0.1](https://github.com/chalkygames123/stylelint-config/compare/v1.0.0...v1.0.1) (2020-11-24)


### Bug Fixes

* remove unnecessary package.json#engines field ([128b747](https://github.com/chalkygames123/stylelint-config/commit/128b7476beba1a4b3497752a131e30d50066721c))

## 1.0.0 (2020-11-24)


### Features

* initial commit ([02e1ba2](https://github.com/chalkygames123/stylelint-config/commit/02e1ba23f9d7d871d50d04b4fc7a5d1b9be89dc5))
