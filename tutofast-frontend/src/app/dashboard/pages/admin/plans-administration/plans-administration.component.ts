import { Component, OnInit } from '@angular/core';
import {PlanService} from '../../../services/plan.service';

@Component({
  selector: 'app-plans-administration',
  templateUrl: './plans-administration.component.html',
  styleUrls: ['./plans-administration.component.css']
})
export class PlansAdministrationComponent implements OnInit {

  constructor(private planService: PlanService) { }
  private books: BookInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListBooks();
  }

  getListBooks(): void {
    this.dataApiService
      .getAllBooks()
      .subscribe((books: BookInterface) => (this.books = books));
  }

  onDeleteBook(id: string): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deleteBook(id).subscribe();
    }
  }

  onPreUpdateBook(book: BookInterface): void {
    this.dataApiService.selectedBook = Object.assign({}, book);
  }

  resetForm(bookForm?: NgForm): void {
    this.dataApiService.selectedBook = {
      id: null,
      titulo: '',
      idioma: '',
      descripcion: '',
      portada: '',
      precio: '',
      link_amazon: '',
      autor: '',
      oferta: ''
    };
  }
}
