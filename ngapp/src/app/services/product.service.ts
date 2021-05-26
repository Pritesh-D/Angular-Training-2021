import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url: string = 'https://apiapptrainingnewapp.azurewebsites.net/api/products';
  constructor(private _httpClient: HttpClient) {
  }

  getData<T>(): Observable<T> {
    return this._httpClient.get<T>(this._url);
  }

  getDataById<T>(productId: number): Observable<T> {
    return this._httpClient.get<T>(`${this._url}/${productId}`);
  }

  saveData<T>(product: T): Observable<T> {
    return this._httpClient.post<T>(this._url, product, { headers: new HttpHeaders({ 'content-type': 'application/json' }) });
  }

  updateData<T>(product: T, productId: number): Observable<T> {
    return this._httpClient.put<T>(`${this._url}/${productId}`, product, { headers: new HttpHeaders({ 'content-type': 'application/json' }) });
  }

  deleteData<T>(productId: number): Observable<T> {
    return this._httpClient.delete<T>(`${this._url}/${productId}`, { headers: new HttpHeaders({ 'content-type': 'application/json' }) });
  }
}