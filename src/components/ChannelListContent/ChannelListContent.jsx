import {ChannelList, useChatContext} from 'stream-chat-react';

import {SideBar, CompanyHeader, ChannelSearch, TeamChannelList, TeamChannelPreview} from './subcomponents';

const ChannelListContent = ({isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer}) => {
	const {client} = useChatContext();

	const filters = {members: {$in: [client?.userID]}};

	return (
		<>
			<SideBar />
			<div className="channel-list__list__wrapper">
				<CompanyHeader />
				<ChannelSearch setToggleContainer={setToggleContainer} />
				<ChannelList
					filters={filters}
					channelRenderFilterFn={channels => channels.filter(channel => channel.type === 'team')}
					List={listProps => <TeamChannelList
						{...listProps}
						type="team"
						setToggleContainer={setToggleContainer}
						isCreating={isCreating}
						setIsCreating={setIsCreating}
						setCreateType={setCreateType}
						setIsEditing={setIsEditing}
					/>}
					Preview={previewProps => <TeamChannelPreview {...previewProps} type="team" setIsCreating={setIsCreating} setIsEditing={setIsEditing} setToggleContainer={setToggleContainer} />}
				/>
				<ChannelList
					filters={filters}
					channelRenderFilterFn={channels => channels.filter(channel => channel.type === 'messaging')}
					List={listProps => <TeamChannelList
						{...listProps}
						type="messaging"
						setToggleContainer={setToggleContainer}
						isCreating={isCreating}
						setIsCreating={setIsCreating}
						setCreateType={setCreateType}
						setIsEditing={setIsEditing}
					/>}
					Preview={previewProps => <TeamChannelPreview {...previewProps} type="messaging" setIsCreating={setIsCreating} setIsEditing={setIsEditing} setToggleContainer={setToggleContainer} />}
				/>
			</div>
		</>
	);
};

export default ChannelListContent;
