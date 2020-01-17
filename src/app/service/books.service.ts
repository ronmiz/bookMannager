import { Injectable, OnInit } from '@angular/core';
import { Ibook } from '../../types/Ibook';
import { Observable, of } from 'rxjs';
import { BookModel } from 'src/types/BookModel';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  dataBooks:Array<BookModel> = 
     [
      {
        "isbn": "9781593275846",
        "title": "Eloquent JavaScript, Second Edition",
        "author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "coverPhotoURL": "https://eloquentjavascript.net/2nd_edition/img/cover.png"
      },
      {
        "isbn": "9781449331818",
        "title": "Learning JavaScript Design Patterns",
        "author": "Addy Osmani",
        "published": "2012-07-01T00:00:00.000Z",
        "coverPhotoURL": "https://addyosmani.com/resources/essentialjsdesignpatterns/cover/cover.jpg"
      },
      {
        "isbn": "9781449365035",
        "title": "Speaking JavaScript",
        "author": "Axel Rauschmayer",
        "published": "2014-02-01T00:00:00.000Z",
        "coverPhotoURL": "http://speakingjs.com/es5/orm_front_cover.jpg"
      },
      {
        "isbn": "9781491950296",
        "title": "Programming JavaScript Applications",
        "author": "Eric Elliott",
        "published": "2014-07-01T00:00:00.000Z",
        "coverPhotoURL": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4919/9781491950296.jpg"
      },
      {
        "isbn": "9781593277574",
        "title": "Understanding ECMAScript 6",
        "author": "Nicholas C. Zakas",
        "published": "2016-09-03T00:00:00.000Z",
        "coverPhotoURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiyzSI4qGKU-WQQwQ3XKasHAitltCIYQRmHDDmYAzTmeY3jiyg"
      },
      {
        "isbn": "9781491904244",
        "title": "You Dont Know JS",
        "author": "Kyle Simpson",
        "published": "2015-12-27T00:00:00.000Z",
        "coverPhotoURL": "https://ksr-ugc.imgix.net/assets/011/512/107/1988f3a0fc77cc3eac49cac6f1b7ebc0_original.png?ixlib=rb-2.1.0&crop=faces&w=1552&h=873&fit=crop&v=1463683806&auto=format&frame=1&q=92&s=7037537d3031513ff4a7222daf1256a3"
      },
      {
        "isbn": "9781449325862",
        "title": "Git Pocket Guide",
        "author": "Richard E. Silverman",
        "published": "2013-08-02T00:00:00.000Z",
        "coverPhotoURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Zv0R7m_6-6bwDUax68qRwKqzPcPxgHy8sNhcMl0bKS7MywWA"
      },
      {
        "isbn": "9781449337711",
        "title": "Designing Evolvable Web APIs with ASP.NET",
        "author": "Glenn Block, et al.",
        "published": "2014-04-07T00:00:00.000Z",
        "coverPhotoURL": "https://covers.oreillystatic.com/images/0636920026617/lrg.jpg"
      }
    
      ]

  constructor() { 
    this.setLocalStorageBooks();
  }

  private setLocalStorageBooks(){
    localStorage.setItem("book", JSON.stringify(this.dataBooks));
  }

  getBooks():Observable<Ibook[]>{
      this.dataBooks = JSON.parse(localStorage.getItem("book")); 
      return of (this.dataBooks)
  }
  getBookById(id:string){
    let currentItem = this.dataBooks.find(item => item.isbn === id)
    return currentItem;
  }
  addBookItem(item:Ibook){
    this.dataBooks.push(item);
    this.setLocalStorageBooks()
  }
  updateBook( bookiItem:Ibook){
  this.dataBooks = JSON.parse(localStorage.getItem("book")); 
  const targetIdx = this.dataBooks .map(item => item.isbn).indexOf(bookiItem.isbn);
  this.dataBooks [targetIdx].author = bookiItem.author;
  this.dataBooks [targetIdx].isbn = bookiItem.isbn;
  this.dataBooks [targetIdx].coverPhotoURL = bookiItem.coverPhotoURL;
  this.dataBooks [targetIdx].title = bookiItem.title;
  this.setLocalStorageBooks()
  }

  removeBookItem(bookiItem:Ibook){
  const targetIdx = this.dataBooks.map(item => item.isbn).indexOf(bookiItem.isbn);
  this.dataBooks.splice(targetIdx,1)
  this.setLocalStorageBooks()
  }
}