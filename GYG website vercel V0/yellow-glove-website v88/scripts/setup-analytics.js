// Google Analytics 4 Setup Script
// Run this to set up tracking for Yellow Glove Cleaning website

console.log("Setting up Google Analytics 4 for Yellow Glove Cleaning...")

// Instructions for setting up GA4:
console.log(`
1. Go to https://analytics.google.com/
2. Create a new GA4 property for "Yellow Glove Cleaning"
3. Add your website URL: https://goyellowglove.com
4. Get your Measurement ID (starts with G-)
5. Replace 'GA_MEASUREMENT_ID' in layout.tsx with your actual ID
6. Set up the following goals:
   - Quote form submissions
   - Phone number clicks
   - Service page visits
   - Area page visits
`)

// Google Search Console setup
console.log(`
Google Search Console Setup:
1. Go to https://search.google.com/search-console
2. Add property: https://goyellowglove.com
3. Verify ownership using HTML tag method
4. Submit sitemap: https://goyellowglove.com/sitemap.xml
5. Monitor for indexing issues
`)

// Call tracking setup recommendations
console.log(`
Call Tracking Setup:
1. Consider using CallRail or similar service
2. Set up dynamic number insertion
3. Track calls from different marketing sources
4. Monitor call quality and conversion rates
`)

console.log("Analytics setup guide complete!")
