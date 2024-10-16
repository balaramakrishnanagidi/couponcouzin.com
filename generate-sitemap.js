const fs = require('fs');
const axios = require('axios');
const { SitemapStream, streamToPromise } = require('sitemap');
const https = require('https');

// Function to create a slug from the product name
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')  // Replace spaces and special characters with hyphens
    .replace(/(^-|-$)/g, '');     // Remove leading or trailing hyphens
}

// Set base URL directly to the production URL
const baseUrl = 'https://couponcouzin.com';

async function generateSitemap() {
  try {
    const routes = [
      { url: '/', changefreq: 'daily', priority: 0.5 },
      { url: '/allDeals', changefreq: 'daily', priority: 0.5 },
      { url: '/coupons', changefreq: 'daily', priority: 0.5 },
      { url: '/search-results', changefreq: 'daily', priority: 0.5 },
      { url: '/contact-us', changefreq: 'daily', priority: 0.5 },
      { url: '/blogs', changefreq: 'daily', priority: 0.5 },
      { url: '/security-tips', changefreq: 'daily', priority: 0.5 },
      { url: '/privacy-policy', changefreq: 'daily', priority: 0.5 },
      { url: '/terms-and-conditions', changefreq: 'daily', priority: 0.5 },
      { url: '/about-us', changefreq: 'daily', priority: 0.5 },
      { url: '/frequently-asked-questions', changefreq: 'daily', priority: 0.5 },
      { url: '/search', changefreq: 'daily', priority: 0.5 },
      { url: '/store/amazon', changefreq: 'daily', priority: 0.5 },
      { url: '/store/flipkart', changefreq: 'daily', priority: 0.5 },
    ];

    // Create an HTTPS agent that ignores SSL verification
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    // Fetch products from your API
    const response = await axios.get('https://couponcouzin.com:2023/alluserproducts', { httpsAgent: agent });
    const products = response.data.data;

    // Fetch coupons from your API
    const couponsResponse = await axios.get('https://couponcouzin.com:2023/allcoupon', { httpsAgent: agent });
    const coupons = couponsResponse.data.data;
    const uniqueCategories = new Set();
    coupons.forEach(coupon => {
      uniqueCategories.add(coupon.categorys);
    });

    // Generate dynamic routes based on the fetched product data
    products.forEach(product => {
      const productSlug = createSlug(product.Name);
      routes.push({
        url: `/products/${product.maincategory}/product-details/${productSlug}/${product._id}`,
        changefreq: 'daily',
        priority: 0.5
      });
    });

    // Generate dynamic routes based on the fetched coupon data
    uniqueCategories.forEach(category => {
      routes.push({
        url: `/coupons/${category}`,
        changefreq: 'daily',
        priority: 0.5
      });
    });

    // Fetch blog IDs and generate dynamic routes
    const blogResponse = await axios.get('https://couponcouzin.com:2023/blogs', { httpsAgent: agent });
    const blogs = blogResponse.data.data;

    blogs.forEach(blog => {
      const blogSlug = createSlug(blog.title);
      routes.push({
        url: `/blogs/blog-details/${blogSlug}/${blog._id}`,
        changefreq: 'daily',
        priority: 0.5
      });
    });

    // Create a sitemap stream with the correct hostname
    const sitemapStream = new SitemapStream({ hostname: baseUrl });

    // Write routes to the sitemap stream
    routes.forEach(route => sitemapStream.write(route));

    // End the sitemap stream
    sitemapStream.end();

    // Convert the stream to a string
    const sitemapOutput = await streamToPromise(sitemapStream).then(data => data.toString());

    // Write the sitemap to a file
    fs.writeFileSync('./src/assets/sitemap.xml', sitemapOutput);
    console.log('Sitemap generated at /src/assets/sitemap.xml');

  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

// Run the sitemap generation
generateSitemap();
