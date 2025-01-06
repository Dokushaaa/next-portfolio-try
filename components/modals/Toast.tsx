"use client";
import { setSuccess } from "@/global/store/StoreAction";
import { StoreContext } from "@/global/store/StoreContext";
import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { MdOutlineQuestionMark } from "react-icons/md";
import ModalWrapper from "./ModalWrapper";

const Toast = ({
	type,
	toastDuration,
}: {
	type?: string;
	toastDuration?: number;
}) => {
	const { store, dispatch } = React.useContext(StoreContext);
	// manual closer
	const handleCloseMain = () => dispatch(setSuccess(false));
	// auto closer init
	function toastDetails({ toastDuration }: { toastDuration?: number }) {
		setTimeout(() => {
			dispatch(setSuccess(false));
			console.log("setSuccess === false");
		}, toastDuration);
	}
	// auto closer activator
	React.useEffect(() => {
		toastDetails({ toastDuration });
	}, []);
	return (
		<>
			{type === "normal" && (
				<div className='fixed top-3 left-1/2 -translate-x-1/2 p-1 px-3 bg-primary rounded-md border border-green-500'>
					<div className='flex gap-2 items-center'>
						<FaCheckCircle className='text-green-500' />

						<p className='mb-0 text-xs'>{store.message}</p>
					</div>
				</div>
			)}
			{type === "xl" && (
				<>
					<div className='parent bg-primary w-1/8'>
						<ModalWrapper
							position={"center"}
							opacity={"50"}>
							<div className='bg-primary h-auto w-[400px] p-5 rounded-xl flex flex-col gap-5'>
								<div className='flex justify-end items-center'>
									<button
										className='text-xl text-accent'
										onClick={handleCloseMain}>
										<FaTimesCircle />
									</button>
								</div>
								<div className='flex items-center justify-center text-accent text-center text-7xl'>
									<MdOutlineQuestionMark />
								</div>
								<div className='pb-2'>
									{store.message === "" ? (
										<>
											<p className='py-2 mb-0 text-center text-xl'>
												Where data?
											</p>
										</>
									) : (
										<>
											<p className='py-2 mb-0 text-center text-xl '>
												{store.message}
											</p>
										</>
									)}
								</div>
								<button
									onClick={handleCloseMain}
									className='bg-accent rounded-lg p-2 text-primary'>
									Confirm
								</button>
							</div>
						</ModalWrapper>
					</div>
				</>
			)}
		</>
	);
};

export default Toast;
