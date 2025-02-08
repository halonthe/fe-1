import Hero from "../components/Hero";
import Poster from "../components/elements/Poster";
import MovieSlide from "../components/MovieSlide";
import { useEffect, useState } from "react";
import PopUpDetails from "../components/elements/PopUpDetails";

const HomePage = () => {
  // fetch data dari file ./public/database.json
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      fetch("/database.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  // state modal atau pop-up
  const [openDetails, setOpenDetails] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentBanner, setCurrentBanner] = useState("");
  const [currentYears, setCurrentYears] = useState("");
  const [currentRated, setCurrentRated] = useState("");
  const [currentPlot, setCurrentPlot] = useState("");
  const [currentActors, setCurrentActors] = useState("");
  const [currentGenre, setCurrentGenre] = useState("");
  const [currentWritter, setCurrentWritter] = useState("");
  const [currentType, setCurrentType] = useState("");
  const [currentFeatured, setCurrentFeatured] = useState([]);
  // menampilakn pop-up
  const handlePopUpDetails = () => {
    setOpenDetails(true);
  };

  return (
    <>
      {openDetails && (
        <PopUpDetails
          title={currentTitle}
          banner={currentBanner}
          years={currentYears}
          rated={currentRated}
          plot={currentPlot}
          actors={currentActors}
          genre={currentGenre}
          writter={currentWritter}
          type={currentType}
          featured={currentFeatured}
          onCloseBtnClick={() => setOpenDetails(!openDetails)}
        />
      )}

      {/* Hero */}
      {data.map(
        (item, index) =>
          item.Title === "Duty After School" && (
            <Hero
              title={item.Title}
              bg={item.Images.banner}
              desc={item.Plot}
              onMoreBtnClick={() => {
                setCurrentTitle(item.Title);
                setCurrentBanner(item.Images.landscape);
                setCurrentYears(item.Year);
                setCurrentRated(item.Rated);
                setCurrentPlot(item.Plot);
                setCurrentActors(item.Actors);
                setCurrentGenre(item.Genre);
                setCurrentWritter(item.Writer);
                setCurrentType(item.Type);
                setCurrentFeatured(item.Featured);
                handlePopUpDetails();
              }}
              showGenre={false}
              key={index}
            />
          )
      )}

      {/* Recent */}
      <MovieSlide title="Melanjutkan Tonton Film">
        {data.map((item, index) => (
          <Poster
            key={index}
            title={item.Title}
            oriented="landscape"
            src={item.Images.landscape}
            rating={item.ChillRating}
            newEpisode={false}
            topTen={false}
            showDetail={() => {
              setCurrentTitle(item.Title);
              setCurrentBanner(item.Images.landscape);
              setCurrentYears(item.Year);
              setCurrentRated(item.Rated);
              setCurrentPlot(item.Plot);
              setCurrentActors(item.Actors);
              setCurrentGenre(item.Genre);
              setCurrentWritter(item.Writer);
              setCurrentType(item.Type);
              setCurrentFeatured(item.Featured);
              handlePopUpDetails();
            }}
          />
        ))}
      </MovieSlide>

      {/* Top Rating dan Series Hari ini */}
      <MovieSlide title="Top Rating dan Series Hari ini">
        {data.map(
          (item, index) =>
            item.ChillRating >= 4.5 && (
              <Poster
                key={index}
                title={item.Title}
                src={item.Images.potrait}
                rating={item.ChillRating}
                newEpisode={
                  item.Featured.includes("new-episode") ? true : false
                }
                topTen={item.Featured.includes("trending") ? true : false}
                showDetail={() => {
                  setCurrentTitle(item.Title);
                  setCurrentBanner(item.Images.landscape);
                  setCurrentYears(item.Year);
                  setCurrentRated(item.Rated);
                  setCurrentPlot(item.Plot);
                  setCurrentActors(item.Actors);
                  setCurrentGenre(item.Genre);
                  setCurrentWritter(item.Writer);
                  setCurrentType(item.Type);
                  setCurrentFeatured(item.Featured);
                  handlePopUpDetails();
                }}
              />
            )
        )}
      </MovieSlide>

      {/* Film Trending */}
      <MovieSlide title="Film Trending">
        {data.map(
          (item, index) =>
            item.Featured.includes("trending") && (
              <Poster
                key={index}
                title={item.Title}
                src={item.Images.potrait}
                rating={item.ChillRating}
                newEpisode={
                  item.Featured.includes("new-episode") ? true : false
                }
                topTen={item.Featured.includes("trending") ? true : false}
                showDetail={() => {
                  setCurrentTitle(item.Title);
                  setCurrentBanner(item.Images.landscape);
                  setCurrentYears(item.Year);
                  setCurrentRated(item.Rated);
                  setCurrentPlot(item.Plot);
                  setCurrentActors(item.Actors);
                  setCurrentGenre(item.Genre);
                  setCurrentWritter(item.Writer);
                  setCurrentType(item.Type);
                  setCurrentFeatured(item.Featured);
                  handlePopUpDetails();
                }}
              />
            )
        )}
      </MovieSlide>

      {/* Rilis Baru */}
      <MovieSlide title="Rilis Baru">
        {data.map(
          (item, index) =>
            Number(item.Year) >= 2025 && (
              <Poster
                key={index}
                title={item.Title}
                src={item.Images.potrait}
                rating={item.ChillRating}
                newEpisode={
                  item.Featured.includes("new-episode") ? true : false
                }
                topTen={item.Featured.includes("trending") ? true : false}
                showDetail={() => {
                  setCurrentTitle(item.Title);
                  setCurrentBanner(item.Images.landscape);
                  setCurrentYears(item.Year);
                  setCurrentRated(item.Rated);
                  setCurrentPlot(item.Plot);
                  setCurrentActors(item.Actors);
                  setCurrentGenre(item.Genre);
                  setCurrentWritter(item.Writer);
                  setCurrentType(item.Type);
                  setCurrentFeatured(item.Featured);
                  handlePopUpDetails();
                }}
              />
            )
        )}
      </MovieSlide>
    </>
  );
};

export default HomePage;
