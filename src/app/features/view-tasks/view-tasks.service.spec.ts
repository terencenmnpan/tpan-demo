import { TestBed } from '@angular/core/testing';

import { ViewTasksService } from './view-tasks.service';

describe('ViewTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewTasksService = TestBed.get(ViewTasksService);
    expect(service).toBeTruthy();
  });
});
