import { useState } from "react";
import {
  Button,
  Switch,
  TextField,
  FormControlLabel,
} from "@mui/material";
import { showSuccessToast } from "@/services/toastService";

function Settings() {
  const [profileName, setProfileName] = useState("Faysal Helou");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkSidebar, setDarkSidebar] = useState(true);

  const handleSaveSettings = () => {
    showSuccessToast("Settings saved successfully");
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500">
          Update your account and application preferences.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>

        <div className="flex flex-col gap-4">
          <TextField
            label="Profile Name"
            value={profileName}
            onChange={(event) => setProfileName(event.target.value)}
            fullWidth
          />

          <FormControlLabel
            control={
              <Switch
                checked={emailNotifications}
                onChange={(event) =>
                  setEmailNotifications(event.target.checked)
                }
              />
            }
            label="Enable email notifications"
          />

          <FormControlLabel
            control={
              <Switch
                checked={darkSidebar}
                onChange={(event) => setDarkSidebar(event.target.checked)}
              />
            }
            label="Use dark sidebar theme"
          />

          <Button variant="contained" onClick={handleSaveSettings}>
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Settings;