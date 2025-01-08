import React from "react";
import Cookies from "react-cookies";

const CookieExample = () => {
	const [cookieValue, setCookieValue] = React.useState("");

	// Read cookie on mount
	React.useEffect(() => {
		const cookie = Cookies.load("user_cookie");
		if (cookie) {
			setCookieValue(cookie);
		}
	}, []);

	// Set a cookie
	const setCookie = () => {
		Cookies.save("user_cookie", "my_cookie_value", { path: "/" });
		setCookieValue("my_cookie_value");
	};

	// Delete the cookie
	const deleteCookie = () => {
		Cookies.remove("user_cookie", { path: "/" });
		setCookieValue("");
	};

	return (
		<div>
			<h1>React Cookies Example</h1>
			<div>
				<p>Cookie Value: {cookieValue || "No cookie set"}</p>
				<button onClick={setCookie}>Set Cookie</button>
				<button onClick={deleteCookie}>Delete Cookie</button>
			</div>
		</div>
	);
};

export default CookieExample;
