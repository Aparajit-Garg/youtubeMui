import { Box, Stack } from "@mui/material";
import { memo } from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import Loader from "./Loader";

const Videos = ({ videos, direction }) => {
	console.log(videos);
	if (!videos && !videos?.length) return <Loader />;
    return (
		<Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
			{videos?.map((item, idx: number) => { 
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
