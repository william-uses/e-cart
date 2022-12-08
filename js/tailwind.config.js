tailwind.config = {
    theme: {
        extend: {
            keyframes: {
                loader:
                {
                    '0%': {
                        transform: 'rotate(0deg)',
                        border: '4px solid #f44336',
                        'border-left-color': 'transparent'
                    },

                    '50%': {
                        transform: 'rotate(180deg)',
                        border: '4px solid blue',
                        'border-top-color': 'transparent'
                    },

                    '100%': {
                        transform: 'rotate(360deg)',
                        border: '4px solid #f44336',
                        'border-right-color': 'transparent'
                    }
                }
            },
            animation: {
                loader: 'loader 1s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            },
            boxShadow: {
                'header-shadow': '0 1px 15px 1px black',
              }
        }
    }
}