import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[bold]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})

export class BoldDirective {
  @Input() selectedSize: string = '20px';
  @Input() defaultSize: string = '16px';

  private fontSize: string;
  // private fontWeight: string = 'normal';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.elementRef.nativeElement.style.fontWeight = 'bold';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
    // this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
  }

  ngOnInit() {
    this.fontSize = this.defaultSize;
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   // this.setFontWeight('bold');
  //   this.fontWeight = 'bold';
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   // this.setFontWeight('normal');
  //   this.fontWeight = 'normal';
  // }

  // @HostBinding('style.fontWeight') get getFontWeight() {
  //   return this.fontWeight;
  // }

  @HostBinding('style.fontSize') get getFontSise() {
    return this.fontSize;
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  onMouseEnter() {
    this.setFontWeight('bold');
    this.fontSize = this.selectedSize;
  }

  onMouseLeave() {
    this.setFontWeight('normal');
    this.fontSize = this.defaultSize;
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", val);
  }

}