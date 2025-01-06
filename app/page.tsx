"use client";
import ScrollToTop from "@/components/functions/ScrollToTop";
import ThemeMode from "@/components/functions/ThemeMode";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Toast from "@/components/modals/Toast";
import { CardStack } from "@/components/ui/CardStack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { cardStackItems, navItems } from "@/data";
import { heroArray } from "@/data/content";
import { setMessage, setSuccess } from "@/global/store/StoreAction";
import { StoreContext } from "@/global/store/StoreContext";
import React from "react";

export default function Home() {
	const { store, dispatch } = React.useContext(StoreContext);

	const loremMessage2 = "setMessage";
	const handleButtonSuccess = () => {
		dispatch(setSuccess(true));
		dispatch(setMessage(loremMessage2));
	};
	const handleButtonSuccessOff = () => {
		dispatch(setSuccess(false));
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
									onClick={handleButtonSuccess}>
									Add
								</button>
								<button
									className='thisButton'
									onClick={handleButtonSuccessOff}>
									Off
								</button>
							</div>
						</div>
					</div>
					<CardStack items={cardStackItems} />
				</div>
				<ThemeMode />
			</main>
			<ScrollToTop />

			{store.success && (
				<Toast
					type='xl'
					toastDuration={1000}
				/>
			)}
		</>
	);
}
