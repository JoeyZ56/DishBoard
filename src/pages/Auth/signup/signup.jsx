// Import necessary MUI components
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { auth } from "../../../Firebase/firebaseClient";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import axios from "axios";
import HamburgerMenu from "../../../components/hamburgerMenu";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Back button
  function handleBackBtn() {
    return window.history.back();
  }

  //Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    //Basic password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      //create user with eamil and password
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //LOGS
      console.log("User signed up with:", userCredentials.user);

      //sending data to database
      await axios.post("http://localhost:5003/api/users", {
        uid: user.uid,
        username,
        email,
        password,
      });
    } catch (error) {
      setError(error.message);
      //Logs
      console.log("signup error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HamburgerMenu />
      <Button onClick={handleBackBtn} variant="contained" color="primary">
        back
      </Button>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: 400,
          margin: "auto",
          marginTop: "3rem",
          padding: 3,
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          Sign Up
        </Typography>

        {/* Error Message */}
        {error && <Alert severity="error">{error}</Alert>}

        {/* Username Field */}
        <TextField label="Username" variant="outlined" required fullWidth />

        {/* Email Field */}
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          required
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          required
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Confirm Password */}
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          required
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Sign Up Button */}

        <Button type="submit" variant="contained" color="primary" fullWidth>
          {loading ? (
            <CircularProgress size={24} colore="inherit" />
          ) : (
            "Sign Up"
          )}
        </Button>

        {/* Already a User Button */}
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
          fullWidth
        >
          Already a User? Login
        </Button>
      </Box>
    </>
  );
};

export default Signup;