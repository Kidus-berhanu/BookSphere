import { Component } from '@angular/core';
import { WishlistService } from '../wishlist-service/wishlist-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  showWishlist = false;
  wishlistItems: any[] = [];

  constructor(private wishlistService: WishlistService) { }

  handleOnClick() {
    this.showWishlist = !this.showWishlist;
    if (this.showWishlist) {

      this.wishlistItems = this.wishlistService.getWishlistItems();
    }
  }
}
