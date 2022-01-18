const ChannelPreview = ({data}) => (
	<p className="channel-preview__item">
        # {data?.name || data?.id}
	</p>
);

export default ChannelPreview;
