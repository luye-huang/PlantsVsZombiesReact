/**
 * Created by luye on 2017/6/4.
 */
import {action, observable} from 'mobx';
export default class Bullets {
  @observable bullets;
  
  constructor() {
    this.bullets = [];
    const movingBullets = setInterval(() => {
      this.bullets.forEach((bullet) => bullet.x+=2)
    }, 100);
  }
  
  @action fire(event) {
    // debugger
    const x = event.clientX, y = event.clientY;
    this.energy.deposit -= this.price;
    const firingBullets = setInterval(() => {
      this.bullets.bullets.push({x: x, y: y});
    }, 5000);
  }
}