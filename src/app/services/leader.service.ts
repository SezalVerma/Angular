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
    return Promise.resolve(LEADERS.filter((leader)=>(id===leader.id))[0]);
  }

  getLeaders(): Promise<Leader[]>{
    return Promise.resolve( LEADERS);
  }

  getFeaturedLeader():Promise<Leader>{
    return Promise.resolve(LEADERS.filter((leader)=>(leader.featured))[0]);
  }
}
