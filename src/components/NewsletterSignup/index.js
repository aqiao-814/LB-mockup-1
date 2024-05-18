import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AnimeButton from "./button";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    console.log("email submit");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 20,
      }}
    >
      <TextField
        label="Enter your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        sx={{
          mb: 2,
          width: "100%",
          maxWidth: "400px",
        }}
      />
      <AnimeButton
        type="submit"
        onClick={handleSubmit}
        sx={{ width: "100%", maxWidth: "400px" }}
      />
      {message && (
        <Typography variant="body1" color="primary" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default SubscribeForm;
