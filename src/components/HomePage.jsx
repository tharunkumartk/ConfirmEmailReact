import { Button, Grid, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Grid
      container
      sx={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: "#39608c",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          width: "90%",
          height: "90%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          color={"white"}
          fontWeight={800}
        >
          RescaleMed
        </Typography>
        <Grid item xs={5} sx={{ marginTop: "5%", width: "15%" }}>
          <Button
            variant="contained"
            href="rescalemed:///registeritems/emailconfirmation"
            size={"large"}
            sx={{
              textAlign: "center",
              color: "black",
              backgroundColor: "#e6f2fa",
              ":hover": {
                backgroundColor: "#597596",
                color: "white",
              },
            }}
          >
            Open app and confirm email
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
