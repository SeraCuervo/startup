let movie = {
  title: 'Star Wars episode V: "The empire strikes back"',
  year: 1980,
  duration: '2 hours ,7 minutes',
  play() {
    return `${this.title} starts`;
  },
  pause() {
    return `${this.title} is paused`;
  },
  resume() {
    return `Play ${this.title} `;
  }
}

//Run with console.log(movie.NAME OF FUNCTION) and it will print 
//in console the methods of the "movie" object.
