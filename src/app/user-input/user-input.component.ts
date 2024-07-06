import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal('0')
  annualInvestment = signal('0')
  expectedReturn = signal('5')
  duration = signal('10')
  constructor(private investmentService: InvestmentService){}

  onCalculate(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      duration: +this.duration(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn()
    })
    this.initialInvestment.set('0')
    this.annualInvestment.set('0')
    this.expectedReturn.set('5')
    this.duration.set('10')
  }

}
