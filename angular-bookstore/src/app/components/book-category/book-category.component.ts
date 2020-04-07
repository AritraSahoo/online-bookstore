import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { BookCategory } from 'src/app/common/book-category';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.listCategories();
  }

  bookCategories : BookCategory[];

  listCategories()  {
     this.bookService.getCategory().subscribe(data => this.bookCategories = data);
  }

}
