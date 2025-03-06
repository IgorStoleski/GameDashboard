import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Player {
  id: number;
  name: string;
  total_score: number;
  [key: string]: any;
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

  updatePlayerScores(playerData: { id: number; [key: string]: number }): Observable<any> {
    return this.http.patch(`${this.apiUrl}${playerData.id}/update_score/`, playerData);
  }
}
