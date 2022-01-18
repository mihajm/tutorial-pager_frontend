const Submit = ({isSignup}) => (
	<div className="auth__form-container_fields-content_button">
		<button>{isSignup ? 'Sign Up' : 'Sign In'}</button>
	</div>
);

export default Submit;
