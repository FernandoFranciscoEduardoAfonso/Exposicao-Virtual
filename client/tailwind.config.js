const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"], // Ou 'media' se preferir detetar automaticamente
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@heroui/theme/dist/components/(card|ripple).js"
  ],
    prefix: "",
    theme: {
        extend: {
            padding:{
                'p':'px-20'
            },
            colors: {
                'primary-color': '#fff',
				'secondary-base-color': '#B6D6FF',
				'secondary-medium-color': '#f0f9ff',
				'secondary-light-color': '#f6f7f8',
				'terciary-base-color': '#006CE9',
				'terciary-light-color': '#5CA5F9',
				'terciary-medium-color': '#2F5785',
				'terciary-dark-color': '#173960',
				'gray-base-color': '#ababab',
				'gray-medium-color': '#909090',
				'gray-light-color': '#ececec',
				'gray-dark-color': '#505050',
				'black-color': '#202020',

                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },

        screens: {
			xs: '0px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px'
		},
        
    },
  plugins: [require("tailwindcss-animate"),heroui()],
    // Adicione esta secção para habilitar variantes arbitrárias para data-atributos
    // Isto é crucial para classes como in-data-[state=active]:...
    corePlugins: {
        preflight: true, // Garante que o Tailwind resete os estilos padrões
    },
    // Habilita as variantes arbitrárias através do jit (Just-In-Time) mode
    // que geralmente está ativo por padrão no Tailwind 3+
    // Se ainda tiver problemas, pode ser necessário adicionar um plugin customizado
    // para `in-data` especificamente, mas isso é menos comum agora.
    // A classe `in-data` que o tailark usa é uma variante específica deles,
    // que o Tailwind normal pode não reconhecer por padrão.
    // Se `in-data` não funcionar, você pode precisar de um plugin PostCSS personalizado ou
    // de uma versão mais recente do Tailwind/PostCSS que suporte este formato, ou reescrever.
    // Alternativamente, para a maioria dos casos, Tailwind com `data-[state=active]` é o padrão.
    // O Tailark usa `in-data-[state=active]` que é uma sintaxe mais avançada.
    // Vamos tentar com o postcss plugin para o CSS.
};


