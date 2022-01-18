const Field = ({handleChange, title, name, type = 'text'}) => (
	<div className="auth__form-container_fields-content_input">
		<label htmlFor={name}>{title}</label>
		<input name={name} type={type} placeholder={title} onChange={handleChange} required />
	</div>
);

export default Field;
