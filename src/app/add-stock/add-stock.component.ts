import { Component } from '@angular/core';
import { StockportfolioService } from '../stockportfolio.service';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-add-stock',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-stock.component.html',
  styleUrl: './add-stock.component.css'
})
export class AddStockComponent {
  symbol: String = '';
  quantity: number = 0;
  currentPrice: number = 0;
  totalValue: number = 0;

  constructor(private stockPortfolioService: StockportfolioService){}

  addStock(): void{
    const stock = {symbol: this.symbol.toUpperCase(), quantity: this.quantity,
      currentPrice: 0, totalValue: 0};

    this.stockPortfolioService.addStock(stock).subscribe(() => {
      this.symbol = '';
      this.quantity = 0;
      this.currentPrice = 0;
      this.totalValue = 0;
    });
  }

}
