import { TestBed } from '@angular/core/testing';

import { MangaManagerService } from './manga-manager.service';

describe('MangaManagerService', () => {
  let service: MangaManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
