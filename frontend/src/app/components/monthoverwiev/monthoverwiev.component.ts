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

  displayedColumns: string[] = ['date', 'description', 'amount'];
  dataSource = [
    { date: '2025-01-01', description: 'Groceries', amount: -50 },
    { date: '2025-01-03', description: 'Salary', amount: 2000 },
    { date: '2025-01-05', description: 'Electricity Bill', amount: -120 }
  ];

  jaar: string | null = null;
  maand: string | null = null;

  ngOnInit() {
    this.jaar = this.route.snapshot.paramMap.get('year');
    this.maand = this.route.snapshot.paramMap.get('month');

    console.log('Jaar:', this.jaar);
    console.log('Maand:', this.maand);
  }
}