// import { greet } from "./utils/greet";
import React, { useState } from "react";
import "./app.css";
import episodes from "./episodes.json";
// import EpisodeData from "./EpisodeData";
import EpisodeEntry from "./components/EpisodeEntry";
import Header from "./components/Header";
import Footer from "./components/Footer";
import doesEpisodeContainInNameOrSummary from "./utils/doesEpisodeContain";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  function handleChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setSearchTerm(event.target.value);
  }
  const matchingEpisodes = episodes.filter((episode) =>
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
          {episodes.length} episodes
        </div>
        <div className={"container"}>
          {matchingEpisodes.map((episode) => (
            <EpisodeEntry key={episode.id} data={episode} />
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