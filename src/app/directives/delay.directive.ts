import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[Delay]',
  standalone: true
})
export class DelayDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set delay(time: number | undefined) {
    //this.viewContainer.clear();
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, time)

  }

}
