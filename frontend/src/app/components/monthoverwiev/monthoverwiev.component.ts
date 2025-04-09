import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monthoverwiev',
  standalone: false,
  templateUrl: './monthoverwiev.component.html',
  styleUrl: './monthoverwiev.component.scss'
})
export class MonthoverwievComponent implements OnInit {
 

  constructor(private route: ActivatedRoute) {}

  displayedColumns: string[] = ['amount', 'account', 'date', 'remark', 'category'];
  dataSource = [
    { amount: 100, account: 'b', date: '2025-01-01', remark: 'beer', category: 'Groceries' },
    { amount: 55.5, account: 'savings', date: '2025-01-05', remark: 'Netflix', category: 'Subscriptions' },
    { amount: 200, account: 'b', date: '2025-01-10', remark: 'fuel', category: 'Transport' },
    { amount: 45.99, account: 'credit', date: '2025-01-12', remark: 'dinner with friends', category: 'Eating Out' },
    { amount: 300, account: 'b', date: '2025-01-15', remark: 'weekly groceries', category: 'Groceries' },
    { amount: 1200, account: 'salary', date: '2025-01-01', remark: 'monthly salary', category: 'Income' },
    { amount: 75, account: 'b', date: '2025-01-20', remark: 'movie tickets', category: 'Entertainment' },
    { amount: 25, account: 'b', date: '2025-01-22', remark: 'pharmacy', category: 'Health' },
    { amount: 400, account: 'savings', date: '2025-01-25', remark: 'rent', category: 'Housing' },
    { amount: 60, account: 'b', date: '2025-01-28', remark: 'Uber rides', category: 'Transport' }
  ]

  jaar: string | null = null;
  maand: string | null = null;

  ngOnInit() {
    this.jaar = this.route.snapshot.paramMap.get('year');
    this.maand = this.route.snapshot.paramMap.get('month');

    console.log('Jaar:', this.jaar);
    console.log('Maand:', this.maand);
  }
}