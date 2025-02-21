import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerWebsocketService {
  private socket!: WebSocket;
  private playersSubject = new Subject<any>();

  constructor() {
    this.connect();
  }

  private connect() {
    this.socket = new WebSocket('ws://127.0.0.1:8000/ws/players/');

    this.socket.onopen = () => {
      console.log("WebSocket connected ✅");
    };

    this.socket.onmessage = (event) => {
      console.log("WebSocket message received 📡", event.data);
      const data = JSON.parse(event.data);
      this.playersSubject.next(data.players);
    };

    this.socket.onclose = (event) => {
      console.error(`WebSocket closed ❌: ${event.code} - ${event.reason}`);
      setTimeout(() => this.connect(), 5000);
    };

    this.socket.onerror = (error) => {
      console.error("WebSocket error ⚠️:", error);
    };
  }

  getPlayers(): Observable<any[]> {
    return this.playersSubject.asObservable();
  }
}
