import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Player {
  id: number;
  name: string;
  total_score: number;
  round_1: number;
  round_2: number;
  round_3: number;
  round_4: number;
  round_5: number;
  round_6: number;
  round_7: number;
  round_8: number;
  round_9: number;
  round_10: number;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  private http = inject(HttpClient);
  //private apiUrl = 'http://127.0.0.1:8000/player/api/v1/players/';
  private apiUrl = 'http://10.10.0.100:8000/player/api/v1/players/';

  getPlayers() {
    return this.http.get<any[]>(this.apiUrl);
  }

  updatePlayerScores(playerId: number, newPoints: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}${playerId}/update_score/`, { points: newPoints });
  }
}
