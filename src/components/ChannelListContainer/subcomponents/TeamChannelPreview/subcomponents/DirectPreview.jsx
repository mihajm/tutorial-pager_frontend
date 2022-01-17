import {Avatar} from 'stream-chat-react';

const DirectPreview = ({channelMembers, clientId}) => {
	if (!channelMembers || !clientId) {
		return (<></>);
	}

	const members = Object.values(channelMembers?.state?.members).filter(({user}) => user.id !== clientId);

	return (
		<div className="channel-preview__item single">
			<Avatar
				image={members[0]?.user?.image}
				name={members[0]?.user?.fullName}
				size={24}
			/>
			<p>{members[0]?.user?.fullName}</p>
		</div>
	);
};

export default DirectPreview;
