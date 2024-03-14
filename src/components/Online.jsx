const Online = () => {
  const onlineUsers = [
    {
      name: "Harry",
      image:
        "https://images.pexels.com/photos/3055773/pexels-photo-3055773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Chris",
      image:
        "https://images.pexels.com/photos/2770600/pexels-photo-2770600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "April",
      image:
        "https://images.pexels.com/photos/16963436/pexels-photo-16963436/free-photo-of-smiling-teenager-with-eyes-closed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Lara",
      image:
        "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Kenny",
      image:
        "https://images.pexels.com/photos/4665732/pexels-photo-4665732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Reyana",
      image:
        "https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="online shadow bg-body-tertiary rounded p-3">
      <h5 className="suggest-for-u">Online Connections</h5>
      {onlineUsers.map((item) => (
        <div className="s-left d-flex flex-row mt-4">
          <div className="position-relative">
            <img
              src={item.image}
              alt=""
              width="40"
              height="40"
              className="rounded-circle me-2"
            />
            <div className="online-dot"></div>
          </div>
          <h6 className="mt-2">{item.name}</h6>
        </div>
      ))}
    </div>
  );
};

export default Online;
