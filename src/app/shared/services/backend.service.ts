import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements OnInit {
  private apiUrl = 'https://localhost:3000/';
  players: any;

  rounds = [
    'round1', 'round2', 'round3', 'round4', 'round5',
    'round6', 'round7', 'round8', 'round9', 'round10'
  ]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadPlayerData();
  }


  loadPlayerData() {
    this.http.get(this.apiUrl + 'player').subscribe((data) => {
      this.players = data;
    });
  }


}
