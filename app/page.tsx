"use client";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { heroArray } from "@/data/content";

export default function Home() {
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
						{/* <button onClick={handleClickThis}>Click me Now</button> */}
					</div>
				</div>
			</main>
		</>
	);
}
