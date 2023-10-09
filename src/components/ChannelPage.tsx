import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import { fetchAPI } from "../utils/fetchFromApi";

const ChannelPage = () => {
	const { id } = useParams();
	const [channelDetail, setChannelDetail] = useState();
	const [videoData, setVideoData] = useState();

	useEffect(() => {
		fetchAPI(`channels?part=snippet&id=${id}`).then((data) =>
			setChannelDetail(data?.items[0])
		);
		fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
			setVideoData(data?.items)
		);
	}, [id]);
	return (
		<Box minHeight="95vh" sx={{ background: '#000' }}>
			<Box>
				<div
					style={{
						background:
							"linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
						zIndex: 10,
						height: "300px"
					}}
				/>
                <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
			</Box>
            <Box display="flex" p={2}>
            <Box sx={{ mr: {sm: '100px'} }} />
                <Videos videos={videoData} direction='row' />
            </Box>
		</Box>
	);
};

export default ChannelPage;
