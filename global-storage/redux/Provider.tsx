"use client";
import { Provider } from "react-redux";
import { store } from "./ReduxStore";

export function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Provider store={store}>{children}</Provider>;
}