import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-pagination",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./pagination.component.html",
})
export class PaginationComponent {
    @Input() perPage: number = 10;
    @Input() totalItems: number = 0;
    @Input() currentPage: number = 1;
    @Output() pageChanged: EventEmitter<number>

    constructor() {
        this.pageChanged= new EventEmitter<number>();
    }

    get totalPages(): number {
        return Math.ceil(this.totalItems / this.perPage);
    }

    onPageChange(page: number) {
        if (page >= 1 && page <= this.totalPages) {
            this.pageChanged.emit(page);
        }
    }

    counter() {
        return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
}