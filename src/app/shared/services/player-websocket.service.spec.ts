import { TestBed } from '@angular/core/testing';

import { PlayerWebsocketService } from './player-websocket.service';

describe('PlayerWebsocketService', () => {
  let service: PlayerWebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerWebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
