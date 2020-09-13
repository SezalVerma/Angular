import {trigger , state , style , animate , transition } from '@angular/animations';

export function visibility(){
   return trigger( 'visibility',[           // trigger name & states(self-defined)
        state('shown' , style ({
          opacity : 1,                    // completely visible
          transform : 'scale(1.0)'
        })),
        state('hidden' , style({
          opacity : 0,
          transform : 'scale(0.5)'
        })),
        // 0.1 s interval while transition btw states , ease-in-out ensures smooth transition
        transition('*=>*', animate('5s ease-in-out')) 
      ])
}

// when http link changes ie dom changes
export function flyInOut(){
  return trigger('flyInOut' , [
    // for any state
    state('in', style({
      opacity : 1, 
      transform : 'translateX(0)'                 // no change 
    })),
    // when entering a dom/page
    transition (':enter', [
      animate('500ms ease-in'),
      style ({transform: 'translateX(-100%)' , opacity : 1 })   // new rendered dom moves in along x 
    ]),
    // when leaving the dom
    transition(':leave', [
      animate('0.5s ease-out'),
      style({ transform:'translateX(100%)' , opacity : 0 })    // view moves out completely moving along x
    ])
  ])
}

// applied to all dom element divs (eg pics , comments) , so they enter dom easily
export function expand(){
  return trigger('expand', [
    state('*', style({
      opacity : 1,
      transform :' translateY(0)'
    })),
    transition(':enter' , [
      style({
        opacity : 0,
        transform :' translateY(-50%)'
      }),
      animate('0.5ms ease-in', style({ opacity : 1 , transform: 'translateY(0)'}))
    ])
  ])
}