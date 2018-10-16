export class Tamagotchi
{
  constructor (){
    //, poo = 0, play = 100, sleep = 100
    this.health = 100;
    this.poo = 0;
    this.play = 100;
    this.sleep = 100;
  }


  // GetHealth()
  // {
  //   return this.health;
  // }
  //
  // GoPoo()
  // {
  //   return this.poo;
  // }
  //
  // GetPlay()
  // {
  //   return this.play;
  // }
  //
  // GetSleep()
  // {
  //   return this.sleep;
  // }


  setHealth () {
    const startInterval = setInterval(() => {
      this.health--;
      if(this.starved() == "Your Pika got starved") {
        clearInterval(startInterval);

      }
    }, 1000);
  }

  // getHealth() {
  //   return this.health;
  // }

  starved () {
    if(this.health > 0){
      return false;
    } else {
      return "Your Pika got starved";
    }
  }

  setPoo () {
    const startInterval = setInterval(() => {
      this.poo++;
      if(this.pooped() == "Your Pika pooped himself") {
        clearInterval(startInterval);

      }
    }, 2000);
  }

  // getPoo() {
  //   return this.poo;
  // }

  pooped () {
    if(this.poo > 0){
      return true;
    } else {
      return "Your Pika pooped himself";
    }
  }
//when Pika is playing his health(foodLevel) and sleep decreases. When he eats his poop level increases. When he go to poop, his Health level will go up. SetInterval for poo should be longer than others, cuz no time to shit. Cliking Toilet button will not affect any other functions. When his sleep level is full (when u hit the sleep button it would take 3 minutes to decompress(eventually)) it means that all other features will be restarted and the Pika will be healthy and playful again.

  setPlay () {
    const startInterval = setInterval(() => {
      this.play--;
      if(this.bored() == "Your Pika got very bored with you and decided to die!") {
        clearInterval(startInterval);

      }
    }, 1000);
  }

  // getPlay() {
  //   return this.play;
  // }

  bored () {
    if(this.play > 0){
      return false;
    } else {
      return "Your Pika got very bored with you and decided to die!";
    }
  }

  // setPoo: function() {
  //   const pooInterval = setInterval(()=>{
  //     this.poo++;
  //   })
  // }


}
