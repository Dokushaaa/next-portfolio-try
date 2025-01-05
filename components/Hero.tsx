import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = ({
	titleWords,
	subTitleWords,
	spanWords,
	counter,
}: {
	titleWords?: string;
	subTitleWords?: string;
	spanWords?: string;
	counter?: number[];
}) => {
	return (
		<>
			{/* defines spotlights */}

			<div className='py-24'>
				<div className='spotlights-container'>
					<Spotlight
						className={`-top-40 -left-14 md:-left-10 md:-left-32 md:-top-20 h-screen
					`}
						fill='white'
					/>
					<Spotlight
						className={`top-10 left-28 md:left-52 h-[80vh] w-[50vw]
					`}
						fill='purple'
					/>
					<Spotlight
						className={`top-28 left-36 md:left-64 h-[80vh] w-[50vw]
					`}
						fill='blue'
					/>
					<Spotlight
						className={`top-64 -right-10 md:-right-36 h-[80vh] rotate-360 w-[50vw]
					`}
						fill='red'
					/>
				</div>
				{/* defines  bg */}
				<div className='h-[85vh] md:h-[65vh]  w-full bg-primary  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center'>
					{/* Radial gradient for the container to give a faded look */}
					<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] ' />
				</div>
				{/* defines text in div */}
				<div className='flex justify-center relative z-10 my-20'>
					<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
						<h2
							className={`dynamic uppercase tracking-widest font-Heading text-xs text-center text-blue-100 max-w-80`}>
							{subTitleWords}
						</h2>

						<TextGenerateEffect
							className='text-center text-[40px] md:text-5xl lg:text-6xl'
							words={`${titleWords}`}
						/>
						<p className='text-cetnter md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
							{spanWords}
						</p>

						<Link href='#about'>
							<MagicButton
								buttonText={"About Me"}
								btnType='shimmer'
								modClass='w-full rounded-lg focus:outline-none md:w-60 md:mt-10 px-7 gap-5'
								icon={<FaLocationArrow />}
								position='right'
							/>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
