"use client";
import Hero from "@/components/Hero";
import MiniDescription from "@/components/MiniDescription";
import Others from "@/components/Others";
import ScrollToTop from "@/components/functions/ScrollToTop";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { heroArray, profileDescription } from "@/data/content";

export default function Home() {
	return (
		<>
			<main className='relative bg-primary flex justify-center items-center flex-col text-center'>
				<section className='Hero max-w-7xl w-full'>
					<FloatingNav navItems={navItems} />
					{/* hero Section */}
					<Hero
						titleWords={heroArray[0].titleWords}
						subTitleWords={heroArray[0].subtitleWords}
						spanWords={heroArray[0].spanWords}
						counter={heroArray[0].counter}
					/>
				</section>
				{/* minimal description */}
				<section className='About'>
					<MiniDescription
						headingText={profileDescription[0].headingText}
						subText={profileDescription[0].subText}
						imgData={profileDescription[0].imgData}
						paraText={profileDescription[0].paraText}
					/>
				</section>
				<Others />
			</main>
			<ScrollToTop />
		</>
	);
}
