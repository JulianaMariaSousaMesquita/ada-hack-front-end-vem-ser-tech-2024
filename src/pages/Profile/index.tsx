import MenuBar from "../../components/MenuBar";

const Profile = () => {
  const profileData = {
    name: "John Doe",
    email: "johndoe@example.com",
    estado: "Rio de janeiro",
  };

  return (
    <>
      <MenuBar />
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="Profile"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-4">{profileData.name}</h2>
            <p className="text-gray-500">{profileData.email}</p>
            <p className="text-gray-500">{profileData.estado}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
