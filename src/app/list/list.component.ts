import { Component, OnInit  } from '@angular/core';
import { BooksService } from '../service/books.service';
import { Ibook } from '../../types/Ibook';
import { BookModel } from '../../types/BookModel'
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  imageSrc:string ="";
  books: Object;
  model: BookModel = new BookModel();
  searchText:string
  selectedBook: BookModel;

  constructor( private _bookService:BooksService) {}

  ngOnInit() {
      this._bookService.getBooks().subscribe( data =>
      { 
        this.books = data
        this.initModel();
      });
  }
  initModel(){
    this.imageSrc = this.books[0].coverPhotoURL
    this.model.author = this.books[0].author;
    this.model.isbn =  this.books[0].isbn;
    this.model.published = this.checkDate(this.books[0]);
    this.model.title =  this.books[0].title;
    this.model.coverPhotoURL =  this.imageSrc;
  }
  deleteBook(item){
    this._bookService.removeBookItem(item)
  }
  onSubmit(f){
   this._bookService.addBookItem(f)
  }
  updateBook(f){
    this._bookService.updateBook(f)
  }
  clearForm(){
    this.model.author          = null;
    this.model.isbn            =  null;
    this.model.published       =  null;
    this.model.title           =  null;
    this.model.coverPhotoURL   =  null;
  }

  getBookById(book:BookModel){
    this.selectedBook = book;
   let currentBook =  this._bookService.getBookById(book.isbn);
   if(currentBook){
     this.setModel(currentBook)
   }
  }
  setModel(bookData:Ibook){
    this.imageSrc = bookData.coverPhotoURL

    this.model.author          = bookData.author;
    this.model.isbn            =  bookData.isbn;
    this.model.published       =  this.checkDate(bookData);
    this.model.title           =  bookData.title;
    this.model.coverPhotoURL   =  this.imageSrc;
    this.checkDate(bookData);
  }
  checkDate(bookData:Ibook) {
    const formatedDate = new DatePipe('en-US').transform(bookData.published, 'yyyy-MM-dd')
    return formatedDate
    }
    
}
