import {useState} from 'react';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {ChannelContainer, ChannelListContainer, Auth} from './components';

import 'stream-chat-react/dist/css/index.css';
import './App.css';

const cookies = new Cookies();

const client = StreamChat.getInstance(process.env.REACT_APP_STREAM_API_KEY);

const authToken = cookies.get('token');

if (authToken) {
	client.connectUser({
		id: cookies.get('userId'),
		name: cookies.get('username'),
		fullName: cookies.get('fullName'),
		image: cookies.get('avatarUrl'),
		hashedPassword: cookies.get('hashedPassword'),
		phoneNumber: cookies.get('phoneNumber'),
	}, authToken);
}

const App = () => {
	const [createType, setCreateType] = useState('');
	const [isCreating, setIsCreating] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	return (
		<>
			{authToken ? <div className="app__wrapper">
				<Chat client={client} theme="team light">
					<ChannelListContainer
						isCreating={isCreating}
						setCreateType={setCreateType}
						setIsEditing={setIsEditing}
						setIsCreating={setIsCreating}
					/>
					<ChannelContainer
						isEditing={isEditing}
						setIsEditing={setIsEditing}
						isCreating={isCreating}
						setIsCreating={setIsCreating}
						createType={createType}
					/>
				</Chat>
			</div> : <Auth />}
		</>
	);
};

export default App;
