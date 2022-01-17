import React from 'react';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {ChannelContainer, ChannelListContainer, ChannelSearch} from './components';

import './App.css';

const client = StreamChat.getInstance(process.env.REACT_APP_STREAM_API_KEY);

const App = () => (
	<React.StrictMode>
		<div className="app__wrapper">
			<Chat client={client} theme="team light">
				<ChannelListContainer />
				<ChannelContainer />
			</Chat>
		</div>
	</React.StrictMode>
);

export default App;
