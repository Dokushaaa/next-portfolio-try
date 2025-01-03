"use client";

import React, { createContext, useReducer, ReactNode } from "react";
import { StoreReducer } from "./StoreReducer";

type State = {
	error: boolean;
	info: boolean;
	success: boolean;
	message: string;
	isSave: boolean;
	isShow: boolean;
	isArchive: boolean;
	isRestore: boolean;
	isDelete: boolean;
	isAdd: boolean;
	isActive: boolean;
	isEdit: boolean;
	isLoading: boolean;
	isFetching: boolean;
	isLogin: boolean;
	isSearch: Record<string, any>;
	credentials: Record<string, any>;
};

interface StoreContextProps {
	store: any; // Define the correct type for store
	dispatch: React.Dispatch<any>;
}

const initVal: State = {
	error: false,
	info: false,
	success: false,
	message: "",
	isSave: false,
	isShow: false,
	isArchive: false,
	isRestore: false,
	isDelete: false,
	isAdd: false,
	isActive: false,
	isEdit: false,
	isLoading: false,
	isFetching: false,
	isLogin: false,
	isSearch: {},
	credentials: {},
};

const StoreContext = React.createContext({} as StoreContextProps);

const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [store, dispatch] = useReducer(StoreReducer, initVal);

	return (
		<StoreContext.Provider value={{ store, dispatch }}>
			{children}
		</StoreContext.Provider>
	);
};

export { StoreContext, StoreProvider };
