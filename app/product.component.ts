import {Component, Input} from '@angular/core';

@Component({
    selector: 'product',
    template: ` 
        <div class="media">
            <img src="{{ data.imageUrl }}" class="mr-3" alt="...">
            <div class="media-body">
                <h5 class="mt-0">{{ data.productName }}</h5>
                {{ data.releasedDate }}
                <rating 
                    [rating]="data.rating" 
                    [numOfReviews]="data.numOfReviews">
                </rating>
                <br>                                            
                {{ data.description }}                
            </div>
        </div>    
    `,
    styles: [` 
        .media {
            margin-bottom: 20px;
        }                      
    `]    
})
export class ProductComponent {
    @Input() data;    
}
