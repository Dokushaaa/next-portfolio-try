import type { Metadata } from "next";
import { Fira_Code, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fira = Fira_Code({
	variable: "--font-Fira-Code",
	subsets: ["latin"],
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
	information: "The NextJs Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				id='dark'
				className={`dark ${geistSans.variable} ${geistMono.variable} ${fira.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
