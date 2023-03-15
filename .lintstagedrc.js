module.exports = {
	'*.{js,mjs,cjs,jsx}': ['eslint --fix', 'prettier --check --write'],
	'!*.{js,mjs,cjs,jsx}': 'prettier --check --write --ignore-unknown',
};
