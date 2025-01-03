import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import {
	Dela_Gothic_One,
	Fira_Code,
	Geist,
	Geist_Mono,
	Gothic_A1,
} from "next/font/google";

import "./globals.css";
import { ReduxProviders } from "@/global-storage/redux/Provider";
import { StoreProvider } from "@/global-storage/store/StoreContext";

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
				<ReduxProviders>
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
				</ReduxProviders>
			</body>
		</html>
	);
}
