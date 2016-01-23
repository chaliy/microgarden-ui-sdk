module.exports = {
    'extends': [
        'defaults',
        'defaults/rules/react/airbnb'
    ],
    'globals': {
        'React': true,
        'ReactDOM': true
    },
    'env': {
        'browser': true,
        'node': true,
        'jquery': true,
        'es6': true
    },

    'ecmaFeatures': {
        'jsx': true,
        'modules': true
    },

    'plugins': [
        'react'
    ],

    'rules': {
        'quotes': [2, 'single', 'avoid-escape'],
        'one-var': 0,
        'newline-after-var': 0,
        'vars-on-top': 0,
        'padded-blocks': 0,
        'curly': [2, 'all'],
        'no-console': 0,
        'react/sort-comp': 0
    }
}
