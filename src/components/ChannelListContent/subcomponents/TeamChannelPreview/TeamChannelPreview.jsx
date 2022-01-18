import {useChatContext} from 'stream-chat-react';
import {ChannelPreview, DirectPreview} from './subcomponents';

const TeamChannelPreview = ({setActiveChannel, channel, type, setToggleContainer, setIsCreating, setIsEditing}) => {
	const {channel: activeChannel, client} = useChatContext();

	return (
		<div
			className={`channel-preview__wrapper${channel?.id === activeChannel?.id && Boolean(channel?.id) ? '__selected' : ''}`}
			onClick={() => {
				setIsCreating(false);
				setIsEditing(false);
				setActiveChannel(channel);
				if (setToggleContainer) {
					setToggleContainer(prev => !prev);
				}
			}}
		>
			{type === 'team' ? <ChannelPreview data={channel?.data} /> : <DirectPreview channelMembers={channel?.state?.members} clientId={client?.userID} />}
		</div>
	);
};

export default TeamChannelPreview;
