import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import { _MatProgressBarMixinBase } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeader(id: string): Promise<Leader>{
    return new Promise(resolve=>{setTimeout(()=>resolve(LEADERS.filter((leader)=>(id===leader.id))[0]),2000);
  }); 
  }

  getLeaders(): Promise<Leader[]>{
    return new Promise(resolve=>{setTimeout(()=>resolve( LEADERS),2000 ) });
  }

  getFeaturedLeader():Promise<Leader>{
    return new Promise(resolve=>{setTimeout(()=>resolve(LEADERS.filter((leader)=>(leader.featured))[0]),2000)
  }); }
}
