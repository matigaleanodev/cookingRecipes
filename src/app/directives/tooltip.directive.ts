import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Tooltip } from 'bootstrap';
@Directive({
  selector: '[Tooltip]',
})
export class TooltipDirective implements OnInit {
  @Input() appTooltip: string = '';
  @Input() placement: any = 'top';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    new Tooltip(this.el.nativeElement, {
      title: this.appTooltip,
      placement: this.placement,
    });
  }
}
