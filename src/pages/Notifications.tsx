import { useState } from "react";
import { Button } from "@mui/material";
import {
  showSuccessToast,
  showErrorToast,
} from "@/services/toastService";

type NotificationType = "success" | "warning" | "error";

type NotificationItem = {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
};

function Notifications() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 1,
      type: "success",
      title: "Login Successful",
      message: "The user logged in and reached the dashboard successfully.",
      read: false,
    },
    {
      id: 2,
      type: "warning",
      title: "Profile Incomplete",
      message: "The user should complete profile information in settings.",
      read: false,
    },
    {
      id: 3,
      type: "error",
      title: "Failed Action",
      message: "An action failed while loading old dashboard reports.",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((item) => !item.read).length;

  const getNotificationStyle = (type: NotificationType) => {
    if (type === "success") {
      return {
        card: "bg-green-50 border-green-200",
        badge: "bg-green-600 text-white",
      };
    }

    if (type === "warning") {
      return {
        card: "bg-yellow-50 border-yellow-200",
        badge: "bg-yellow-500 text-white",
      };
    }

    return {
      card: "bg-red-50 border-red-200",
      badge: "bg-red-600 text-white",
    };
  };

  const addSuccessNotification = () => {
    const newNotification: NotificationItem = {
      id: Date.now(),
      type: "success",
      title: "Success Notification",
      message: "This is a success notification created by the user.",
      read: false,
    };

    setNotifications((prev) => [newNotification, ...prev]);
    showSuccessToast("Success notification added");
  };

  const addWarningNotification = () => {
    const newNotification: NotificationItem = {
      id: Date.now(),
      type: "warning",
      title: "Warning Notification",
      message: "This is a warning notification that needs attention.",
      read: false,
    };

    setNotifications((prev) => [newNotification, ...prev]);
    showSuccessToast("Warning notification added");
  };

  const addErrorNotification = () => {
    const newNotification: NotificationItem = {
      id: Date.now(),
      type: "error",
      title: "Error Notification",
      message: "This is an error notification for a failed action.",
      read: false,
    };

    setNotifications((prev) => [newNotification, ...prev]);
    showErrorToast("Error notification added");
  };

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
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Notification Center</h2>
            <p className="text-slate-500">
              This page demonstrates three notification types: success, warning,
              and error.
            </p>
          </div>

          <Button variant="contained" onClick={markAllAsRead}>
            Mark All As Read
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <Button
            variant="contained"
            color="success"
            onClick={addSuccessNotification}
          >
            Add Success
          </Button>

          <Button
            variant="contained"
            color="warning"
            onClick={addWarningNotification}
          >
            Add Warning
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={addErrorNotification}
          >
            Add Error
          </Button>
        </div>

        <div className="flex flex-col gap-3">
          {notifications.map((notification) => {
            const styles = getNotificationStyle(notification.type);

            return (
              <div
                key={notification.id}
                className={`border rounded-xl p-4 ${styles.card}`}
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-semibold">{notification.title}</h3>
                    <p className="text-slate-600 mt-1">
                      {notification.message}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span
                      className={`text-xs px-3 py-1 rounded-full uppercase ${styles.badge}`}
                    >
                      {notification.type}
                    </span>

                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        notification.read
                          ? "bg-slate-200 text-slate-600"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {notification.read ? "Read" : "Unread"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Notifications;