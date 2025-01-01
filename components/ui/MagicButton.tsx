import React from "react";

const MagicButton = ({
	buttonText,
	modClass,
	btnType,
	icon,
	position,
	handleClick,
}: {
	modClass?: string;
	buttonText: string;
	btnType?: string;
	icon?: React.ReactNode;
	position?: string;
	handleClick?: () => void;
}) => {
	// console.log(modClass);
	return (
		// Button code
		<>
			{btnType === "shimmer" && (
				<>
					<button
						className={`${modClass} inline-flex h-12 animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors  focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}>
						{position === "left" && icon}
						{buttonText}
						{position === "right" && icon}
					</button>
				</>
			)}
			{/* for later usages */}
			{btnType === "notShimmer" && (
				<>
					<h1>not shimmer btn</h1>
				</>
			)}
		</>
	);
};

export default MagicButton;
