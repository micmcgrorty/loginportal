import React from "react";
import LoginForm from "./LoginForm";
import Home from "./Home";

class App extends React.Component {
	state = { loggedIn: false, error: null };

	onFormSubmit = async (user, pass) => {
		// If I had more time this would actually make a request to an outside API to validate the user
		if (user === "michael" && pass === "1234") {
			this.setState({ loggedIn: true });
		} else {
			this.setState({ error: "Your username/password is incorrect" });
		}
	};

	render() {
		return this.state.loggedIn ? (
			<div className="container">
				<Home />
			</div>
		) : (
			<div className="container">
				<LoginForm error={this.state.error} onFormSubmit={this.onFormSubmit} />
			</div>
		);
	}
}

export default App;
