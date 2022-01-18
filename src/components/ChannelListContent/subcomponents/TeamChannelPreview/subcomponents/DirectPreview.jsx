import {Avatar} from 'stream-chat-react';

const DirectPreview = ({channelMembers, clientId}) => {
	if (!channelMembers || !clientId) {
		return (<></>);
	}

	const members = Object.values(channelMembers).filter(({user}) => user.id !== clientId);

	return (
		<div className="channel-preview__item single">
			<Avatar
				image={members[0]?.user?.image}
				name={members[0]?.user?.fullName || members[0]?.user?.name || members[0]?.user?.id}
				size={24}
			/>
			<p>{members[0]?.user?.fullName || members[0]?.user?.name || members[0]?.user?.id}</p>
		</div>
	);
};

export default DirectPreview;
