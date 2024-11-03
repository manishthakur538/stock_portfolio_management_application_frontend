import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Stock {
  symbol: string;
  quantity: number;
  currentPrice?: number;
  totalValue?: number;
}

@Injectable({
  providedIn: 'root'
})
export class StockportfolioService {

  private stockApiUrl = 'http://localhost:8080/api/stock';

  constructor(private http: HttpClient) { }

  addStock(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(`${this.stockApiUrl}`,stock);
  }

  getAllStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.stockApiUrl}`);
  }

  deleteStock(symbol: string): Observable<void> {
    return this.http.delete<void>(`${this.stockApiUrl}/${symbol}`)
  }

  getTotalValue(): Observable<number> {
    return this.http.get<number>(`${this.stockApiUrl}/totalValue`);
  }

}