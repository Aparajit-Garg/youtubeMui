import { Link } from "react-router-dom";
import {
	demoThumbnailUrl,
	demoVideoUrl,
	demoVideoTitle,
	demoChannelTitle,
	demoChannelUrl,
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
		<Card
			sx={{
				width: { xs: "100%", sm: "358px", md: "320px" },
				boxShadow: "none",
				borderRadius: 0,
				backgroundColor: "#000",
			}}
		>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia
					component="img"
					image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
					alt={snippet?.title}
					sx={{ width: { xs: "100%", sm: "358px" }, height: "180px" }}
				/>
			</Link>
			<CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
				<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
					<Typography variant="subtitle1" fontWeight="bold" color="#fff">
						{snippet?.title.slice(0, 30) || demoVideoTitle.slice(0, 30)}...
					</Typography>
				</Link>
				<Link
					to={
						snippet?.channelId
							? `/channel/${snippet.channelId}`
							: demoChannelUrl
					}
				>
					<Typography variant="subtitle2" fontWeight="bold" color="gray">
						{snippet?.channelTitle || demoChannelTitle}
						<CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
					</Typography>
				</Link>
			</CardContent>
		</Card>
	);
};

export default VideoCard;
