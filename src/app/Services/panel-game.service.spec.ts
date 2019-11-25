import { TestBed } from '@angular/core/testing';

import { PanelGameService } from './panel-game.service';

describe('PanelGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanelGameService = TestBed.get(PanelGameService);
    expect(service).toBeTruthy();
  });
});
