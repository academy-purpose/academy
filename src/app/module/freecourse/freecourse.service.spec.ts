import { TestBed } from '@angular/core/testing';

import { FreecourseService } from './freecourse.service';

describe('FreecourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreecourseService = TestBed.get(FreecourseService);
    expect(service).toBeTruthy();
  });
});
