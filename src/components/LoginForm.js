import React from "react";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: "",
			pass: ""
		};
	}

	validateForm() {
		return this.state.user.length > 0 && this.state.pass.length > 0;
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.user, this.state.pass);
	};

	render() {
		return (
			<div className="login">
				<span className="error">{this.props.error}</span>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="pass">Username</label>
					<input
						type="text"
						value={this.state.email}
						onChange={this.handleChange}
						id="user"
					/>
					<label htmlFor="pass">Password</label>
					<input
						value={this.state.password}
						onChange={this.handleChange}
						type="password"
						id="pass"
					/>
					<button disabled={!this.validateForm()} type="submit">
						Login
					</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;
