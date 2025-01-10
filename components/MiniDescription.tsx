import Image from "next/image";
import { ImgUrl } from "./functions/functions-general";

const MiniDescription = ({
	inlinetext,
	headingText,
	subText,
	imgData,
	paraText,
}: {
	inlinetext?: string;
	headingText: string;
	subText: string;
	imgData: string;
	paraText: string;
}) => {
	const fetchIsError = console.log("404 is not here");
	return (
		<div className='h-screen pt-20 w-full'>
			<div className='container'>
				<h1 className='text-content text-lg md:text-2xl lg:text-4xl mb-0 py-2'>
					{/* must have give output on false value */}
					{headingText ?? fetchIsError}
				</h1>
				{/* <img
					src='react.svg'
					alt='confetti'
				/> */}
				<Image
					src='/vision.png'
					alt='alt'
					className='bg-red-400 object-cover'
					width={100}
					height={100}
				/>
			</div>
		</div>
	);
};

export default MiniDescription;
