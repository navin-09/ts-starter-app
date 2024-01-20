import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link,
  Box,
  Container,
  IconButton,
  Divider,
  useScrollTrigger,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import firsec from "../../assets/favicon2.png";
import secondsec from "../../assets/favicon2.png";
import { motion } from "framer-motion"; // Import from Framer Motion

const HomePage = () => {
  const trigger = useScrollTrigger();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Section 1: Introduction */}
        <Grid item xs={12} md={6}>
          <Card sx={{ display: "flex", flexDirection: "column" }}>
            <CardMedia
              component="img"
              image={firsec}
              alt="Company Logo"
              height="250"
            />
            <CardContent>
              <Typography variant="h4" gutterBottom component="h1">
                Welcome to AInterview
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Your trusted partner in revolutionizing the candidate screening
                process! Leveraging cutting-edge artificial intelligence, we
                bring you a seamless and efficient solution to screen candidates
                for your specified positions without the need for human
                intervention.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Section 2: Innovative Approach */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom component="h1">
                Our Innovative Approach
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                At AInterview, we have redefined the screening process, making
                it faster, unbiased, and remarkably accurate. Through the power
                of artificial intelligence, candidates undergo a comprehensive
                test tailored to your company's requirements, answering
                questions that allow us to evaluate their skills and suitability
                for the designated position.
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              image={secondsec}
              alt="Innovative Approach Image"
              sx={{ pt: 2 }}
            />
          </Card>
        </Grid>

        {/* Section 3: Key Features */}
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom component="h2">
            Key Features
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 4,
            }}
          >
            <Card key={1}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Automation at Its Best
                </Typography>
                <Typography variant="body1">
                  Our AI-driven platform automates the entire screening process,
                  eliminating the need for manual intervention. This not only
                  saves time but also ensures consistent and fair evaluations
                  for every candidate.
                </Typography>
              </CardContent>
            </Card>
            {/* ... other features */}
          </Box>
        </Grid>

        {/* Section 4: How It Works */}
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom component="h2">
            How It Works
          </Typography>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            variants={{
              entering: { opacity: 1 },
            }}
            key={trigger.toString()}
          >
            <Card sx={{ pt: 2 }}>
              <CardContent>
                {" "}
                <Typography variant="body1">
                  Join the future of candidate screening with AInterview.
                  Experience efficiency, objectivity, and cost savings like
                  never before. Transform your hiring process today!
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        {/* <Grid item xs={12}>
          <Typography variant="h3" gutterBottom component="h2">
            How It Works
          </Typography>
          <AnimatePresence exitBeforeEnter>
            <Card key={trigger.toString()} sx={{ pt: 2 }}>
              <CardContent>
                {" "}
                <Typography variant="body1">
                  Join the future of candidate screening with AInterview.
                  Experience efficiency, objectivity, and cost savings like
                  never before. Transform your hiring process today!
                </Typography>
              </CardContent>
            </Card>
          </AnimatePresence>
        </Grid> */}

        {/* Section 5: Contact Us */}
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom component="h2">
            Contact Us
          </Typography>
          <Typography variant="body1">
            Have questions or want to learn more? Contact us through the
            information below.
          </Typography>
          {/* Add contact information here */}
        </Grid>

        {/* Footer: Social Links and Company Information */}
        <Grid item xs={12}>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton size="large" href="https://www.facebook.com/">
                <FacebookIcon />
              </IconButton>
              <IconButton size="large" href="https://www.twitter.com/">
                <TwitterIcon />
              </IconButton>
              <IconButton size="large" href="https://www.instagram.com/">
                <InstagramIcon />
              </IconButton>
              <IconButton size="large" href="https://www.linkedin.com/">
                <LinkedInIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary" component="p">
              &copy; 2024 Your Company. All rights reserved.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
