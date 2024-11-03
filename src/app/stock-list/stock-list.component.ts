import { Component, OnInit } from '@angular/core';
import { StockportfolioService } from '../stockportfolio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Stock {
  symbol: string;
  quantity: number;
  currentPrice?: number;
  totalValue?: number;
}

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.css'
})
export class StockListComponent implements OnInit{
  stocks: Stock[] = [];
  totalValuePortfolio: number =0;

  constructor(private stockPortfolioService: StockportfolioService) {}

  ngOnInit(): void {
    this.getAllStocks();
    this.getTotalValueStocks();
  }

  getAllStocks(): void {
    this.stockPortfolioService.getAllStocks().subscribe((stocks) => {
      this.stocks = stocks;
    });
  }

  getTotalValueStocks(): void {
    this.stockPortfolioService.getTotalValue().subscribe((value) => {
      this.totalValuePortfolio = value;
    });
  }

  removeStock(symbol: string): void {
    this.stockPortfolioService.deleteStock(symbol).subscribe(() => {
      this.getAllStocks();
     this.getTotalValueStocks();
    });
  }
}
