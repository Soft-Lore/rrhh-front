import { Component, AfterViewInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Tab, TabOrientation } from '../../interfaces/Tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent implements AfterViewInit {
  @Input() tabs: Tab[] = [];
  @Input() orientation: TabOrientation = TabOrientation.HORIZONTAL;
  @ViewChild('tabContent', { read: ViewContainerRef }) tabContent!: ViewContainerRef;
  tabSelected: number = 0;
  orientations = TabOrientation;

  constructor() {}

  ngAfterViewInit(): void {
    const defaultIndex = this.tabs.findIndex(tab => tab.default);
    this.tabSelected = defaultIndex !== -1 ? defaultIndex : 0;
    this.loadComponent(this.tabSelected);
  }                                         

  selectTab(index: number) {
    this.tabSelected = index;
    this.loadComponent(index);
  }

  loadComponent(index: number) {
    const tab = this.tabs[index];

    this.tabContent.clear();
    this.tabContent.createComponent(tab.childComponent);
  }

  getClasses() {
    return {
      'flex': this.orientation === TabOrientation.HORIZONTAL,
      'block': this.orientation === TabOrientation.VERTICAL
    };
  }
}
