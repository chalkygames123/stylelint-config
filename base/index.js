const stylelintConfigRecessOrder = require('stylelint-config-recess-order')

module.exports = {
  extends: ['stylelint-config-recess-order'],
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  rules: {
    'alpha-value-notation': 'number',
    'color-named': 'never',
    'declaration-no-important': true,
    'font-weight-notation': [
      'numeric',
      {
        ignore: ['relative'],
      },
    ],
    'function-url-no-scheme-relative': true,
    'max-line-length': null,
    'no-descending-specificity': null,
    'no-empty-first-line': null,
    'no-empty-source': null,
    'number-max-precision': null,
    'order/order': [
      [
        {
          type: 'at-rule',
          name: 'extend',
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false,
        },
        'declarations',
        {
          type: 'at-rule',
          hasBlock: true,
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true,
        },
        'rules',
        {
          type: 'rule',
          selector: /^&::\w/,
        },
        {
          type: 'rule',
          selector: /^&:\w/,
        },
        {
          type: 'rule',
          selector: /^&/,
        },
      ],
    ],
    'order/properties-order': [
      stylelintConfigRecessOrder.rules['order/properties-order'],
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'selector-class-pattern': null,
    'selector-max-attribute': 2,
    'selector-max-class': 4,
    'selector-max-combinators': 4,
    'selector-max-compound-selectors': 4,
    'selector-max-id': 0,
    'selector-max-type': 2,
    'selector-max-universal': 1,
    'selector-no-qualifying-type': true,
    'string-quotes': null,
  },
}
