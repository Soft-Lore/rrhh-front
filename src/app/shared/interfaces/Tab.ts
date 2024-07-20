export interface Tab {
  title: string;
  childComponent: any;
  default?: boolean;
}

export enum TabOrientation {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}