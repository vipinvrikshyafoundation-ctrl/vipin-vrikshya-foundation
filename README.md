# Vipin Vrikshya Foundation Website

A modern, responsive website for Vipin Vrikshya Foundation - an NGO dedicated to tree plantation and community service.

## 🌳 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Photo Galleries**: Showcase plantation drives and cloth distribution activities
- **Vision & Mission**: Dedicated section highlighting the foundation's goals
- **Membership System**: Two-tier membership with free and premium options
- **Contact Form**: Easy way for visitors to reach out
- **Modern UI**: Clean, green-themed design with smooth animations

## 📁 Project Structure

```
vipin-vrikshya-foundation/
├── index.html              # Main HTML file
├── styles.css              # All styling
├── script.js               # JavaScript functionality
├── images/
│   ├── plantation/         # Plantation drive photos
│   └── cloth-distribution/ # Cloth distribution photos
└── README.md              # This file
```

## 🖼️ Adding Your Photos

### Step 1: Prepare Your Photos
1. Resize photos to reasonable dimensions (recommended: 1200x900px or similar)
2. Name them descriptively (e.g., `plantation_drive_jan_2026.jpg`)

### Step 2: Add Photos to Folders

**For Plantation Drive Photos:**
1. Copy your photos to: `images/plantation/`
2. Update `index.html` line 142-161 (in the Plantation Drive gallery section)
3. Replace placeholder image paths:
   ```html
   <img src="images/plantation/your_photo_name.jpg" alt="Description">
   ```

**For Cloth Distribution Photos:**
1. Copy your photos to: `images/cloth-distribution/`
2. Update `index.html` line 169-188 (in the Cloth Distribution gallery section)
3. Replace placeholder image paths:
   ```html
   <img src="images/cloth-distribution/your_photo_name.jpg" alt="Description">
   ```

### Example:
```html
<!-- Before -->
<div class="gallery-item">
    <img src="images/plantation/placeholder1.jpg" alt="Tree Plantation Drive 1">
</div>

<!-- After -->
<div class="gallery-item">
    <img src="images/plantation/summer_drive_2025.jpg" alt="Summer Plantation Drive 2025">
</div>
```

## 📝 Customizing Content

### Update Contact Information
Edit `index.html` around line 253-261:
```html
<div class="info-item">
    <strong>Email:</strong> your-email@vipinvrikshya.org
</div>
<div class="info-item">
    <strong>Phone:</strong> +91 XXXXX XXXXX
</div>
```

### Update CIN Number
Edit `index.html` around line 283:
```html
<p>CIN: [Your CIN Number]</p>
```

### Update Tree Count
Edit `index.html` line 41 to update the number of trees planted:
```html
<h3>300+</h3>
<p>Trees Planted</p>
```

## 🚀 How to View the Website Locally

1. **Open directly in browser:**
   - Navigate to the `vipin-vrikshya-foundation` folder
   - Double-click `index.html`
   - The website will open in your default browser

2. **Using a local server (recommended):**
   ```bash
   cd vipin-vrikshya-foundation
   python3 -m http.server 8000
   # or
   python -m SimpleHTTPServer 8000
   ```
   Then visit: `http://localhost:8000`

## 🌐 Deploying the Website

### Option 1: Netlify (Recommended - Free & Easy)
1. Sign up at [netlify.com](https://www.netlify.com)
2. Drag and drop the entire `vipin-vrikshya-foundation` folder
3. Your site will be live in seconds!
4. Get a free subdomain or connect your own domain

### Option 2: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Go to Settings > Pages
5. Select branch and save
6. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 3: Vercel (Free)
1. Sign up at [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

### Option 4: Traditional Hosting
1. Purchase hosting and domain from providers like:
   - Hostinger
   - Bluehost
   - GoDaddy
2. Upload files via FTP
3. Point your domain to the hosting

## 📧 Setting Up Form Submissions

Currently, forms log data to the browser console. To receive actual form submissions:

### Option 1: Using Formspree (Free & Easy)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update `script.js` in the `handleSubmit` function:
   ```javascript
   fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       body: formData,
       headers: {
           'Accept': 'application/json'
       }
   })
   ```

### Option 2: Using Google Forms
1. Create a Google Form
2. Get the form action URL
3. Update the form to submit to Google Forms

### Option 3: Backend Integration
If you have a backend server, uncomment the fetch code in `script.js` and update the endpoints.

## 🎨 Customizing Colors

Edit `styles.css` at the top (lines 9-17) to change the color scheme:
```css
:root {
    --primary-green: #2d5016;    /* Main dark green */
    --secondary-green: #3d7021;  /* Secondary green */
    --light-green: #5a9a32;      /* Light green */
    --accent-green: #7cc24e;     /* Accent color */
}
```

## 📱 Mobile Responsive

The website is fully responsive and works great on:
- Desktop computers (1920px+)
- Laptops (1366px - 1920px)
- Tablets (768px - 1366px)
- Mobile phones (320px - 768px)

## 🔧 Technical Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No special software required
- Works offline once loaded

## 📄 License

This website is created for Vipin Vrikshya Foundation. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact your web developer.

## 📋 Checklist Before Going Live

- [ ] Replace all placeholder images with actual photos
- [ ] Update contact email and phone number
- [ ] Add CIN number in footer
- [ ] Update tree count statistics
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Set up form submission backend
- [ ] Add Google Analytics (optional)
- [ ] Test all links
- [ ] Optimize images for web (compress large files)

## 🌟 Future Enhancements

Consider adding:
- Blog section for updates
- Volunteer registration
- Donation integration (Razorpay/PayPal)
- Photo gallery with lightbox
- Member login area
- Event calendar
- Social media integration
- Multilingual support
- Impact counter (live tree count)

---

**Built with ❤️ for a greener future**
