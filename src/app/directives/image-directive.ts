import { Directive, ElementRef, HostListener, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImageDirective]'
})
export class ImageDirective{

  private nodoDOM: ElementRef = inject(ElementRef);
  private renderer2: Renderer2 = inject(Renderer2);

  @HostListener("error")
  OnError(): void {
    if (this.nodoDOM.nativeElement){
        this.renderer2.setAttribute(this.nodoDOM.nativeElement, "src", "img/no-image.jpg")
    }
  }
}
