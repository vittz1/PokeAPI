import React from "react";
import errorPage from "../../images/erro-404-2.png";
import "./errorStyle.css";

const ErrorPage = () => {
	return (
		<div className="error-container">
			<img src={errorPage} alt="error404" />
		</div>
	);
};

export default ErrorPage;
