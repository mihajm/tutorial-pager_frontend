import {useChatContext} from 'stream-chat-react';
import {ChannelPreview, DirectPreview} from './subcomponents';

const TeamChannelPreview = ({channel, type}) => {
	const {channel: activeChannel, client} = useChatContext();

	return (
		<div
			className={`channel-preview__wrapper${channel?.id === activeChannel?.id && Boolean(channel?.id) ? '__selected' : ''}`}
			onClick={() => console.log(channel)}
		>
			{type === 'team' ? <ChannelPreview data={channel?.data} /> : <DirectPreview channelMembers={channel?.state?.members} clientId={client?.userID} />}
		</div>
	);
};

export default TeamChannelPreview;
