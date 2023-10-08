import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { Dispatch, FC } from "react";

type Props = {
	selectedCategory: string;
	setSelectedCategory: Dispatch<React.SetStateAction<string>>;
};

const SideBar: FC<Props> = ({ selectedCategory, setSelectedCategory }) => {
	return (
		<Stack
			direction="row"
			sx={{
				overflowY: "auto",
				height: { sx: "auto", md: "95%" },
				flexDirection: { md: "column" },
			}}
		>
			{categories.map((category) => {
				return (
					<button
						key={category.name}
						className="category-btn"
						style={{
							background: selectedCategory === category.name ? "#FC1503" : "",
							color: "#fff",
						}}
						onClick={() => {
							setSelectedCategory(category.name);
						}}
					>
						<span
							style={{
								marginRight: "15px",
								color: category.name === selectedCategory ? "#fff" : "red",
							}}
						>
							{" "}
							{category.icon}{" "}
						</span>
						<span
							style={{ opacity: category.name === selectedCategory ? 1 : 0.8 }}
						>
							{" "}
							{category.name}{" "}
						</span>
					</button>
				);
			})}
		</Stack>
	);
};

export default SideBar;
