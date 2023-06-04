import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../assets/images/Logo-1.png";

const Footer = () => (
	<Box
		mt="80px"
		bgcolor="#FFF3F4">
		<Stack
			gap="40px"
			sx={{ alignItems: "center" }}
			flexWrap="wrap"
			px="40px"
			pt="24px">
			<img
				src={Logo}
				alt="logo"
				className="logo-footer"
			/>
		</Stack>
		<Typography
			variant="h5"
			display="flex"
			alignItems="center"
			justifyContent="center"
			sx={{ fontSize: { lg: "28px", xs: "20px" } }}
			mt="41px"
			textAlign="center"
			pb="40px">
			Made with ❤️ by{" "}
			<a
				href={`https://github.com/sv-siddharth`}
				target="_blank"
				className="space-before"
				rel="noreferrer">
				Siddharth Verma
			</a>
		</Typography>
	</Box>
);

export default Footer;
