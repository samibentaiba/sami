import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import Sidebar from "../components/Sidebar";
import japan from "../assets/images/japan.png";
import paris from "../assets/images/paris.png";
import space from "../assets/images/space.png";
import skyboard from "../assets/images/skyboard.png";
import nightsky from "../assets/images/nightsky.png";
import couple from "../assets/images/couple.png";
import hero from "../assets/images/Hero.png";
import DDD from "../assets/images/3D.png";
import Like from "../components/Like";

const Home = () => {
  const [likedItems, setLikedItems] = useState({});
  const [likedFeatured, setLikedFeatured] = useState(false); // State for featured like

  const handleLikeToggle = (item) => {
    setLikedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const handleFeaturedLikeToggle = () => {
    setLikedFeatured((prev) => !prev);
  };

  const handleTicketClick = (title) => {
    console.log(`Clicked on ${title}`);
  };

  return (
    <div className="homeContainer">
      <Sidebar />
      <div className="mainContent">
        <Navbar />
        <section className="featuredSection" style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", padding: "20px", borderRadius: "8px", color: "#fff" }}>
          <div className="featuredBanner">
            <h2 className="featuredTitle">Insider</h2>
            <p className="featuredDetails">2022 | Comedy horror | 1 Season</p>
            <div className="featuredButtons">
              <button className="featuredButton">Watch now</button>
              <Like
                isLiked={likedFeatured}
                onClick={(e) => {
                  e.stopPropagation();
                  handleFeaturedLikeToggle();
                }}
                size="medium"
              />
            </div>
          </div>
        </section>
        <section className="section trendingSection">
          <h3 className="sectionTitle">Trending</h3>
          <div className="ticketGrid">
            {[
              { img: japan, title: "Tokyo Train", details: "2022 | Action Comedy" },
              { img: space, title: "Moonfall", details: "2022 | Sci-fi" },
              { img: paris, title: "Life in Paris", details: "2023 | Documentary Series" },
              { img: DDD, title: "House of Gucci", details: "2021 | Drama" },
            ].map((item, index) => (
              <div
                className="ticketItem"
                key={index}
                onClick={() => handleTicketClick(item.title)}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  cursor: "pointer",
                  borderRadius: "8px",
                  position: "relative",
                  color: "#fff",
                }}
              >
                <Like
                  isLiked={likedItems[item.title]}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLikeToggle(item.title);
                  }}
                  size="medium"
                />
                <div
                  className="ticketContent"
                >
                  <p className="itemTitle">{item.title}</p>
                  <p className="itemDetails">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="section continueWatchingSection">
          <h3 className="sectionTitle">Continue Watching</h3>
          <div className="ticketGrid">
            {[
              { img: couple, title: "Movie Title 1" },
              { img: skyboard, title: "Movie Title 2" },
              { img: nightsky, title: "Movie Title 3" },
            ].map((item, index) => (
              <div
                className="ticketItem"
                key={index}
                onClick={() => handleTicketClick(item.title)}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  cursor: "pointer",
                  borderRadius: "8px",
                  position: "relative",
                  color: "#fff",
                }}
              >
                <Like
                  isLiked={likedItems[item.title]}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLikeToggle(item.title);
                  }}
                  size="small"
                />
                <div
                  className="ticketContent"
                  style={{
                    padding: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "8px",
                  }}
                >
                  <p className="itemTitle">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
