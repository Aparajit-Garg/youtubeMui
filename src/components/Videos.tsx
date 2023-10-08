import { Box, Stack } from "@mui/material";
import { memo } from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
	console.log(videos);
	return (
		<Stack direction="row" flexWrap="wrap" justifyContent="start" sx={{ display: 'flex' }}>
			{videos.map((item, idx: number) => { 
                return (
                    <Box key={idx}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                    </Box>
                )}
                )
			}
		</Stack>
	);
};

export default memo(Videos);
