import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { FC, useCallback, useEffect, useState } from "react";
import { fetchAPI } from "../utils/fetchFromApi";


const Feed: FC = () => {

    const [selectedCategory, setSelectedCategory] = useState<string>('New')
    const [videos, setVideos] = useState(null)


    const getData = useCallback(async () => {
        console.log(selectedCategory)
        setVideos(null)
        const data = await fetchAPI(`search?part=snippet&q=${selectedCategory}`)
        setVideos(data.items)
    }, [selectedCategory])

    useEffect(() => {
        console.log(selectedCategory)
        getData();
    }, [selectedCategory])

    return (
		<Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "#000" }}>
			<Box
				sx={{
					height: { sx: "auto", md: "92vh" },
					borderRight: "1px solid #3d3d3d",
					px: { sx: 0, md: 2 },
				}}
			>
				<SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
				<Typography
					className="copyright"
					variant="body2"
					sx={{ mt: 1.5, color: "#fff" }}
				>
					Copyright © 2023 Aparajit Garg
				</Typography>
			</Box>
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
                <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: '#fff' }}>
                    {selectedCategory}
                    <span style={{ color: '#FC1503' }}> Videos </span>
                </Typography>
                <Videos videos={videos} direction='row' />
            </Box>
		</Stack>
	);
};

export default Feed;
