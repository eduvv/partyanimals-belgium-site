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
            height: {
                '112': '28rem',
                '128': '32rem',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
                '6xl': '3rem',
            },
            dropShadow: {
                'xl': '0px 4px 2px #00000040',
                '2xl': '0px 6px 10px #00000060',
            },
            boxShadow: {
                'button-border': 'inset 0px 0px 0px 2px theme("colors.secondary")',
            }
        },
    },
}