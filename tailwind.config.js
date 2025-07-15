/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('images/hero-pattern.png')",
			},
			fontFamily: {
				neuemon: 'neue',
				monasan: 'monaSan',
			},
			colors: {
				black: '#021D0B',
				border: '#D1D2D2',
				grey: '#66686A',
				lightBlack: '#8C8D8F',
				line: '#EFEFEF',
				green: '#099235',
				grey1: '#404244',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			animation: {
				gradient: 'gradient 8s linear infinite',
				marquee: 'marquee var(--duration) infinite linear',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
			},
			keyframes: {
				gradient: {
					to: {
						backgroundPosition: 'var(--bg-size) 0'
					}
				},
				marquee: {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(calc(-100% - var(--gap)))'
					}
				},
				'marquee-vertical': {
					from: {
						transform: 'translateY(0)'
					},
					to: {
						transform: 'translateY(calc(-100% - var(--gap)))'
					}
				}
			}
		}
	},

	// eslint-disable-next-line no-undef
	plugins: [require("tailwindcss-animate"), require('tailwindcss-motion')],
}
