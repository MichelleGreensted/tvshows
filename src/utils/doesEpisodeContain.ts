import { IEpisode } from "../components/EpisodeCard";

function doesEpisodeContainInNameOrSummary(
  episode: IEpisode,
  term: string
): boolean {
  // making it case insensitive
  const episodeName = episode.name.toLowerCase();
  const episodeSummary = episode.summary.toLowerCase();
  const lowCaseTerm = term.toLowerCase();
  if (episodeName.includes(lowCaseTerm) === true) {
    return true;
  } else if (episodeSummary.includes(lowCaseTerm) === true) {
    return true;
  } else {
    return false;
  }
}

export default doesEpisodeContainInNameOrSummary;
