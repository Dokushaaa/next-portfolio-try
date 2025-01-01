"use client";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
	// const { store, dispatch } = React.useContext(StoreContext);
	// console.log(store.message)S;
	// const handleClickThis = () => {
	// 	dispatch(setMessage("ingram"));
	// 	console.log(store.message);
	// };

	return (
		<>
			<main className='relative bg-primary flex justify-center items-center flex-col text-center'>
				<div className='max-w-7xl w-full'>
					<Hero />

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
