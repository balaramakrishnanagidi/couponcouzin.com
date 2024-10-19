import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumbs } from 'src/app/shared/models/breadcrumb.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  allProducts: any[] = [];
  relatedProducts: any[] = [];
  product: any;
  profile = true;
  breadcrumbs: Breadcrumbs[] = [];
  productCost: any = "";
  mrp: any = "";
  discountFlag: boolean = true;
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.getProductById(productId);
    }
  }

  getAllProducts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.allProducts().subscribe(
        (data) => {
          this.allProducts = data.data;
          resolve(this.allProducts);
        },
        (err) => {
          console.error("Error fetching products", err);
          reject(err);
        }
      );
    });
  }

  async getProductById(id: string) {
    try {
      // Wait for all products to be loaded
      await this.getAllProducts();

      // Find the product by id
      this.product = this.allProducts.find((prod: any) => prod._id === id);

      if (this.product) {
        // console.log("Product found:", this.product);

        this.productsByCategory();
        this.setBreadcrumbs();
        //format the cost with comas
        this.productCost = Number(this.product.price).toLocaleString('en-In', {
          maximumFractionDigits: 2,
          style: 'currency',
          currency: 'INR'
        });

        //calculate MRP from discount and price
        if (!isNaN(this.product.discount)) {
          this.mrp = Math.floor(this.product.price / (1 - (this.product.discount / 100)));
        } else {
          this.product.discount = "Latest Offer!"
          this.discountFlag = false;
        }

      } else {
        console.log("Product not found!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  productsByCategory() {
    try {
      // Filter products by the same maincategory and reverse the array for the latest products
      this.relatedProducts = this.allProducts.filter((relat: any) => relat.maincategory === this.product.maincategory).reverse();

      // Get only the top 3 products if more than 3 are available
      if (this.relatedProducts.length > 4) {
        this.relatedProducts = this.relatedProducts.slice(1, 4);
      }

      // If no related products found by category, find by company
      if (this.relatedProducts.length < 1) {
        this.relatedProducts = this.allProducts.filter((relat: any) => relat.company === this.product.company).reverse();

        // Again, limit to top 3 products if more than 3 are available
        if (this.relatedProducts.length > 4) {
          this.relatedProducts = this.relatedProducts.slice(1, 4);
        }
      }

      // console.log("Top 3 related products:", this.relatedProducts);

    } catch (error) {
      console.error("Error fetching related products:", error);
    }
  }

  createSlug(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')  // Replace spaces and special characters with hyphens
      .replace(/(^-|-$)/g, '');     // Remove leading or trailing hyphens
  }

  getThisProduct(card: any) {
    // Create a slug from the product name
    const slug = this.createSlug(card.Name);
    const productUrl = `/products/${card.maincategory}/product-details/${slug}/${card._id}`;

    window.open(productUrl, '_blank');
  }

  setBreadcrumbs() {
    this.breadcrumbs = [
      { label: 'Home', url: '/' },
      { label: 'Products', url: '/allDeals' },
      { label: this.product ? this.product.Name : 'Product-details', url: '' }
    ]
  }

}
