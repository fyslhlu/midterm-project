import { useState } from "react";
import { Button } from "@mui/material";
import { showSuccessToast } from "@/services/toastService";

type NotificationItem = {
  id: number;
  title: string;
  message: string;
  read: boolean;
};

function Notifications() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 1,
      title: "New Login",
      message: "A user logged in successfully.",
      read: false,
    },
    {
      id: 2,
      title: "Dashboard Updated",
      message: "AG Grid table was loaded correctly.",
      read: false,
    },
    {
      id: 3,
      title: "Theme Applied",
      message: "Custom application theme is active.",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((item) => !item.read).length;

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        read: true,
      }))
    );

    showSuccessToast("All notifications marked as read");
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
        <p className="text-slate-500">
          You have {unreadCount} unread notification(s).
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Notification Center</h2>

          <Button variant="contained" onClick={markAllAsRead}>
            Mark All As Read
          </Button>
        </div>

        <div className="flex flex-col gap-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`border rounded-xl p-4 ${
                notification.read ? "bg-white" : "bg-blue-50 border-blue-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{notification.title}</h3>

                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    notification.read
                      ? "bg-slate-100 text-slate-500"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {notification.read ? "Read" : "Unread"}
                </span>
              </div>

              <p className="text-slate-500 mt-1">{notification.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications;