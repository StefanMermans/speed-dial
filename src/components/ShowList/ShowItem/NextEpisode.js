import React, { useMemo } from "react";
import useNextEpisode from "./useNextEpisode";

export default function NextEpisode({ show }) {
  const [nextEpisode] = useNextEpisode(show);

  const content = useMemo(() => {
    if (!nextEpisode) {
      return "";
    }

    console.log(nextEpisode);  
    
    if (nextEpisode.timeUntilAiring > 0) {
      const time = nextEpisode.timeUntilAiring
      let minutes = time / 60;
      let hours = minutes / 60;
      let days = hours / 24;
      let daysFloor = Math.floor(days);
      let hoursMod = Math.round(hours % 24);
      
      return `${daysFloor} days ${hoursMod} hours`;
    }
  }, [nextEpisode])

  return (
    <div>
      {content}
    </div>
  )
}