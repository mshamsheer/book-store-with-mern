import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { AuthContext } from "../contact/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="flex  bg-gray-100">

      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div>
              <img src={user.photoURL} alt="" />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Welcome, {user?.displayName || "Demo User"}!
            </h2>
            <p className="text-gray-700">Here's a summary of your account.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Books Uploaded</h2>
            <p className="text-gray-700">You have uploaded 10 books.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Books Managed</h2>
            <p className="text-gray-700">You are managing 5 books.</p>
          </div>
          {/* Add more cards as needed */}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <ul>
              <li className="mb-2">
                <span className="font-medium">Uploaded:</span> "The Great
                Gatsby"
              </li>
              <li className="mb-2">
                <span className="font-medium">Managed:</span> "To Kill a
                Mockingbird"
              </li>
              {/* Add more activities as needed */}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
