/**
 * Created by luye on 2017/6/4.
 */
import {observable, action} from 'mobx';
import {inject, observer} from 'mobx-react';
// @inject(['energyStore'])
export default class Drag{
  constructor(){
    this.ele = 'w';
  }
  
  @action dragStart(event){
    this.ele = event.target;
  }
  
  @action allowDrop(event){
    event.preventDefault();
  }
  
  @action dropStart(event){
    event.target.appendChild(this.ele);
  }
  
  @action dropEnd(event){
  
  }
}