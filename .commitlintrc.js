const Configuration = {
    extends: ['@commitlint/config-conventional'],
    plugins: [{ rules: require('./lint') }],
    rules: {
        'scope-case': [2, 'always', 'upper'],
        'header-pattern': [2, 'always'],
        'body-leading-blank': [2, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'body-min-length': [2, 'always', 20],
        'body-case': [2, 'always', 'sentence-case'],
        'body-empty': [2, 'never'],
        'body-full-stop': [2, 'always', '.'],
        'body-pattern': [2, 'always']
    }
};

module.exports = Configuration;