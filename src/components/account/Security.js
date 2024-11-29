import { useState } from "react";

const Security = () => {
    const [password, setPassword] = useState({ current: "", new: "", confirm: "" });
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [isAccountDisabled, setIsAccountDisabled] = useState(false);
  
    // Handle form changes for password
    const handlePasswordChange = (e) => {
      const { name, value } = e.target;
      setPassword((prevPassword) => ({
        ...prevPassword,
        [name]: value,
      }));
    };
  
    // Mock function to save new password
    const handleChangePassword = () => {
      if (password.new !== password.confirm) {
        alert("New password and confirm password do not match.");
        return;
      }
      console.log("Password changed successfully!");
      setPassword({ current: "", new: "", confirm: "" });
      setShowPasswordForm(false);
    };
  
    // Mock function to disable the account
    const handleDisableAccount = () => {
      const confirmDisable = window.confirm("Are you sure you want to disable your account?");
      if (confirmDisable) {
        setIsAccountDisabled(true);
        console.log("Account disabled.");
      }
    };
  
    return (
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Security</h2>
  
        {/* Change Password Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Change Password</h3>
          <button
            onClick={() => setShowPasswordForm(!showPasswordForm)}
            className="mt-2 px-4 py-2 bg-blue-900 text-white rounded-md"
          >
            {showPasswordForm ? "Cancel" : "Change Password"}
          </button>
  
          {showPasswordForm && (
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                <input
                  type="password"
                  name="current"
                  value={password.current}
                  onChange={handlePasswordChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  name="new"
                  value={password.new}
                  onChange={handlePasswordChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input
                  type="password"
                  name="confirm"
                  value={password.confirm}
                  onChange={handlePasswordChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <button
                onClick={handleChangePassword}
                className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-md"
              >
                Save Password
              </button>
            </div>
          )}
        </div>
  
        {/* Disable Account Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Account Status</h3>
          {isAccountDisabled ? (
            <p className="mt-4 text-red-500 font-semibold">Your account is disabled.</p>
          ) : (
            <div className="mt-4">
              <p className="text-gray-700">If you want to disable your account, click the button below.</p>
              <button
                onClick={handleDisableAccount}
                className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Disable Account
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Security;