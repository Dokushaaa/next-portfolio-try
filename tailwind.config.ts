import fluid, { fontSize, screens } from "fluid-tailwind";
import type { Config } from "tailwindcss";

// ui changes:
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
// end of ui changes

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		/** @type {import('fluid-tailwind').FluidThemeConfig} */
		fluid: ({ theme }: { theme: any }) => ({
			defaultScreens: ["20rem", theme("screens.lg")],
			screens: {
				ms: "320px",
				mm: "375px",
				ml: "425px",
				portrait: "",
				landscape: "",
			},
		}),
		extend: {
			linearBorderGradients: ({ theme }: { theme: any }) => ({
				colors: theme("colors"),
				background: theme("colors"),
			}),
			backgroundImage: {
				bodyBG: "url('/public/endless-constellation.svg')",
				wavyBG: "url('/public/wavey-fingerprint.svg')",
				contactBG: "url('/public/contactme.svg')",
			},
			colors: {
				primary: "rgb(var(--primary) / <alpha-value>)",
				secondary: "rgb(var(--secondary) / <alpha-value>)",
				accent: "rgb(var(--accent) / <alpha-value>)",
				content: "rgb(var(--content) / <alpha-value>)",
				gray: "rgb(var(--gray) / <alpha-value>)",
				btnwhite: "rgb(var(--btnwhite) / <alpha-value>)",
				// dnt below:
				alert: "rgb(var(--alert) / <alpha-value>)",
				disable: "rgb(var(--disable) / <alpha-value>)",
				info: "rgb(var(--info) / <alpha-value>)",
				warning: "rgb(var(--warning) / <alpha-value>)",
				hazard: "rgb(var(--hazard) / <alpha-value>)",
			},
			letterSpacing: {
				name: "0.35em",
				extendedBtn: "0.2em",
			},
			backgroundColor: {
				primary: "rgb(var(--primary) / <alpha-value>)",
				secondary: "rgb(var(--secondary) / <alpha-value>)",
				accent: "rgb(var(--accent) / <alpha-value>)",
				content: "rgb(var(--content) / <alpha-value>)",
				gray: "rgb(var(--gray) / <alpha-value>)",
				btnwhite: "rgb(var(--btnwhite) / <alpha-value>)",
				// dnt below:
				alert: "rgb(var(--alert) / <alpha-value>)",
				disable: "rgb(var(--disable) / <alpha-value>)",
				info: "rgb(var(--info) / <alpha-value>)",
				warning: "rgb(var(--warning) / <alpha-value>)",
				hazard: "rgb(var(--hazard) / <alpha-value>)",
			},

			fill: {
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
				content: "var(--content)",
				gray: "var(--gray)",
				btnwhite: "var(--btnwhite)",
				// dnt below:
				alert: "var(--alert)",
				disable: "var(--disable)",
				info: "var(--info)",
				warning: "var(--warning)",
				hazard: "var(--hazard)",
			},

			gridTemplateColumns: {
				"auto-fill": "repeat(auto-fit, minmax(300px, 1fr))",
			},
			fontFamily: {
				Heading: "Dela Gothic One",
				Heading2: "Gothic A1",
				DelaGothicOne: "Dela Gothic One",
				Kanit: "Kanit",
				Inter: "Inter",
				Fira: "Fira Code",
			},
			animation: {
				spotlight: "spotlight 2s ease .75s 1 forwards",
				shimmer: "shimmer 2s linear infinite",
			},
			keyframes: {
				shimmer: {
					from: {
						backgroundPosition: "0 0",
					},
					to: {
						backgroundPosition: "-200% 0",
					},
				},
				spotlight: {
					"0%": {
						opacity: "0",
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					// todo :fix this this was a num before. now its a string due to ts complains
					"100%": {
						opacity: "1",
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
			},
		},
		screens,
		fontSize,
	},
	plugins: [
		fluid({
			checkSC144: false, // default: true
		}),
		addVariablesForColors,
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					"bg-grid": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					"bg-grid-small": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					"bg-dot": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			);
		},
	],
	darkMode: "class",
} satisfies Config;

// for acertentiyUi
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
