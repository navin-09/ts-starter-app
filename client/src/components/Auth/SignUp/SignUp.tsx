import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  Container,
  Link,
  Button,
  TextField,
  CssBaseline,
  Avatar,
  Checkbox,
  FormControlLabel,
  Paper,
  MenuItem,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import flags from "react-phone-number-input/flags";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import customImage from "../../../assets/login.jpg";

export default function SignUp() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    occupation: "",
    institution: "",
    company: "", // Added company field
    password: "",
    confirmPassword: "",
  });
  // const theme = useTheme(); // Access the theme

  const [passwordError, setPasswordError] = React.useState("");
  const [ageError, setAgeError] = React.useState("");
  const [submitStatus, setSubmitStatus] = React.useState("");
  const [failureMessage, setFailureMessage] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");
  const [companyError, setCompanyError] = React.useState(""); // Added company error

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const phoneInputStyle = {
    width: "100%",
  };

  const calculateAge = (dob: any) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const validPhone = (phone: any) => {
    const regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    const valid = regex.test(phone);
    return valid;
  };

  const handlePasswordChange = (e: any) => {
    const password = e.target.value;
    const isStrongPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(
      password
    );

    setFormData({ ...formData, password });

    if (isStrongPassword || password === "") {
      setPasswordError("");
    } else {
      setPasswordError(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit."
      );
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (passwordError || confirmPasswordError || companyError) {
      alert("Please fix the form issues before submitting.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setConfirmPasswordError(
        "Passwords do not match. Please make sure they match before submitting the form."
      );
      return;
    }

    const age = calculateAge(formData.dateOfBirth);
    if (age < 18) {
      setAgeError("You must be at least 18 years old to sign up.");
      return;
    }

    const validPhn = validPhone(formData.phoneNumber);
    if (!validPhn) {
      setPhoneError("Please enter a 10-digit valid phone number.");
      return;
    }

    // Perform additional validation for the company field
    if (formData.occupation === "professional" && !formData.company) {
      setCompanyError("Company field is required for professionals.");
      return;
    } else {
      setCompanyError("");
    }

    // Call the API to register the user
    try {
      // Replace this with your actual API call
      // const newUser = await signUp(formData);
      setSubmitStatus("success");
    } catch (error: any) {
      setSubmitStatus("failure");
      setFailureMessage(error.message); // Set the specific error message
      console.error("Error registering user:", error.message);
    }
  };

  if (submitStatus === "success") {
    // Redirect or perform the next steps on success
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${customImage})`, // Use the imported image
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <PhoneInput
                  inputProps={{
                    name: "phoneNumber",
                    required: true,
                  }}
                  country="in"
                  onlyCountries={["in"]}
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  placeholder="Phone Number"
                  inputStyle={{
                    width: "100%",
                    height: "50px",
                    padding: "12px",
                    border: "1px solid #ced4da",
                    borderRadius: "4px",
                  }}
                />
                {phoneError && (
                  <div style={{ color: "red", marginTop: "8px" }}>
                    {phoneError}
                  </div>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="dateOfBirth"
                  // label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
                {ageError && <div className="text-danger">{ageError}</div>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="occupation"
                  label="Occupation"
                  name="occupation"
                  select
                  value={formData.occupation}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="student">Student</MenuItem>
                  <MenuItem value="professional">Working Professional</MenuItem>
                </TextField>
              </Grid>
              {formData.occupation === "student" && (
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="institution"
                    label="College/Institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                  />
                </Grid>
              )}
              {formData.occupation === "professional" && (
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="company"
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  {companyError && (
                    <div className="text-danger">{companyError}</div>
                  )}
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handlePasswordChange}
                />
                {passwordError && (
                  <div className="text-danger">{passwordError}</div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {confirmPasswordError && (
                  <div className="text-danger">{confirmPasswordError}</div>
                )}
              </Grid>
            </Grid>
            <Button
              color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  sx={{ color: "secondary  !important" }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
