module.exports = {
	extends: ['stylelint-config-standard-scss', './base.js', './prettier.js'],
	rules: {
		'scss/at-each-key-value-single-line': true,
		'scss/at-function-named-arguments': [
			'never',
			{
				ignoreFunctions: ['color.adjust', 'color.change', 'color.scale'],
			},
		],
		'scss/at-mixin-argumentless-call-parentheses': 'always',
		'scss/comment-no-empty': null,
		'scss/comment-no-loud': true,
		'scss/declaration-nested-properties': 'never',
		'scss/dimension-no-non-numeric-values': true,
		'scss/function-color-relative': true,
		'scss/map-keys-quotes': 'always',
		'scss/no-duplicate-dollar-variables': [
			true,
			{
				ignoreDefaults: true,
			},
		],
		'scss/partial-no-import': true,
		'scss/selector-no-redundant-nesting-selector': true,
		'scss/selector-no-union-class-name': true,
	},
};