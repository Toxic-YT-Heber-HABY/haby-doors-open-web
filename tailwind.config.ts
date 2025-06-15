
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				haby: {
					primary: '#7E69AB',
					secondary: '#6E59A5',
					dark: '#1A1F2C',
					light: '#E5DEFF',
					accent: '#D946EF'
				}
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				heading: ['Montserrat', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }: { addUtilities: any }) {
			const newUtilities = {
				'.text-gradient-safe': {
					'color': '#7E69AB',
					'font-weight': '600',
					'@media (min-width: 1024px) and (hover: hover) and (pointer: fine)': {
						'background': 'linear-gradient(135deg, #7E69AB, #D946EF)',
						'-webkit-background-clip': 'text',
						'-webkit-text-fill-color': 'transparent',
						'background-clip': 'text',
						'@supports not (-webkit-background-clip: text)': {
							'background': 'none',
							'-webkit-background-clip': 'border-box',
							'-webkit-text-fill-color': 'initial',
							'color': '#7E69AB'
						}
					}
				},
				'.text-gradient-rainbow-safe': {
					'color': '#D946EF',
					'font-weight': '600',
					'@media (min-width: 1024px) and (hover: hover) and (pointer: fine)': {
						'background': 'linear-gradient(90deg, #D946EF 0%, #3b82f6 25%, #10b981 50%, #f59e0b 75%, #D946EF 100%)',
						'-webkit-background-clip': 'text',
						'-webkit-text-fill-color': 'transparent',
						'background-clip': 'text',
						'@supports not (-webkit-background-clip: text)': {
							'background': 'none',
							'-webkit-background-clip': 'border-box',
							'-webkit-text-fill-color': 'initial',
							'color': '#D946EF'
						}
					}
				},
				'.text-gradient-hero-safe': {
					'color': '#D946EF',
					'font-weight': '700',
					'text-shadow': '0 1px 2px rgba(0, 0, 0, 0.1)',
					'@media (min-width: 1024px) and (hover: hover) and (pointer: fine)': {
						'background': 'linear-gradient(135deg, #D946EF, #ec4899, #3b82f6)',
						'-webkit-background-clip': 'text',
						'-webkit-text-fill-color': 'transparent',
						'background-clip': 'text',
						'@supports not (-webkit-background-clip: text)': {
							'background': 'none',
							'-webkit-background-clip': 'border-box',
							'-webkit-text-fill-color': 'initial',
							'color': '#D946EF'
						}
					}
				},
				'.bg-gradient-mobile-safe': {
					'background-color': '#7E69AB',
					'@media (min-width: 768px)': {
						'background': 'linear-gradient(135deg, #7E69AB, #6E59A5)',
					}
				}
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
