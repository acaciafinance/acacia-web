import { useState } from "react";

const UserProfile = ({userData}) => {
    // State to handle edit mode and sample user data
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
      name: userData.fullName,
      email: userData.email,
      // phone: "123-456-7890",
      // address: "123 Main Street",
      // tier: "Basic", // Possible tiers: Basic, Verified, Premium
    });
  
    // Toggle edit mode
    const handleEdit = () => setIsEditing(!isEditing);
  
    // Handle form changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    };
  
    // Mock function for saving user data
    const handleSave = () => {
      // Here you would add functionality to save the updated user data
      setIsEditing(false);
      // console.log("User data saved:", user);
    };
  
    // Render basic user profile information
    return (
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">User Profile</h2>
  
        {/* Display user profile information or editable inputs based on edit mode */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            ) : (
              <p className="mt-1 text-gray-800">{user.name}</p>
            )}
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            ) : (
              <p className="mt-1 text-gray-800">{user.email}</p>
            )}
          </div>
  
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            ) : (
              <p className="mt-1 text-gray-800">{user.phone}</p>
            )}
          </div> */}
  
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            ) : (
              <p className="mt-1 text-gray-800">{user.address}</p>
            )}
          </div> */}
  
          {/* User Tier and Verification */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Account Tier</label>
            <p className="mt-1 text-gray-800">
              {user.tier}
              {user.tier === "Basic" && (
                <button
                  className="ml-4 text-sm text-teal-500 underline"
                  onClick={() => alert("Verification process initiated.")}
                >
                  Verify Account
                </button>
              )}
            </p>
          </div> */}
        </div>
  
        {/* Edit and Save Buttons */}
        <div className="mt-6 flex space-x-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-900 text-white rounded-md"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-teal-500 text-white rounded-md"
            >
              Edit Profile
            </button>
          )}
          {isEditing && (
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    );
  };
  
  export default UserProfile;