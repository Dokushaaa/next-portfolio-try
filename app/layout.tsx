// data
import type { Metadata } from "next";
// fonts
import {
	Dela_Gothic_One,
	Fira_Code,
	Geist,
	Geist_Mono,
	Gothic_A1,
} from "next/font/google";
// special
import "./globals.css";
import { ThemeProvider } from "@/global/theme/theme-provider";
import { ReduxProvider } from "@/global/helper/Provider";
import { StoreProvider } from "@/global/store/StoreContext";

const fira = Fira_Code({
	variable: "--font-Fira-Code",
	subsets: ["latin"],
});
const heading = Gothic_A1({
	weight: "400",
});
const heading2 = Dela_Gothic_One({
	weight: "400",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "NextJs Portfolio",
	description: "Modern and Minimalist",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			// prevents error from hydration warning
			suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${heading} ${heading2} ${fira.variable} antialiased`}>
				{/* store */}
				<ReduxProvider>
					<StoreProvider>
						{/* lightmode */}
						<ThemeProvider
							attribute='class'
							defaultTheme='dark'
							themes={["light", "dark"]}
							enableSystem
							disableTransitionOnChange>
							{children}
						</ThemeProvider>
					</StoreProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
