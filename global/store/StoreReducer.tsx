"use client";
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

type Action = {
	type: string;
	payload: any;
};

export const StoreReducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "ERROR":
			return {
				...state,
				error: action.payload,
			};
		case "INFO":
			return {
				...state,
				info: action.payload,
			};
		case "MESSAGE":
			return {
				...state,
				message: action.payload,
			};
		case "SUCCESS":
			return {
				...state,
				success: action.payload,
			};
		case "SAVE":
			return {
				...state,
				isSave: action.payload,
			};
		case "SHOW":
			return {
				...state,
				isShow: action.payload,
			};
		case "ARCHIVE":
			return {
				...state,
				isArchive: action.payload,
			};
		case "RESTORE":
			return {
				...state,
				isRestore: action.payload,
			};
		case "DELETE":
			return {
				...state,
				isDelete: action.payload,
			};
		case "IS_ADD":
			return {
				...state,
				isAdd: action.payload,
			};
		case "IS_EDIT":
			return {
				...state,
				isEdit: action.payload,
			};
		case "IS_SEARCH":
			return {
				...state,
				isSearch: action.payload,
			};
		case "IS_ACTIVE":
			return {
				...state,
				isActive: action.payload,
			};
		case "IS_LOADING":
			return {
				...state,
				isLoading: action.payload,
			};
		case "IS_FETCHING":
			return {
				...state,
				isFetching: action.payload,
			};
		case "IS_LOGIN":
			return {
				...state,
				isLogin: action.payload,
			};
		case "CREDENTIALS":
			return {
				...state,
				credentials: action.payload,
			};
		default:
			return state;
	}
};
