import { TextField, Button } from "@mui/material";

function Login() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <TextField label="Email" fullWidth />
      <TextField label="Password" type="password" fullWidth />

      <Button variant="contained" fullWidth>
        Login
      </Button>
    </div>
  );
}

export default Login;