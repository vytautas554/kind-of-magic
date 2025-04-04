import { TestBed } from '@angular/core/testing';

import { FirebaseImagesService } from './firebase-images.service';

describe('FirebaseImagesService', () => {
  let service: FirebaseImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
