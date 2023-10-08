import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const NavBar = () => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			p={2}
			sx={{
				position: "sticky",
				background: "#000",
				top: 0,
                zIndex:99,
				justifyContent: "space-between",
			}}
		>
			<Link to="/" className='logo'>
				<img src={logo} alt="logo" height={45} />
			</Link>
            <Searchbar />
		</Stack>
	);
};

export default NavBar;
