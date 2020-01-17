export class BookModel {
    constructor(public author: string = '',
                public title: string = '',
                public published: string = '' ,
                public coverPhotoURL: string = '',
                public isbn: string = '') {
    }
  }
