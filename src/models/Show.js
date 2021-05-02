export default class Show {
  formatNextEpTime(days, hours) {
    if (days <= 0) {
      return `Next episode in: ${hours} hours`;
    }
  
    return `Next episode in: ${days} days ${hours} hours`;
  }

  getReleasingContent() {
    const [nextEpisode] = this.getNextEpisode(this);
  
    if (nextEpisode.timeUntilAiring > 0) {
      return this.formatNextEpTime(...this.secondsToDaysHours(nextEpisode.timeUntilAiring));
    } else {
      const eps = this.airedEpisodes(this);
  
      return this.formatEpsToWatch(eps.length - this.progress);
    }
  }



  getFinishedContent() {
    return this.formatEpsToWatch(this.media.episodes - this.progress);
  }

  formatEpsToWatch(episodes) {
    return `${episodes} episodes to watch`;
  }
  
  formatContent() {
    switch (this.media.status) {
      case "FINISHED":
        return this.getFinishedContent();
      case "RELEASING":
        return this.getReleasingContent();
      default:
        return `Unknown media status: ${this.media.status}`
    }
  }

  episodesToWatch() {
    switch (this.media.status) {
      case "RELEASING":
        return this.media.airingSchedule.length - this.progress;
      case "FINISHED":
        default:
        return this.media.episodes - this.progress;
    }
  }

  getNextEpisode() {
    const index = this.progress;
  
    if (this.media.airingSchedule.nodes.length >= this.progress) {
      const nextEpisode = this.media.airingSchedule.nodes[index];
      
      return [nextEpisode, index];
    }
  
    return [null, -1];
  }

  secondsToDaysHours(time) {
    let minutes = time / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let daysFloor = Math.floor(days);
    let hoursMod = Math.round(hours % 24);
  
    return [daysFloor, hoursMod];
  }

  airedEpisodes() {
    return this.media.airingSchedule.nodes.filter(scheduled => scheduled.timeUntilAiring < 0);
  }
}
