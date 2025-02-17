import Hero from "../components/Hero";
import Poster from "../components/elements/Poster";
import MovieSlide from "../components/MovieSlide";
import { useState } from "react";
import PopUpDetails from "../components/elements/PopUpDetails";
import useMovie from "../store/useMovie";
import { useFetchMovie } from "../hooks/useFetchMovie";

const SeriesPage = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const { setMovie } = useMovie();
  const { data, loading } = useFetchMovie();

  if (loading) return <div>Loading...</div>;
  return (
    <>
      {openDetails && (
        <PopUpDetails onCloseBtnClick={() => setOpenDetails(!openDetails)} />
      )}

      {/* Hero */}
      {data.map(
        (item, index) =>
          item.Title === "Happiness" && (
            <Hero
              title={item.Title}
              bg={item.Images.banner}
              desc={item.Plot}
              onMoreBtnClick={() => {
                setMovie({
                  title: item.Title,
                  banner: item.Images.landscape,
                  year: item.Year,
                  rated: item.Rated,
                  plot: item.Plot,
                  actors: item.Actors,
                  genre: item.Genre,
                  writer: item.Writer,
                  type: item.Type,
                  isPremium: item.Premium,
                });
                setOpenDetails(true);
              }}
              showGenre={true}
              key={index}
            />
          )
      )}

      {/* Recent */}
      <MovieSlide title="Melanjutkan Tonton Series">
        {data.map(
          (item, index) =>
            item.Type === "series" && (
              <Poster
                key={index}
                title={item.Title}
                oriented="landscape"
                src={item.Images.landscape}
                rating={item.ChillRating}
                premium={item.Premium ? true : false}
                newEpisode={
                  item.Featured.includes("new-episode") ? true : false
                }
                topTen={item.Featured.includes("trending") ? true : false}
                showDetail={() => {
                  setMovie({
                    title: item.Title,
                    banner: item.Images.landscape,
                    year: item.Year,
                    rated: item.Rated,
                    plot: item.Plot,
                    actors: item.Actors,
                    genre: item.Genre,
                    writer: item.Writer,
                    type: item.Type,
                    isPremium: item.Premium,
                  });
                  setOpenDetails(true);
                }}
              />
            )
        )}
      </MovieSlide>

      {/* Series Persembahan Chill */}
      <MovieSlide title="Series Persembahan Chill">
        {data.map(
          (item, index) =>
            item.Type === "series" &&
            item.Premium === true && (
              <Poster
                key={index}
                title={item.Title}
                src={item.Images.potrait}
                rating={item.ChillRating}
                premium={item.Premium ? true : false}
                newEpisode={
                  item.Featured.includes("new-episode") ? true : false
                }
                topTen={item.Featured.includes("trending") ? true : false}
                showDetail={() => {
                  setMovie({
                    title: item.Title,
                    banner: item.Images.landscape,
                    year: item.Year,
                    rated: item.Rated,
                    plot: item.Plot,
                    actors: item.Actors,
                    genre: item.Genre,
                    writer: item.Writer,
                    type: item.Type,
                    isPremium: item.Premium,
                  });
                  setOpenDetails(true);
                }}
              />
            )
        )}
      </MovieSlide>

      {/* Top Rating Series Hari ini */}
      <MovieSlide title="Top Rating Series Hari ini">
        {data.map(
          (item, index) =>
            item.Type === "series" &&
            item.ChillRating >= 4.5 && (
              <Poster
                key={index}
                title={item.Title}
                src={item.Images.potrait}
                rating={item.ChillRating}
                premium={item.Premium ? true : false}
                newEpisode={
                  item.Featured.includes("new-episode") ? true : false
                }
                topTen={item.Featured.includes("trending") ? true : false}
                showDetail={() => {
                  setMovie({
                    title: item.Title,
                    banner: item.Images.landscape,
                    year: item.Year,
                    rated: item.Rated,
                    plot: item.Plot,
                    actors: item.Actors,
                    genre: item.Genre,
                    writer: item.Writer,
                    type: item.Type,
                    isPremium: item.Premium,
                  });
                  setOpenDetails(true);
                }}
              />
            )
        )}
      </MovieSlide>

      {/* Series Trending */}
      <MovieSlide title="Series Trending">
        {data.map(
          (item, index) =>
            item.Featured.includes("trending") &&
            item.Type === "series" && (
              <Poster
                key={index}
                title={item.Title}
                src={item.Images.potrait}
                rating={item.ChillRating}
                premium={item.Premium ? true : false}
                newEpisode={
                  item.Featured.includes("new-episode") ? true : false
                }
                topTen={item.Featured.includes("trending") ? true : false}
                showDetail={() => {
                  setMovie({
                    title: item.Title,
                    banner: item.Images.landscape,
                    year: item.Year,
                    rated: item.Rated,
                    plot: item.Plot,
                    actors: item.Actors,
                    genre: item.Genre,
                    writer: item.Writer,
                    type: item.Type,
                    isPremium: item.Premium,
                  });
                  setOpenDetails(true);
                }}
              />
            )
        )}
      </MovieSlide>

      {/* Rilis Baru */}
      <MovieSlide title="Rilis Baru">
        {data.map(
          (item, index) =>
            item.Type === "series" &&
            Number(item.Year) >= 2025 && (
              <Poster
                key={index}
                title={item.Title}
                src={item.Images.potrait}
                rating={item.ChillRating}
                premium={item.Premium ? true : false}
                newEpisode={
                  item.Featured.includes("new-episode") ? true : false
                }
                topTen={item.Featured.includes("trending") ? true : false}
                showDetail={() => {
                  setMovie({
                    title: item.Title,
                    banner: item.Images.landscape,
                    year: item.Year,
                    rated: item.Rated,
                    plot: item.Plot,
                    actors: item.Actors,
                    genre: item.Genre,
                    writer: item.Writer,
                    type: item.Type,
                    isPremium: item.Premium,
                  });
                  setOpenDetails(true);
                }}
              />
            )
        )}
      </MovieSlide>
    </>
  );
};

export default SeriesPage;
