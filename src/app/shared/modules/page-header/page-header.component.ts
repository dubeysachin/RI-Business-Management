import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
    @Input() heading: string;
    @Input() parent: string;
    @Input() link: string;
    @Input() icon: string;
}
