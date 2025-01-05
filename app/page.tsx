"use client";
import LightMode from "@/components/functions/LightMode";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Cover } from "@/components/ui/TextCover";
import { navItems } from "@/data";
import { heroArray } from "@/data/content";
import { setMessage } from "@/global/redux/actions/ReduxActions";
import { RootState } from "@/global/redux/ReduxStore";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
	const count = useSelector((state: RootState) => state.mainRedux.message);
	const dispatch = useDispatch();
	console.log("count bool:", count);
	const handleAddMessage = () => {
		dispatch(setMessage("hi there"));
	};
	const handleDelMessage = () => {
		dispatch(setMessage(""));
	};

	return (
		<>
			<main className='relative bg-primary flex justify-center items-center flex-col text-center'>
				<div className='max-w-7xl w-full'>
					<Hero
						titleWords={heroArray[0].titleWords}
						subTitleWords={heroArray[0].subtitleWords}
						spanWords={heroArray[0].spanWords}
						counter={heroArray[0].counter}
					/>

					<FloatingNav navItems={navItems} />
					<div className='h-screen'>
						<Grid />
						<div className='flex items-center gap-5 flex-col'>
							<div className='flex items-center'>
								<button
									className='thisButton'
									onClick={handleAddMessage}>
									Add
								</button>
								<button
									className='thisButton'
									onClick={handleDelMessage}>
									Close
								</button>
							</div>

							{count ? <>has message</> : <>has no msg</>}
						</div>
					</div>
				</div>
				<LightMode />
			</main>
		</>
	);
}
