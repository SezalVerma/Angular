import { Directive , ElementRef , Renderer2 , HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el : ElementRef , private renderer : Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    // nativeElement - element to which the mouse points to
    // highlight - class , styled in .scss file
    this.renderer.addClass(this.el.nativeElement, 'highlight')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.removeClass(this.el.nativeElement , 'highlight')
  }

}

// to use this highlight directive in a component , use its selector name in the .html file of component
// eg -- used in menu.html