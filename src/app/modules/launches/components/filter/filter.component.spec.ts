import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('remove query should work', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.removeQuery(['launches'], {limit: '100'});
    expect(spy.calls.mostRecent().args[1].queryParams.limit).toBeNull();
    expect(spy.calls.mostRecent().args[1].queryParamsHandling).toEqual('merge');
  });
});
