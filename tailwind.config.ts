import colors from './config/colors'

module.exports = {
    theme: {
        extend: {
            colors: {
                primary: colors.primary,
                secondary: colors.secondary,
                accent1: colors.accent1,
                accent2: colors.accent2,
                text: colors.text
            },
            fontFamily: {
                monograss: ['"Mono Grass"', 'sans-serif'],
                poppins: ['"Poppins"', 'sans-serif'],
            },
        },
    },
}