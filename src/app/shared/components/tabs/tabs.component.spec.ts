import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsComponent } from './tabs.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-first-child',
  template: '<div>Contenido del Primer Componente</div>'
})
class FirstChildComponent {}

@Component({
  selector: 'app-second-child',
  template: '<div>Contenido del Segundo Componente</div>'
})
class SecondChildComponent {}

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsComponent, FirstChildComponent, SecondChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    component.tabs = [
      { title: 'Tab 1', childComponent: FirstChildComponent, default: true },
      { title: 'Tab 2', childComponent: SecondChildComponent }
    ];
    fixture.detectChanges(); // Inicializar el componente con los datos proporcionados
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tab titles', () => {
    const tabTitles = fixture.debugElement.queryAll(By.css('.tab-titles button'));
    expect(tabTitles.length).toBe(2);
    expect(tabTitles[0].nativeElement.textContent.trim()).toBe('Tab 1');
    expect(tabTitles[1].nativeElement.textContent.trim()).toBe('Tab 2');
  }); 

  it('should apply active class to selected tab', () => {
    const tabTitles = fixture.debugElement.queryAll(By.css('.tab-titles button'));
    expect(tabTitles[0].nativeElement.classList).toContain('active');
    expect(tabTitles[1].nativeElement.classList).not.toContain('active');

    tabTitles[1].nativeElement.click();
    fixture.detectChanges();

    expect(tabTitles[0].nativeElement.classList).not.toContain('active');
    expect(tabTitles[1].nativeElement.classList).toContain('active');
  });
});
