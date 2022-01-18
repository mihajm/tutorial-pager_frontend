import {useEffect, useState} from 'react';
import {useChatContext} from 'stream-chat-react';

import {ListContainer, UserItem, Error} from './subcomponents';

const UserList = ({setSelectedUsers}) => {
	const {client, channel} = useChatContext();
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [listEmpty, setListEmpty] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getUsers = async () => {
			if (loading) {
				return;
			}

			setLoading(true);

			try {
				if (error) {
					setError(false);
				}

				const res = await client.queryUsers({id: {$ne: client.userID}}, {id: 1}, {limit: 8});

				if (res?.users?.length) {
					if (listEmpty) {
						setListEmpty(false);
					}

					setUsers(res.users);
				} else {
					setListEmpty(true);
				}
			} catch (err) {
				console.log(err);
				setError(true);
			}

			setLoading(false);
		};

		if (client) {
			getUsers();
		}
	}, []);

	if (error) {
		return <Error message={'Error loading, please refresh and try again'} />;
	}

	if (listEmpty) {
		return <Error message={'Loading users...'} />;
	}

	return (
		<ListContainer>
			{loading ? <div className="user-list__message">Loading users...</div> : (
				users?.map((user, i) => <UserItem setSelectedUsers={setSelectedUsers} key={user.id} index={i} user={user} />)
			)}
		</ListContainer>

	);
};

export default UserList;
