import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/player/api/v1/players/';

  getPlayers() {
    return this.http.get<any[]>(this.apiUrl);
  }

  updatePlayerPoints(playerId: number, newPoints: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}${playerId}/`, { points: newPoints });
  }
}
