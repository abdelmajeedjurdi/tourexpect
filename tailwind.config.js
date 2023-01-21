const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            backgroundColor: {
                'main-orange': '#FF8200',
                'main-indigo': '#283A97',
                'main-blue': '#00aeef',
            },
            textColor: {
                'main-orange': '#FF8200',
                'main-indigo': '#283A97',
                'main-blue': '#00aeef',
            },

        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
