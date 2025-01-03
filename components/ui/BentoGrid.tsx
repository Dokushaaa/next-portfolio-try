import { cn } from "@/lib/utils";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
				className
			)}>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	classDescript,
	title,
	description,
	id,
	img,
	imgClassName,
	titleClassName,
	spareImg,
	imgAlt,
}: {
	classDescript?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	// used to be JSX.Element
	id: number;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
	imgAlt?: string;
}) => {
	// console.log(`${`Bento-${id}`}`);
	return (
		<div
			className={cn(
				classDescript,
				"rounded-3xl relative hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4  bg-gradient-to-r from-secondary  to-primary"
			)}
			// css stylings for non tailwindcss
			// style={{ background: "rgb(4,7,29)", backgroundColor: "gradient" }}
			//
		>
			<div
				className={`${id === 6} && "flex itmes-center justify-center h-full" `}>
				<div className='w-full h-full absolute'>
					{img && (
						<>
							<img
								className={cn(imgClassName, "object-cover, object-center")}
								src={img}
								alt={img}
							/>
						</>
					)}
				</div>
				<div
					className={`absolute right-0 -bottom-5 ${
						id === 5 && "w-full opacity-80"
					} `}>
					{spareImg && (
						<>
							<img
								className={`object-cover, object-center`}
								src={spareImg}
								alt={spareImg}
							/>
						</>
					)}
				</div>
			</div>

			<div
				id={`bento-${id}`}
				className='group-hover/bento:translate-x-2 transition duration-200'>
				{/* TODO: PHOTO */}

				<div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>
					{title}
				</div>
				<div className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'>
					{description}
				</div>
			</div>
		</div>
	);
};
