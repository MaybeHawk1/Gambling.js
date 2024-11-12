export class Rng {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  generate_random_num_dice() {
    if (this.min < 0 || this.max < 0) {
      console.log(`Number needs to be bigger then 0`);
    }

    else {
      return (Math.floor(Math.random() * this.max + 1));
    }
  }
}
