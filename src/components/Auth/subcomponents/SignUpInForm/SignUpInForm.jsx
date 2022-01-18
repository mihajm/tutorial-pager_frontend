import {Field, SignUpInToggle, Submit} from './subcomponents';

const SignUpInForm = ({isSignup, handleChange, switchMode, handleSubmit}) => (
	<div className="auth__form-container_fields">

		<div className="auth__form-container_fields-content">
			<p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
			<form onSubmit={handleSubmit}>
				{isSignup && <Field title="Full Name" name="fullName" handleChange={handleChange}/>}
				<Field title="Username" name="username" handleChange={handleChange}/>
				{isSignup && <Field title="Phone Number" name="phoneNumber" handleChange={handleChange}/>}
				{isSignup && <Field title="Avatar URL" name="avatarUrl" handleChange={handleChange}/>}
				<Field title="Password" name="password" handleChange={handleChange} type="password"/>
				{isSignup && <Field title="Confirm Password" name="confirmPassword" handleChange={handleChange} type="password"/>}
				<Submit isSignup={isSignup} />
			</form>
			<SignUpInToggle isSignup={isSignup} switchMode={switchMode} />
		</div>
	</div>

);

export default SignUpInForm;
