import { Directive, ElementRef, Renderer } from "@angular/core"

@Directive({
  selector:'[myFocus]'
})

export class FocusDirective
{
  
  constructor(private el:ElementRef, private rd:Renderer)
  {
    
    console.log(this.el.nativeElement);
    rd.setElementStyle(el.nativeElement,'background','white');
  }
  
  ngAfterViewInit()
  {
    console.log('dire');
    this.el.nativeElement.focus();
  }
}