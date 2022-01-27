module.exports = {
    mode: 'jit',
    theme: {
        extend: {
            animation: {
                'bloom': 'bloom 0.4s ease-out',
                'overbloom' : 'overbloom 0.33 ease-in'
            },
            keyframes: {
                bloom: {
                    from: {
                        transform: 'scale(0.5)',
                        opacity: '25%'
                    },
                    to: {
                        transform: 'scale(1)',
                        opacity: '100%'
                    }
                },
                overbloom: {
                    from: {
                        transform: 'scale(1)'
                    },
                    to: {
                        transform: 'scale(1.05)'
                    }
                }
            }
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}