module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  rules: {
    'alpha-value-notation': 'number',
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
    'at-rule-no-vendor-prefix': true,
    'color-named': 'never',
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': [
      'numeric',
      {
        ignore: ['relative'],
      },
    ],
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'hue-degree-notation': 'angle',
    'media-feature-name-no-vendor-prefix': true,
    'no-empty-source': null,
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
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'selector-max-attribute': 2,
    'selector-max-class': 4,
    'selector-max-combinators': 4,
    'selector-max-compound-selectors': 4,
    'selector-max-id': 0,
    'selector-max-type': 2,
    'selector-max-universal': 1,
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,
  },
}