module.exports = {
	extends: ['stylelint-config-standard', './prettier.js'],
	plugins: ['stylelint-order'],
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	rules: {
		'alpha-value-notation': 'percentage',
		'color-named': 'never',
		'comment-word-disallowed-list': [
			['/^TODO/'],
			{
				severity: 'warning',
			},
		],
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
		'selector-no-qualifying-type': [
			true,
			{
				ignore: ['attribute'],
			},
		],
		'selector-not-notation': 'complex',
		'string-quotes': null,
		'value-keyword-case': [
			'lower',
			{
				camelCaseSvgKeywords: true,
			},
		],
	},
	overrides: [
		{
			files: '**/*.scss',
			extends: ['stylelint-config-standard-scss', './prettier.js'],
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
				'scss/double-slash-comment-empty-line-before': [
					'always',
					{
						except: ['first-nested'],
						ignore: ['between-comments', 'inside-block', 'stylelint-commands'],
					},
				],
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
		},
	],
};
