import {useState, useEffect} from 'react';
import {useChatContext} from 'stream-chat-react';

import {UserList, ChannelNameInput, Header, SubmitButton} from './CreateChannel/subcomponents';

const EditChannel = ({setIsEditing}) => {
	const {channel} = useChatContext();
	const [channelName, setChannelName] = useState(channel?.data?.name);
	const [selectedUsers, setSelectedUsers] = useState([]);

	const updateChannel = async e => {
		e?.preventDefault();

		if (!channel) {
			return;
		}

		const nameChanged = Boolean(channelName) && Boolean(channelName?.length) && channelName !== (channel.data?.name || channel.data?.id);

		if (nameChanged) {
			await channel.update({name: channelName}, {text: `Channel name changed to ${channelName}`});
		}

		if (selectedUsers.length) {
			await channel.addMembers(selectedUsers);
		}

		setChannelName('');
		setIsEditing(false);
		setSelectedUsers([]);
	};

	return (
		<div className="edit-channel__container">
			<Header setter={setIsEditing} isCreate={false} />
			<ChannelNameInput channelName={channelName} setChannelName={setChannelName} />
			<UserList setSelectedUsers={setSelectedUsers} />
			<SubmitButton handler={updateChannel} isCreate={false} />
		</div>
	);
};

export default EditChannel;
