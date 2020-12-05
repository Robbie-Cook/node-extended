export default class Random {
  // https://stackoverflow.com/a/7228322/6024982
  static getRandomInt(min: number, max: number): number {
    // min and max included
    return Math.floor(Math.random() * (max - min) + min);
  }
}
