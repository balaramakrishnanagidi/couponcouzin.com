import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart-store',
  templateUrl: './flipkart-store.component.html',
  styleUrls: ['./flipkart-store.component.css']
})
export class FlipkartStoreComponent {

  categories = [
    {
      id: 1,
      image: '/assets/store_category/smart_tvs.webp',
      name: 'Smart TVs',
      description: '300+ Deals',
      link: 'https://clnk.in/vmPN'
    },
    {
      id: 2,
      image: '/assets/store_category/air_conditioners.webp',
      name: 'Air Conditioners',
      description: 'Starting Rs.20K',
      link: 'https://clnk.in/vmPQ'
    },
    {
      id: 3,
      image: '/assets/store_category/laptops.webp',
      name: 'Laptops',
      description: 'Starting ₹18,990',
      link: 'https://clnk.in/vmPU'
    },
    {
      id: 4,
      image: '/assets/store_category/refrigirators.webp',
      name: 'Refrigirators',
      description: 'Starting ₹6,790',
      link: 'https://clnk.in/vmPX'
    },
    {
      id: 5,
      image: '/assets/store_category/furniture.webp',
      name: 'Furniture',
      description: 'Price Crash Deals',
      link: 'https://clnk.in/vmP1'
    },
    {
      id: 6,
      image: '/assets/store_category/washing_machines.webp',
      name: 'Washing Machines',
      description: 'Starting ₹7,499',
      link: 'https://clnk.in/vmP2'
    },
    {
      id: 7,
      image: '/assets/store_category/kitchen&home_appliances.webp',
      name: 'Kitchen & Home Appliances',
      description: '400+ Deals',
      link: 'https://clnk.in/vmP5'
    },
    {
      id: 8,
      image: '/assets/store_category/microwave.webp',
      name: 'Microwave',
      description: 'Monsoon Sale',
      link: 'https://clnk.in/vmP6'
    },
    {
      id: 9,
      image: '/assets/store_category/fashion.webp',
      name: 'Fashion',
      description: 'Deals on 35000+ Styles',
      link: 'https://clnk.in/vmQb'
    },
    {
      id: 10,
      image: '/assets/store_category/bluetooth_headsets.webp',
      name: 'Bluetooth Headsets',
      description: '500+ Deals',
      link: 'https://clnk.in/vmQd'
    },
    {
      id: 11,
      image: '/assets/store_category/smart_watches.webp',
      name: 'Smart Watches',
      description: '300+ Deals',
      link: 'https://clnk.in/vmQe'
    },
    {
      id: 13,
      image: '/assets/store_category/smart_home_living.webp',
      name: 'Smart Home Living',
      description: '200+ Deals',
      link: 'https://clnk.in/vmQf'
    },
    {
      id: 14,
      image: '/assets/store_category/cameras.webp',
      name: 'Cameras',
      description: '1500 Instant Discount',
      link: 'https://clnk.in/vmQg'
    },
    {
      id: 15,
      image: '/assets/store_category/air_purifier.webp',
      name: 'Air Purifiers',
      description: '100+ Deals',
      link: 'https://clnk.in/vmQh'
    },
    {
      id: 16,
      image: '/assets/store_category/geyser.webp',
      name: 'Geyser',
      description: '300+ Deals',
      link: 'https://clnk.in/vmQl'
    },
    {
      id: 17,
      image: '/assets/store_category/home_audio.webp',
      name: 'Home Audio',
      description: '300+ Deals',
      link: 'https://clnk.in/vmQm'
    },
    {
      id: 18,
      image: '/assets/store_category/musical_instruments.webp',
      name: 'Musical Instruments',
      description: '400+ Deals',
      link: 'https://clnk.in/vmQo'
    },
    {
      id: 19,
      image: '/assets/store_category/sports_shoes.webp',
      name: 'Sports Shoes',
      description: 'Mega Fashion Weekend',
      link: 'https://clnk.in/vmQp'
    },
    {
      id: 20,
      image: '/assets/store_category/beauty&grooming.webp',
      name: 'Beauty & Grooming',
      description: '10% Instant Offer',
      link: 'https://clnk.in/vmQr'
    },
    {
      id: 21,
      image: '/assets/store_category/analog_watch.webp',
      name: 'Analog Watches',
      description: '500+ Deals',
      link: 'https://clnk.in/vmQt'
    },
    {
      id: 22,
      image: '/assets/store_category/grooming&wellness.webp',
      name: 'Grooming & Wellness',
      description: '500+ Deals',
      link: 'https://clnk.in/vmQu'
    },
    {
      id: 23,
      image: '/assets/store_category/chimney.webp',
      name: 'Chimney',
      description: 'Starting ₹5,299',
      link: 'https://clnk.in/vmQv'
    },
    {
      id: 24,
      image: '/assets/store_category/home&household.webp',
      name: 'Home & Household',
      description: '53+ New Launches',
      link: 'https://clnk.in/vmQx'
    },
    {
      id: 25,
      image: '/assets/store_category/monitors.webp',
      name: 'Monitors',
      description: '200+ Deals',
      link: 'https://clnk.in/vmQA'
    },
    {
      id: 26,
      image: '/assets/store_category/mobiles.webp',
      name: 'Mobiles',
      description: '200+ Deals',
      link: 'https://clnk.in/vmQB'
    },
    {
      id: 27,
      image: '/assets/store_category/books.webp',
      name: 'Books',
      description: '350+ Deals',
      link: 'https://clnk.in/vmQD'
    },
    {
      id: 28,
      image: '/assets/store_category/groceries.webp',
      name: 'Grocery, Gourmet & Pantry',
      description: '200+ Deals',
      link: 'https://clnk.in/vmQE'
    },
    {
      id: 29,
      image: '/assets/store_category/tablets.webp',
      name: 'Tablets',
      description: '₹1500 instant discount',
      link: 'https://clnk.in/vmQF'
    },
    {
      id: 30,
      image: '/assets/store_category/backpacks&luggage.webp',
      name: 'Backpacks & Luggage',
      description: '10% instant discount',
      link: 'https://clnk.in/vmQH'
    },
    {
      id: 31,
      image: '/assets/store_category/home_decor.webp',
      name: 'Home & Decor',
      description: '350+ Deals',
      link: 'https://clnk.in/vmQI'
    },
    {
      id: 32,
      image: '/assets/store_category/sports_shoes.webp',
      name: 'Sports & Outdoor Sale',
      description: '350+ Deals',
      link: 'https://clnk.in/vmQJ'
    },
    {
      id: 33,
      image: '/assets/store_category/headphones_and_speakers.webp',
      name: 'Headphones & Speakers',
      description: '200+ Deals',
      link: 'https://clnk.in/vmQK'
    },
    {
      id: 34,
      image: '/assets/store_category/stationary_essentials.webp',
      name: 'Stationary Essentials',
      description: '800+ Deals',
      link: 'https://clnk.in/vmQL'
    },
    {
      id: 35,
      image: '/assets/store_category/handbags.webp',
      name: 'Handbags',
      description: '10% instant off',
      link: 'https://clnk.in/vmQM'
    },
    {
      id: 36,
      image: '/assets/store_category/printers.webp',
      name: 'Printers',
      description: '120+ Deals',
      link: 'https://clnk.in/vmQO'
    },
    {
      id: 37,
      image: '/assets/store_category/toys_and_games.webp',
      name: 'Toys & Games',
      description: '350+ Deals',
      link: 'https://clnk.in/vmQP'
    },
    {
      id: 38,
      image: '/assets/store_category/sanitation.webp',
      name: 'Sanitation',
      description: '225+ Deals',
      link: 'https://clnk.in/vmQS'
    },
    {
      id: 39,
      image: '/assets/store_category/health_and_personalcare.webp',
      name: 'Health & Personal Care',
      description: '200+ Deals',
      link: 'https://clnk.in/vmQ2'
    },
    {
      id: 40,
      image: '/assets/store_category/dietry_suppliments.webp',
      name: 'Dietary Suppliments',
      description: '200+ Deals',
      link: 'https://clnk.in/vmQ3'
    },
  ];
  
}
