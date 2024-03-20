const Suggestions = () => {
  const suggestedUsers = [
    {
      name: "Elon Musk",
      image:
        "https://bigthink.com/wp-content/uploads/2021/05/3853-136116.jpg?resize=375,375",
    },
    {
      name: "Jeff Bezos",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg",
    },
    {
      name: "Mukesh Ambani",
      image:
        "https://www.jioinstitute.edu.in/sites/default/files/styles/webp/public/founder_image/MDA-image.png.webp?itok=LjLlBUlL",
    },
  ];
  return (
    <div className="suggest shadow bg-body-tertiary rounded p-3">
      <h5 className="suggest-for-u">Suggestions For You</h5>
      <div className="suggestion-list">
        {suggestedUsers.map((item) => (
          <div className="sugg-people d-flex flex-row justify-content-between mt-3">
            <div className="s-left d-flex flex-row">
              <img
                src={item.image}
                alt=""
                width="40"
                height="40"
                className="rounded-circle me-2"
              />
              <h6 className="mt-2">{item.name}</h6>
            </div>
            <div className="s-right">
              <button className="follow">Follow</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
