import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { confirmUser } from "../utils/AtlasAPI";

const LoadingItem = () => {
  return (
    <Box
      style={{ width: "50%", alignItems: "center", justifyContent: "center" }}
    >
      <CircularProgress sx={{ color: "white" }} size={20} thickness={5} />
    </Box>
  );
};

const HomePage = () => {
  const [params] = useSearchParams();
  const [confirmed, setConfirmed] = useState(0);
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    console.log(params);
    if (params.get("token") && params.get("tokenId")) {
      console.log(params.get("token"));
      console.log(params.get("tokenId"));
      setConfirming(true);
      confirmUser(params.get("token"), params.get("tokenId")).then((res) => {
        setConfirming(false);
        setConfirmed(res ? 1 : -1);
      });
    }
  }, [params]);

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
        <Grid
          item
          sx={{
            marginTop: "5%",
            marginHorizontal: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {confirmed === 1 ? (
            <Grid item sx={{ justifyContent: "center", alignItems: "center" }}>
              <Typography
                variant="h5"
                align="center"
                color={"white"}
                fontWeight={800}
              >
                Your email has been confirmed!
              </Typography>
              <Button
                variant="contained"
                href={"rescalemed:///emailconfirmation"}
                size={"large"}
                sx={{
                  textAlign: "center",
                  color: "black",
                  backgroundColor: "#e6f2fa",
                  ":hover": {
                    backgroundColor: "#597596",
                    color: "white",
                  },
                  alignSelf: "center",
                }}
              >
                Open app
              </Button>
            </Grid>
          ) : confirmed === -1 ? (
            <Grid sx={{ justifyContent: "center", alignItems: "center" }}>
              <Typography
                variant="h5"
                align="center"
                color={"white"}
                fontWeight={800}
              >
                Your email could not be confirmed. Try resending the email.
              </Typography>
            </Grid>
          ) : confirming ? (
            <Grid item>
              <Typography
                variant="h5"
                color={"white"}
                fontWeight={800}
                style={{ textAnchor: "middle" }}
              >
                Confirming your email...
              </Typography>
              <LoadingItem />
            </Grid>
          ) : (
            <Typography
              variant="h5"
              align="center"
              color={"white"}
              fontWeight={800}
            >
              Please confirm your email to continue.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
