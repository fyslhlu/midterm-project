import { TextField, Button } from "@mui/material";

function Signup() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold text-text-main">Create Account</h2>
        <p className="text-text-muted mt-1">Sign up to get started</p>
      </div>

      <TextField label="Full Name" fullWidth />
      <TextField label="Email" fullWidth />
      <TextField label="Password" type="password" fullWidth />

      <Button variant="contained" fullWidth>
        Create Account
      </Button>
    </div>
  );
}

export default Signup;