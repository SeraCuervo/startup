class EventEmitter {
    constructor() {
  
      this.events = {}
    }
  
    on(EvName, callback) {
      if (this.events[EvName]) {
        this.events[EvName].push(callback)
        callback(EvName)
      } else {
        this.events[EvName] = [callback]
        callback(EvName)
      }
    }
    emit(EvName, callback) {
      let listeners = this.events[EvName]
      if (listeners && listeners.length) {
        listeners.forEach((listener) => {
          listener(callback);
        });
        return callback(EvName);
      }
      return false;
    }
  
    off(EvName) {
      if (this.events[EvName]) {
        this.events[EvName].forEach(x => x())
        delete this.events[EvName]
      }
    }
  }
  
  class Movie extends EventEmitter {
    constructor(title, year, duration) {
      super();
      this.title = title;
      this.year = year;
      this.duration = duration;
    }
    play() {
      console.log('Play movie');
    }
  
    pause() {
      console.log('Movie paused');
    }
  
    resume() {
      console.log('Resume movie');
    }
  }
  class Logger {
    log(info) {
      
      console.log('The ' + info + ' event has been emited');
    }
  }
  
  let Social = {
    share(friendName)  {
      console.log(`Shares ${this.title} with ${friendName}`);
    },
    like(friendName)  {
      console.log(`${friendName} liked ${this.title}`);
    }
  }
  
  class Actor {
    constructor(name, age, character) {
      this.name = name;
      this.age = age;
      this.character = character;
    }
    addCast(cast) {
      cast.forEach(element => {
        console.log(element);
      })
    }
  }
  
  
  
  let starWars = new Movie('Star Wars episode V: "The empire strikes back"', 1980, '2 hours ,7 minutes', 'lightsaber');
  let markHamill = new Actor('Mark Hamill', 66, 'Luke Skywalker');
  
  let cast = new Actor;
  cast.addCast(['David Prowse', 'Carrie Fisher', 'Harrison Ford', 'R2D2', ])
  
  let logger = new Logger();
  
  starWars.on('play', logger.log);
  starWars.on('pause', logger.log)
  starWars.on('resume', logger.log);
  starWars.emit('pause', logger.log);
  starWars.off('resume', logger.log);
  
  Object.assign(starWars, Social);
  
  starWars.play();
  
  starWars.share("Matias Serafini");
  starWars.like("Matias Serafini");
  