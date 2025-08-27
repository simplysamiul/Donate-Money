import React, { useContext} from "react";
import logo from '../assets/logo-white.svg';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AuthContext } from "../provider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";

const Dashboard = () => {
    const { user, userLogOut, updateUser, setLoading, loading} = useContext(AuthContext);
    const {displayName, email, photoURL} = user;
    console.log(photoURL)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoURl.value;
        const userInfo = (name, email, photoUrl);

        // update profile
        updateUser(userInfo)
        .then(() => {
            setLoading(false)
            toast.success("User update successfully ...!")
        })
        .catch(err => {
            setLoading(false)
            toast.error(err.messsage)})
    }
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-greenLg text-white p-5 hidden md:block">
        <img className="mb-4" src={logo} alt="logo" />
        <nav>
          <ul className="space-y-4">
            <li className="hover:text-gray-300 cursor-pointer flex items-center">Profile <CgProfile className="ml-2" /></li>
            <li onClick={userLogOut} className="hover:text-gray-300 cursor-pointer flex items-center">Logout <RiLogoutBoxRLine className="ml-2" /></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-semibold mb-6">Update User Information</h1>

        {/* Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg mx-auto">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">PhotoURL</label>
              <input
                type="text"
                name="photoURl"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

           {loading ? <span className="loading loading-spinner text-greenLg mx-auto"></span>
           : <button
              type="submit"
              className="w-full bg-greenLg text-white font-semibold py-2 rounded-lg hover:bg-yellowOp transition cursor-pointer"
            >
              Update
            </button>}
          </form>
        </div>

        {/* Display Updated Info */}
        <div className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Updated User Info</h2>
          <img className="my-4 rounded-full mx-auto" src={photoURL} alt="" />
          <p><strong>Name:</strong> {displayName}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
