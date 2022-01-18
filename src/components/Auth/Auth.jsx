import {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import {SignUpInForm, SignUpImage} from './subcomponents';

const cookies = new Cookies();

const initalState = {
	fullName: '',
	username: '',
	phoneNumber: '',
	avatarUrl: '',
	password: '',
	confirmPassword: '',
};

const Auth = () => {
	const [form, setForm] = useState(initalState);
	const [isSignup, setIsSignup] = useState(false);

	const handleChange = e => {
		setForm({...form, [e.target.name]: e.target.value});
	};

	const switchMode = () => {
		setIsSignup(prevIsSignup => !prevIsSignup);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		const URL = `${process.env.REACT_APP_HEROKU_URL}/auth/${isSignup ? 'signup' : 'login'}`;

		const {data: {token, userId, hashedPassword, fullName}} = await axios.post(URL, {
			...form, fullName: form.fullName,
		});

		cookies.set('token', token);
		cookies.set('username', form.username);
		cookies.set('fullName', fullName);
		cookies.set('userId', userId);

		if (isSignup) {
			cookies.set('phoneNumber', form.phoneNumber);
			cookies.set('avatarUrl', form.avatarUrl);
			cookies.set('hashedPassword', hashedPassword);
		}

		window.location.reload();
	};

	return (
		<div className="auth__form-container">
			<SignUpInForm isSignup={isSignup} handleChange={handleChange} switchMode={switchMode} handleSubmit={handleSubmit} />
			<SignUpImage />
		</div>
	);
};

export default Auth;
