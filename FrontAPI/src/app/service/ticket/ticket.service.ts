import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getTickets(): Observable<object> {
    return this.http.get('http://localhost:3000/api/tickets', httpOptions);
  }
  getTicket(id: number): Observable<any> {
    const url = `http://localhost:3000/api/ticket/${id}`;
    return this.http.get(url, httpOptions);
  }
  addTicket(donnees: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/ticket', donnees,  httpOptions );
  }
  deleteTicket(id: number): Observable<any> {
    const url = `http://localhost:3000/api/ticket/${id}`;
    return this.http.delete(url);
  }
  updateTicket(id: number,donnees : any): Observable<any> {
    const url = `http://localhost:3000/api/ticket/${id}/update`;
    return this.http.put(url, donnees,  httpOptions );
  }
}
