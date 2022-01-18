import React from 'react';

const SubmitButton = ({createType, handler, isCreate = true}) => (
	<div className={`${isCreate ? 'create' : 'edit'}-channel__button-wrapper`} onClick={handler}>
		{isCreate && <p>{createType === 'team' ? 'Create Channel' : 'Create Message Group'}</p>}
		{!isCreate && <p>Save Changes</p>}
	</div>
);

export default SubmitButton;
