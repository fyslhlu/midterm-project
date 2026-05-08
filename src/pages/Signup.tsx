import { TextField, Button } from "@mui/material";

function Signup() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">Signup</h2>

      <TextField label="Email" fullWidth />
      <TextField label="Password" type="password" fullWidth />

      <Button variant="contained" fullWidth>
        Create Account
      </Button>
    </div>
  );
}

export default Signup;