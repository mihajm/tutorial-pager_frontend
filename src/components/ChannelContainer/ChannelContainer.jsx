import {Channel, useChatContext, MessageSimple} from 'stream-chat-react';

import {ChannelInner, CreateChannel, EditChannel, EmptyState} from './subcomponents';

const ChannelContainer = ({isCreating, setIsCreating, isEditing, setIsEditing, createType}) => {
	const {channel} = useChatContext();

	if (isCreating) {
		return (
			<div className="channel__container">
				<CreateChannel createType={createType} setIsCreating={setIsCreating} />
			</div>
		);
	}

	if (isEditing) {
		return (
			<div className="channel__container">
				<EditChannel setIsEditing={setIsEditing} />
			</div>
		);
	}

	return (
		<div className="channel__container">
			<Channel
				EmptyStateIndicator={EmptyState}
				Message={(messageProps, i) => <MessageSimple key={i} {...messageProps} />}
			>
				<ChannelInner setIsEditing={setIsEditing} />
			</Channel>
		</div>
	);
};

export default ChannelContainer;
