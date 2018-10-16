export class Tamagotchi
{
  constructor (){
    //, poo = 0, play = 100, sleep = 100
    this.health = 100;
    this.poo = 0;
    this.play = 100;
    this.sleep = 100;
    this.dead = false;
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


//FOOD
  setHealth () {
    const startInterval = setInterval(() => {
      if (this.dead || this.health < 1) {
        this.dead = true;
        clearInterval(startInterval);
      } else {
          this.health--;
      }
    }, 100);
  }

  getHealth() {
    return this.health;
  }

  newHealth() {
    if (this.health >= 101) {
      this.health = 101;
    } else {
      this.health+=10;
    }
  }


  starved () {
    if(this.health > 0){
      return false;
    } else {
      this.dead = true;
      return "Your Pika got starved";
    }
  }

  //end of food


//Pooo
  setPoo () {
    const startInterval = setInterval(() => {
      if (this.dead || this.poo > 99) {
        this.dead = true;
        clearInterval(startInterval);
        console.log("pood");
      } else {
          this.poo++;
      }
    }, 2000);
  }


  getPoo() {
    return this.poo;
  }

  newPoo() {
    this.poo-=20;
  }


  pooped () {
    if(this.poo < 100){
      return true;

    } else {
      return "Your Pika pooped himself";
    }
  }

  //end of poo

  // initializeGame() {
  //   let healthInterval;
  //   let pooInterval;
  //   healthInterval = setInterval(() => {
  //     if (this.dead) {
  //       this.health = 0;
  //       clearInterval(healthInterval);
  //       clearInterval(pooInterval);
  //     } else {
  //         this.health--;
  //     }
  //   }, 100);
  //
  //   pooInterval = setInterval(() => {
  //     if (this.dead) {
  //       clearInterval(startInterval);
  //       console.log("pood");
  //     } else {
  //         this.poo++;
  //     }
  //   }, 1000);
  // }


//when Pika is playing his health(foodLevel) and sleep decreases. When he eats his poop level increases. When he go to poop, his Health level will go up. SetInterval for poo should be longer than others. Cliking Toilet button will not affect any other functions. When his sleep level is full (when u hit the sleep button it would take 3 minutes to decompress(eventually)) it means that all other features will be restart and the Pika will be healthy and playful again. If one of the progress bars is full the process for others stop.

setPlay () {
  const startInterval = setInterval(() => {
    if (this.dead || this.play < 1) {
      this.dead = true;
      clearInterval(startInterval);
    } else {
        this.play--;
    }
  }, 500);
}

  getPlay() {
    return this.play;
  }

  newPlay() {
    if (this.play >= 101) {
      this.play = 101;
    } else {
      this.play+=10;
    }
  }


  // bored () {
  //   if(this.play > 0){
  //     return false;
  //   } else {
  //     return "Your Pika got very bored with you and decided to die!";
  //   }
  // }

  // setPoo: function() {
  //   const pooInterval = setInterval(()=>{
  //     this.poo++;
  //   })
  // }


}
