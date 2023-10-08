import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import Videos from "./Videos";
import { fetchAPI } from "../utils/fetchFromApi";
import { CheckCircle } from "@mui/icons-material";

const VideoPage = () => {
	const { id } = useParams();
	const [videoDetail, setVideoDetail] = useState(null);
	const [videos, setVideos] = useState(null);
	console.log("id: ", id);
	useEffect(() => {
		fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
			setVideoDetail(data.items[0]);
			console.log("first item: ", data.items[0]);
		});

		fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
			(data) => setVideos(data.items)
		);
	}, [id]);

	if (!videoDetail?.snippet) return "Loading...";

	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount },
	} = videoDetail;

	return (
		<Box sx={{ minHeight: "95vh", background: "#000" }} >
			<Stack direction={{ xs: "column", md: "row" }}>
				<Box flex={1}>
					<Box ml={1} mr={1} sx={{ width: "98%", height: {xs:'auto' ,sm:'75vh'}, position: "sticky", top: "86px" }} pb={2}>
						<iframe
                            height='90%'
							width='98%'
							src={`https://www.youtube.com/embed/${id}?si=ffgsPNaDKFPafZAE`}
							title="YouTube video player"
                            allowFullScreen
						></iframe>

						{/* <ReactPlayer
							url={`https://www.youtube.com/watch?v=${id}`}
							className="react-player"
							controls
						/> */}
						<Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
							{title}
						</Typography>
						<Stack
							direction="row"
							justifyContent="space-between"
							sx={{ color: "#fff" }}
							px={2}
							py={1}
						>
							<Link to={`/channel/${channelId}`}>
								<Typography
									variant={{ sm: "subtitle1", md: "h6" }}
									color="#fff"
								>
									{channelTitle}
									<CheckCircle
										sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
									/>
								</Typography>
							</Link>
							<Stack direction="row" gap="20px" alignItems="center">
								<Typography variant="body1" sx={{ opacity: "0.7" }}>
									{parseInt(viewCount).toLocaleString()} views
								</Typography>
								<Typography variant="body1" sx={{ opacity: "0.7" }}>
									{parseInt(likeCount).toLocaleString()} likes
								</Typography>
							</Stack>
						</Stack>
					</Box>
				</Box>
				<Box
                    px={0}
					mr={1}
					py={{ md: 1, xs: 5 }}
					justifyContent="center"
					alignItems="center"
				>
					<Videos videos={videos} direction="column" />
				</Box>
			</Stack>
		</Box>
	);
};

export default VideoPage;
