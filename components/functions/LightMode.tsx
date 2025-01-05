"use client";
import MiniLogo from "@/components/functions/svg/MiniLogo";
import React from "react";

const LightMode = () => {
	function handleChangeColorTheme() {
		const body = document.querySelector("body");
		const currentTheme = localStorage.getItem("theme");

		if (currentTheme === "dark") {
			localStorage.setItem("theme", "light");
			body?.classList.remove("dark");
			body?.classList.add("light");
		} else {
			localStorage.setItem("theme", "dark");
			body?.classList.remove("light");
			body?.classList.add("dark");
		}
	}

	React.useEffect(() => {
		const body = document.querySelector("body");
		const savedTheme = localStorage.getItem("theme");

		if (savedTheme) {
			body?.classList.remove("light", "dark");
			body?.classList.add(savedTheme);
		}
	}, []);

	return (
		<>
			<button
				className={`transition-all duration-300`}
				onClick={handleChangeColorTheme}>
				<MiniLogo />
			</button>
		</>
	);
};

export default LightMode;
