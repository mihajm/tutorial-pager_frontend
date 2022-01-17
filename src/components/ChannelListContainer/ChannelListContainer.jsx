import {ChannelList} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {SideBar, CompanyHeader, ChannelSearch, TeamChannelList, TeamChannelPreview} from './subcomponents';

const ChannelListContainer = () => (
	<>
		<SideBar />
		<div className="channel-list__list__wrapper">
			<CompanyHeader />
			<ChannelSearch />
			<ChannelList
				filters={{}}
				channelRenderFilterFn={() => {}}
				List={listProps => <TeamChannelList {...listProps} type="team" />}
				Preview={previewProps => <TeamChannelPreview {...previewProps} type="team" />}
			/>
			<ChannelList
				filters={{}}
				channelRenderFilterFn={() => {}}
				List={listProps => <TeamChannelList {...listProps} type="messaging" />}
				Preview={previewProps => <TeamChannelPreview {...previewProps} type="messaging" />}
			/>
		</div>
	</>
);

export default ChannelListContainer;
