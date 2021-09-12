import React, { useState } from "react";
import "./app.css";
// import episodes from "./episodes.json";
//components
import EpisodeCard, { IEpisode } from "./components/EpisodeCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
//helper functions
import doesEpisodeContainInNameOrSummary from "./utils/doesEpisodeContain";

function App(): JSX.Element {
  const [EpisodesData, setData] = useState<IEpisode[]>([]);
  async function fetchEpisodeData() {
    const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
    const jsonData = await response.json();
    setData(jsonData);
  }

  const [searchTerm, setSearchTerm] = useState("");
  function handleChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setSearchTerm(event.target.value);
  }

  const matchingEpisodes = EpisodesData.filter((episode) =>
    doesEpisodeContainInNameOrSummary(episode, searchTerm)
  );

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className={"search-bar"}>
          <input onChange={handleChange} />
          <br />
          Displaying results for '{searchTerm}' in {matchingEpisodes.length}/
          {EpisodesData.length} episodes
        </div>
        <div className={"container"}>
          {matchingEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} data={episode} />
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
