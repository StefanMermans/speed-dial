export default function useNextEpisode(show) {
  const {progress} = show;
  const index = progress;

  if (show.media.airingSchedule.nodes.length >= progress) {
    const nextEpisode = show.media.airingSchedule.nodes[index];
    
    return [nextEpisode, index];
  }

  return [null, -1];
}
