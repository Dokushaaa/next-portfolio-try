"use client";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { heroArray } from "@/data/content";
// redux
import { RootState } from "@/global/Store";
import { useDispatch, useSelector } from "react-redux";
import {
	increment,
	decrement,
	incrementByAmount,
} from "@/global/features/counter/CounterSlice";
export default function Home() {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
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
						<button
							className='thisButton'
							onClick={() => dispatch(increment())}>
							Add
						</button>
						<button
							className='thisButton'
							onClick={() => dispatch(decrement())}>
							Decrease
						</button>
						<button
							className='thisButton'
							onClick={() => dispatch(incrementByAmount(2))}>
							Add by 2
						</button>
						<p>{count}</p>
						{count === 10 ? (
							<>
								<p>Count is equal to 10</p>
							</>
						) : (
							<>
								<p>count is not equal to 10</p>
							</>
						)}
					</div>
				</div>
			</main>
		</>
	);
}
