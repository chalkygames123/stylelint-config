module.exports = {
	rules: {
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['after-comment', 'blockless-after-same-name-blockless'],
				ignoreAtRules: ['else'],
			},
		],
	},
};
