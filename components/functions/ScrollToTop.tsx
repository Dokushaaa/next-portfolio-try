import React, { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
	useEffect(() => {
		const calcScrollValue = () => {
			const scrollProgress = document.getElementById("progressTop");
			const progressValue = document.getElementById("progressTop-value");

			if (!scrollProgress || !progressValue) return;

			const pos = document.documentElement.scrollTop;
			const calcHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;

			const scrollValue = Math.round((pos * 100) / calcHeight);

			if (pos > 100) {
				scrollProgress.style.opacity = "1";
			} else {
				scrollProgress.style.opacity = "0";
			}

			scrollProgress.style.background = `conic-gradient(#663399 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
		};

		window.addEventListener("scroll", calcScrollValue);
		window.addEventListener("load", calcScrollValue);

		return () => {
			window.removeEventListener("scroll", calcScrollValue);
			window.removeEventListener("load", calcScrollValue);
		};
	}, []);

	const handleClick = () => {
		document.documentElement.scrollTop = 0;
	};

	return (
		<div
			id='progressTop'
			onClick={handleClick}>
			<span id='progressTop-value'>
				<FaArrowUp className='text-[15px] md:text-[25px] text-content' />
			</span>
		</div>
	);
};

export default ScrollToTop;
