import Image from "next/image";
import { metadata } from "./layout";

export default function Home() {
	return (
		<>
			<main className='h-screen w-full overflow-hidden bg-primary'>
				<section
					id='heroHome'
					className='flex items-center gap-5 justify-center py-10'>
					<div className='light:bg-blue-400'>
						<h1 className='font-fira text-2xl'>{metadata?.information}</h1>
						<h1 className='font-fira text-2xl'>{metadata?.description}</h1>
					</div>
				</section>
			</main>
		</>
	);
}
