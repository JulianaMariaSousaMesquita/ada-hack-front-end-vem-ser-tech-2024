const Profile = () => {
  const profileData = {
    name: "John Doe",
    email: "johndoe@example.com",
    estado: "Rio de janeiro",
  };

  return (
    <>
      <div className="flex justify-center items-center my-12">
        <div className="max-w-xl p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="avatar">
              <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="Profile"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-4">{profileData.name}</h2>
            <p className="">{profileData.email}</p>
            <p className="">{profileData.estado}</p>
            <p>
              <span className="font-semibold">Pontuação geral:</span>{" "} 580 </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
