const SignUpInToggle = ({isSignup, switchMode}) => (
	<div className="auth__form-container_fields-account">
		<p>
			{isSignup ? 'Already have an account?' : 'Don\'t have an account?'}
			<span onClick={switchMode}>{isSignup ? 'Sign In' : 'Sign Up'}</span>
		</p>
	</div>
);

export default SignUpInToggle;
