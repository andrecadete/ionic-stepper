import { Component, Input, TemplateRef, ViewChild, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

export type IonicStepStatus = ('' | 'error');

@Component({
  selector: 'ion-step',
  template: `
  <ng-template><ng-content></ng-content></ng-template>
  `
})
export class IonicStepComponent implements AfterViewInit {
  index: number;

  @Input() disabled: boolean;
  @Input() label: string;
  @Input() description: string;
  @Input() icon = 'number';
  @Input() errorIcon = 'close';
  @Input() status: IonicStepStatus = '';

  @ViewChild(TemplateRef) content: TemplateRef<any>;
  ngAfterViewInit(){
    console.log('content: ', this.content);
    console.log('label: ', this.label);
  }

}
