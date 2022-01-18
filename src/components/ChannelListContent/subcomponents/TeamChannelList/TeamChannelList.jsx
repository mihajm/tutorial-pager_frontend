import {AddChannel} from '../../../../assets';

import {Loading, Error} from './subcomponents';

const TeamChannelList = ({children, error = false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer}) => {
	if (error) {
		return <Error type={type} />;
	}

	if (loading) {
		return <Loading type={type} />;
	}

	return (
		<div className="team-channel-list">
			<div className="team-channel-list__header">
				<p className="team-channel-list__header__title">
					{type === 'team' ? 'Channels' : 'Direct Messages'}
				</p>
				<AddChannel
					isCreating={isCreating}
					setIsCreating={setIsCreating}
					setCreateType={setCreateType}
					setIsEditing={setIsEditing}
					setToggleContainer={setToggleContainer}
					type={type === 'team' ? 'team' : 'messaging'}
				/>
			</div>
			{children}
		</div>
	);
};

export default TeamChannelList;
