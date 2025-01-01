import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
	return (
		<section
			id='about'
			className='py-20'>
			<BentoGrid className='px-5 md:px-0'>
				{gridItems.map(
					({
						id,
						title,
						description,
						classDescript,
						img,
						imgClassName,
						titleClassName,
						spareImg,
						imgAlt,
					}) => (
						<BentoGridItem
							id={id}
							key={id}
							// pass the values to the BentoGridItem
							title={title}
							description={description}
							img={img}
							classDescript={classDescript}
							imgClassName={imgClassName}
							titleClassName={titleClassName}
							spareImg={spareImg}
							imgAlt={imgAlt}
						/>
					)
				)}
			</BentoGrid>
		</section>
	);
};

export default Grid;
