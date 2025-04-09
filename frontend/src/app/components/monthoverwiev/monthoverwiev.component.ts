import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monthoverwiev',
  standalone: false,
  templateUrl: './monthoverwiev.component.html',
  styleUrl: './monthoverwiev.component.scss'
})
export class MonthoverwievComponent implements OnInit {
  jaar: string | null = null;
  maand: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.jaar = this.route.snapshot.paramMap.get('year');
    this.maand = this.route.snapshot.paramMap.get('month');

    console.log('Jaar:', this.jaar);
    console.log('Maand:', this.maand);
  }
}