import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AnimeButton from "./button";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

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
    </Box>
  );
};

export default SubscribeForm;
