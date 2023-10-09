import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { FC, useEffect, useState } from "react";
import { fetchAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";


const SearchPage: FC = () => {
    const { searchTerm } = useParams();
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
    }, [searchTerm])

    return (
        <Box p={2} minHeight="95vh" sx={{ backgroundColor: '#000' }}>
            <Typography variant="h4" fontWeight='900' mb={3} sx={{ color: '#fff' }} ml={{ sm: '100px'}} >
                Search results for:
                <span style={{ color: '#FC1503' }}> {searchTerm} </span>
            </Typography>
	    <Box display="flex">
	    	<Box sx={{ mr: { sm: '100px' }}} />
            	<Videos videos={videos} />
            </Box>
	</Box>
	);
};

export default SearchPage;
