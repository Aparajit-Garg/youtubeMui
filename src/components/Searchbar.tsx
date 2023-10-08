import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
    const [searchText, setSearchText] = useState<string>()
	const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchText) {
            console.log(`/search/${searchText}`)
            navigate(`/search/${searchText}`)
            setSearchText('')
        }
    }

    return (
		<Paper
			component="form"
			onSubmit={handleSubmit}
			sx={{
				borderRadius: 20,
				border: "1px solid #e3e3e3",
				pl: 2,
				boxShadow: "none",
				mr: { sm: 5 },
			}}
		>
			<input
                className="search-bar"
				placeholder="Search"
				value={searchText}
				onChange={(e) => {setSearchText(e.target.value)}}
			/>
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>
		</Paper>
	);
};

export default Searchbar;
