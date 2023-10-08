import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { FC, useEffect, useState } from "react";
import { fetchAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";


const SearchPage: FC = () => {
    const { searchTerm } = useParams();
    console.log('Search page params: ', searchTerm)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
    }, [searchTerm])

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2, backgroundColor: '#000'}}>
            <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: '#fff' }}>
                Search results for:
                <span style={{ color: '#F31503' }}> {searchTerm} </span>
            </Typography>
            <Videos videos={videos} />
        </Box>
	);
};

export default SearchPage;
