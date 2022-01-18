import {ListContainer} from '.';

const Error = ({message}) => (
	<ListContainer>
		<div className="user-list__message">
			{message}
		</div>
	</ListContainer>
);

export default Error;
