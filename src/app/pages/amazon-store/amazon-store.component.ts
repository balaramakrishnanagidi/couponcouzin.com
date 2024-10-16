import { Component } from '@angular/core';

@Component({
  selector: 'app-amazon-store',
  templateUrl: './amazon-store.component.html',
  styleUrls: ['./amazon-store.component.css']
})
export class AmazonStoreComponent {

  categories = [
    {
      id: 1,
      image: '/assets/store_category/smart_tvs.webp',
      name: 'Smart TVs',
      description: '300+ Deals',
      link: 'https://amzn.to/47HVFJb'
    },
    {
      id: 2,
      image: '/assets/store_category/air_conditioners.webp',
      name: 'Air Conditioners',
      description: 'Starting Rs.20K',
      link: 'https://amzn.to/4dtwzyV'
    },
    {
      id: 3,
      image: '/assets/store_category/laptops.webp',
      name: 'Laptops',
      description: 'Starting ₹18,990',
      link: 'https://amzn.to/4gCC1Ct'
    },
    {
      id: 4,
      image: '/assets/store_category/refrigirators.webp',
      name: 'Refrigirators',
      description: 'Starting ₹6,790',
      link: 'https://amzn.to/4eiwcbH'
    },
    {
      id: 5,
      image: '/assets/store_category/furniture.webp',
      name: 'Furniture',
      description: 'Price Crash Deals',
      link: 'https://amzn.to/3XWYMtw'
    },
    {
      id: 6,
      image: '/assets/store_category/washing_machines.webp',
      name: 'Washing Machines',
      description: 'Starting ₹7,499',
      link: 'https://amzn.to/3zq5xLd'
    },
    {
      id: 7,
      image: '/assets/store_category/kitchen&home_appliances.webp',
      name: 'Kitchen & Home Appliances',
      description: '400+ Deals',
      link: 'https://amzn.to/4eIwglb'
    },
    {
      id: 8,
      image: '/assets/store_category/microwave.webp',
      name: 'Microwave',
      description: 'Monsoon Sale',
      link: 'https://amzn.to/3MZp0Wb'
    },
    {
      id: 9,
      image: '/assets/store_category/fashion.webp',
      name: 'Fashion',
      description: 'Deals on 35000+ Styles',
      link: 'https://amzn.to/4gGAfQQ'
    },
    {
      id: 10,
      image: '/assets/store_category/bluetooth_headsets.webp',
      name: 'Bluetooth Headsets',
      description: '500+ Deals',
      link: 'https://amzn.to/3Bn2jZt'
    },
    {
      id: 11,
      image: '/assets/store_category/smart_watches.webp',
      name: 'Smart Watches',
      description: '300+ Deals',
      link: 'https://amzn.to/3N4PJAF'
    },
    {
      id: 12,
      image: '/assets/store_category/alexa_kindle&fire_tv.webp',
      name: 'Alexa, kindle & Fire TV',
      description: 'Instant 10% discount',
      link: 'https://amzn.to/4eesCzs'
    },
    {
      id: 13,
      image: '/assets/store_category/smart_home_living.webp',
      name: 'Smart Home Living',
      description: '200+ Deals',
      link: 'https://amzn.to/3YasI5P'
    },
    {
      id: 14,
      image: '/assets/store_category/cameras.webp',
      name: 'Cameras',
      description: '1500 Instant Discount',
      link: 'https://amzn.to/3XOV9ou'
    },
    {
      id: 15,
      image: '/assets/store_category/air_purifier.webp',
      name: 'Air Purifiers',
      description: '100+ Deals',
      link: 'https://amzn.to/4eIwDfz'
    },
    {
      id: 16,
      image: '/assets/store_category/geyser.webp',
      name: 'Geyser',
      description: '300+ Deals',
      link: 'https://amzn.to/3XKtOU2'
    },
    {
      id: 17,
      image: '/assets/store_category/home_audio.webp',
      name: 'Home Audio',
      description: '300+ Deals',
      link: 'https://amzn.to/3zBTrPa'
    },
    {
      id: 18,
      image: '/assets/store_category/musical_instruments.webp',
      name: 'Musical Instruments',
      description: '400+ Deals',
      link: 'https://amzn.to/3TK0sUI'
    },
    {
      id: 19,
      image: '/assets/store_category/sports_shoes.webp',
      name: 'Sports Shoes',
      description: 'Mega Fashion Weekend',
      link: 'https://amzn.to/3ZHDwcK'
    },
    {
      id: 20,
      image: '/assets/store_category/beauty&grooming.webp',
      name: 'Beauty & Grooming',
      description: '10% Instant Offer',
      link: 'https://amzn.to/3ZF9Gp2'
    },
    {
      id: 21,
      image: '/assets/store_category/analog_watch.webp',
      name: 'Analog Watches',
      description: '500+ Deals',
      link: 'https://amzn.to/4diH0Wh'
    },
    {
      id: 22,
      image: '/assets/store_category/grooming&wellness.webp',
      name: 'Grooming & Wellness',
      description: '500+ Deals',
      link: 'https://amzn.to/4dvOWne'
    },
    {
      id: 23,
      image: '/assets/store_category/chimney.webp',
      name: 'Chimney',
      description: 'Starting ₹5,299',
      link: 'https://amzn.to/4dmZxk4'
    },
    {
      id: 24,
      image: '/assets/store_category/home&household.webp',
      name: 'Home & Household',
      description: '53+ New Launches',
      link: 'https://amzn.to/4ewy2G0'
    },
    {
      id: 25,
      image: '/assets/store_category/monitors.webp',
      name: 'Monitors',
      description: '200+ Deals',
      link: 'https://amzn.to/3Bem59h'
    },
    {
      id: 26,
      image: '/assets/store_category/mobiles.webp',
      name: 'Mobiles',
      description: '200+ Deals',
      link: 'https://amzn.to/47HEg3m'
    },
    {
      id: 27,
      image: '/assets/store_category/books.webp',
      name: 'Books',
      description: '350+ Deals',
      link: 'https://amzn.to/3BiFx4R'
    },
    {
      id: 28,
      image: '/assets/store_category/groceries.webp',
      name: 'Grocery, Gourmet & Pantry',
      description: '200+ Deals',
      link: 'https://amzn.to/3XL7ud4'
    },
    {
      id: 29,
      image: '/assets/store_category/tablets.webp',
      name: 'Tablets',
      description: '₹1500 instant discount',
      link: 'https://amzn.to/3XF9rYt'
    },
    {
      id: 30,
      image: '/assets/store_category/backpacks&luggage.webp',
      name: 'Backpacks & Luggage',
      description: '10% instant discount',
      link: 'https://amzn.to/3XKkFuM'
    },
    {
      id: 31,
      image: '/assets/store_category/home_decor.webp',
      name: 'Home & Decor',
      description: '350+ Deals',
      link: 'https://amzn.to/47ZvPkl'
    },
    {
      id: 32,
      image: '/assets/store_category/sports_shoes.webp',
      name: 'Sports & Outdoor Sale',
      description: '350+ Deals',
      link: 'https://amzn.to/3ZBBB9x'
    },
    {
      id: 33,
      image: '/assets/store_category/headphones_and_speakers.webp',
      name: 'Headphones & Speakers',
      description: '200+ Deals',
      link: 'https://amzn.to/4eXSIa7'
    },
    {
      id: 34,
      image: '/assets/store_category/stationary_essentials.webp',
      name: 'Stationary Essentials',
      description: '800+ Deals',
      link: 'https://amzn.to/4eHdNoL'
    },
    {
      id: 35,
      image: '/assets/store_category/handbags.webp',
      name: 'Handbags',
      description: '10% instant off',
      link: 'https://amzn.to/3zAmFOc'
    },
    {
      id: 36,
      image: '/assets/store_category/printers.webp',
      name: 'Printers',
      description: '120+ Deals',
      link: 'https://amzn.to/47LJECQ'
    },
    {
      id: 37,
      image: '/assets/store_category/toys_and_games.webp',
      name: 'Toys & Games',
      description: '350+ Deals',
      link: 'https://amzn.to/3zDmd1N'
    },
    {
      id: 38,
      image: '/assets/store_category/sanitation.webp',
      name: 'Sanitation',
      description: '225+ Deals',
      link: 'https://amzn.to/3zymuDc'
    },
    {
      id: 39,
      image: '/assets/store_category/health_and_personalcare.webp',
      name: 'Health & Personal Care',
      description: '200+ Deals',
      link: 'https://amzn.to/3zBU636'
    },
    {
      id: 40,
      image: '/assets/store_category/dietry_suppliments.webp',
      name: 'Dietary Suppliments',
      description: '200+ Deals',
      link: 'https://amzn.to/4eB0YfM'
    },
  ];

}
