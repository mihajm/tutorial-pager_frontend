import {CloseCreateChannel} from '../../../../../assets';

const Header = ({createType, setter, isCreate = true}) => (
	<div className={`${isCreate ? 'create' : 'edit'}-channel__header`}>
		{isCreate && <p>{createType === 'team' ? 'Create a New Channel' : 'Send a Direct Message'}</p>}
		{!isCreate && <p>Edit Channel</p>}
		<CloseCreateChannel setIsCreating={setter} />
	</div>

);

export default Header;
