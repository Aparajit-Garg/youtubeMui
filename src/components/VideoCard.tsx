import { Link } from "react-router-dom";
import {
	demoThumbnailUrl,
	demoVideoUrl,
	demoVideoTitle,
	demoChannelTitle,
	demoChannelUrl
} from "../utils/constants";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	return (
		<Card sx={{ margin: '7px', width: { md: '300px', sm: '240px', xs: '100%' }, boxShadow: 'none', borderRadius: 0, backgroundColor: { md: '#000', xs: '#fff'}}}>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia
                    component='img'
					image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
					alt={snippet?.title}
                    sx={{ width: '100%', height: '180px', objectFit: 'cover' }}
				/>
                <CardContent sx={{ backgroundColor: '#1e1e1e' }}>
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography variant='subtitle1' fontWeight="bold" color='#fff'>
                            {snippet?.title.slice(0, 30) || demoVideoTitle.slice(0, 30)}...
                        </Typography>
                    </Link>
                    <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                        <Typography variant='subtitle2' fontWeight="bold" color='gray'>
                            {snippet?.channelTitle || demoChannelTitle}
                            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                        </Typography>
                    </Link>
                </CardContent>
			</Link>
		</Card>
	);
};

export default VideoCard;
