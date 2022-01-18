import {useState} from 'react';

import ChannelListContent from '../ChannelListContent/ChannelListContent';

const ChannelListContainer = ({isCreating, setCreateType, setIsCreating, setIsEditing}) => {
	const [toggleContainer, setToggleContainer] = useState(false);

	return (
		<>
			<div className="channel-list__container">
				<ChannelListContent isCreating={isCreating} setCreateType={setCreateType} setIsCreating={setIsCreating} setIsEditing={setIsEditing} />
			</div>
			<div className="channel-list__container-responsive" style={{left: toggleContainer ? '0%' : '-89%', background: '#005FFF'}}>
				<div className="channel-list__container-toggle" onClick={() => setToggleContainer(prev => !prev)}>
					<ChannelListContent isCreating={isCreating} setCreateType={setCreateType} setIsCreating={setIsCreating} setIsEditing={setIsEditing} setToggleContainer={setToggleContainer} />
				</div>
			</div>
		</>
	);
};

export default ChannelListContainer;
