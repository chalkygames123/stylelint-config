module.exports = {
	'*.{js,mjs,cjs,jsx}': ['eslint --fix', 'prettier --check --write'],
	'!*.{js,mjs,cjs,jsx}': 'prettier --check --write --ignore-unknown',
	'package.json': () => [
		'npm install --package-lock-only',
		'git add package-lock.json',
	],
};
