const Loading = ({type}) => (
	<div className="team-channel-list">
		<p className="team-channel-list__message loading">
			{type === 'team' ? 'Channels' : 'Messages'} loading...
		</p>
	</div>
);

export default Loading;
