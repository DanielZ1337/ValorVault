/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'primary': {
                    DEFAULT: '#ff4655',
                    50: '#ffedee',
                    100: '#ffdadd',
                    150: '#ffc8cc',
                    200: '#ffb5bb',
                    350: '#ffa3aa',
                    400: '#ff9099',
                    450: '#ff7e88',
                    500: '#ff6b77',
                    550: '#ff5966',
                    600: '#e63f4d',
                    650: '#cc3844',
                    700: '#b3313b',
                    750: '#992a33',
                    800: '#80232b',
                    850: '#661c22',
                    900: '#4c1519',
                    950: '#330e11',
                    1000: '#190708',
                },
                'secondary': '#702a29',
                'accent': '#edebe7',
                'accent-2': '#c5c0b6',
            },
            screens: {
                '3xl': '1920px',
                '4xl': '2560px',
            },
            keyframes: {
                'agent-bouncing': {
                    '0%, 100%': {transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'},
                    '50%': {transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'},
                },
            },
            animation: {
                'agent-bounce': 'agent-bouncing 3s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
