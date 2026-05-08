import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CircularProgress,
} from "@mui/material";

import { showSuccessToast } from "../services/toastService";

function Login() {
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    setOpenDialog(true);
  };

  const handleCancel = () => {
    setOpenDialog(false);
  };

  const handleConfirmLogin = () => {
    setOpenDialog(false);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      showSuccessToast("Login successful!");
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center mb-2">
  <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
  <p className="text-slate-500 mt-1">Login to access your dashboard</p>
</div>

      <TextField label="Email" fullWidth />
      <TextField label="Password" type="password" fullWidth />

      <Button
        variant="contained"
        fullWidth
        onClick={handleLoginClick}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
      </Button>

      <Dialog open={openDialog} onClose={handleCancel}>
        <DialogTitle>Confirm Login</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to login?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCancel} color="inherit">
            No
          </Button>

          <Button onClick={handleConfirmLogin} variant="contained">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login;