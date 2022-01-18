const Error = ({type}) => {
	if (type !== 'team') {
		return (<></>);
	}

	return (
		<div className="team-channel-list">
			<p className="team-channel-list__message">
        Connection error, please try again later.
			</p>
		</div>
	);
};

export default Error;
