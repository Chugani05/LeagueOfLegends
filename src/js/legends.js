// We export the Legends class by default
export default class Legend {
    // Constructor that receives data as a parameter that contains the data of the legends that we obtain from the API
    constructor(data) {
        this.name = data.name;
        this.image = "https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/" + data.image.full;
        this.title = data.title;
        this.tags = data.tags;
        this.attack = data.info.attack;
        this.defense = data.info.defense;
        this.magic = data.info.magic;
        this.difficulty = data.info.difficulty;
        this.story = data.blurb;
    }
  }