import { Component, EventEmitter, Input, OnInit, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() info:any = {};
  @Output() pageChanged = new EventEmitter<number>();
  public currentPage:number = 1;
  private maxPage:number = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('ngOnChanges - info ->', this.info);
 
    if (this.info) {

      if (this.info.next) {
        const url = new URL(this.info.next);
        this.currentPage = Number(url.searchParams.get('page')) - 1; 
      } else {
        this.currentPage = this.info.pages;
      }
      this.maxPage = this.info.pages;
    }
  }

  prevPage() {
    this.currentPage = (this.currentPage > 1) ? (this.currentPage - 1) : this.maxPage;
    this.pageChanged.emit(this.currentPage);
  }

  nextPage() {
    this.currentPage = (this.currentPage === this.maxPage) ? 1 : (this.currentPage + 1);
    this.pageChanged.emit(this.currentPage);
  }

}
