export default EpisodeCard;

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

interface IEpisodeProps {
  data: IEpisode;
}

function EpisodeCard(props: IEpisodeProps): JSX.Element {
  const episode = props.data;
  return (
    <div className={"episode-card"}>
      {/* write helper function for episode codes */}
      <h2>
        S{episode.season}E{episode.number} - {episode.name}
      </h2>
      <img alt={episode.name} src={episode.image.medium} />
      <p>{episode.summary.replace(/<p>/g, "").replace(/<\/p>/g, "")}</p>
    </div>
  );
}
