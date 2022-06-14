import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import Box  from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage.js";
import CustomizedAccordions from "../components/Accordian.js";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal.js";

const Tour = () => <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world in Vegas
    </Typography>
    <Box marginTop={3} sx={{display: "flex"}}>
        <img src="https://cdn.getyourguide.com/img/location/5ffeb496e3e09.jpeg/88.jpg" alt="Las Vegas"  height={325} />
        <ImageCollage />
    </Box>
    <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
        </Typography >
        <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
            Frequently asked questions
        </Typography >
        <CustomizedAccordions />
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            <BasicModal />
        </BottomNavigation >
      </Paper>
</Container>

export default Tour;