import {useState} from 'react';
import {useChatContext} from 'stream-chat-react';

import {UserList, ChannelNameInput, Header, SubmitButton} from './subcomponents';

const CreateChannel = ({createType, setIsCreating}) => {
	const {client, setActiveChannel} = useChatContext();

	const [channelName, setChannelName] = useState('');
	const [selectedUsers, setSelectedUsers] = useState([client?.userID || '']);

	const createChannel = async e => {
		e.preventDefault();

		try {
			const newChannel = await client.channel(createType, channelName, {
				name: channelName, members: selectedUsers,
			});
			await newChannel.watch();

			setChannelName('');
			setIsCreating(false);
			setSelectedUsers([client?.userID]);
			setActiveChannel(newChannel);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="create-channel__container">
			<Header createType={createType} setter={setIsCreating} />
			{createType === 'team' && <ChannelNameInput channelName={channelName} setChannelName={setChannelName} />}
			<UserList setSelectedUsers={setSelectedUsers} />
			<SubmitButton handler={createChannel} createType={createType} />
		</div>
	);
};

export default CreateChannel;
