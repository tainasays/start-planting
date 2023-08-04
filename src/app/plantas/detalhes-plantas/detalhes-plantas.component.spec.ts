import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPlantasComponent } from './detalhes-plantas.component';

describe('DetalhesPlantasComponent', () => {
  let component: DetalhesPlantasComponent;
  let fixture: ComponentFixture<DetalhesPlantasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesPlantasComponent]
    });
    fixture = TestBed.createComponent(DetalhesPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
