# 🚂 Crypto 101: Your Journey Through Digital Currency

An interactive educational platform that teaches cryptocurrency and blockchain concepts through a beautiful subway map interface. Users explore 9 stations, each covering essential crypto topics from blockchain foundations to wallet transactions.

## 🌟 Features

- **Interactive Subway Map**: Navigate through 9 educational stations
- **Progressive Learning**: Each station builds on previous concepts
- **Educational Tools**: 
  - Interactive quiz with 10 questions
  - Note-taking system with export functionality
  - Progress tracking with localStorage
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Accessibility**: Full keyboard navigation and ARIA labels
- **Modern UI**: Beautiful animations and smooth transitions

## 🏗️ Station Map

1. **🧱 Blockchain Foundation** - The fundamental technology
2. **💸 Transactions & Smart Contracts** - How money moves
3. **👤 Accounts & NFTs** - Digital identity and assets
4. **🔍 Viewing Transactions** - Blockchain explorers
5. **🏪 Crypto Exchanges** - Trading platforms
6. **📱 Hot Wallets** - Online storage
7. **💰 Crypto Taxes** - Legal obligations
8. **🧊 Cold Wallets** - Secure storage
9. **🔄 Wallet Transactions** - Direct transfers

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/crypto-training-site.git
cd crypto-training-site
```

2. Start a local server:
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have live-server installed)
npx live-server

# Using PHP
php -S localhost:8000
```

3. Open your browser and navigate to `http://localhost:8000`

### File Structure

```
crypto-training-site/
├── index.html              # Main HTML file
├── css/
│   └── main.css            # All styles
├── js/
│   └── main.js             # All JavaScript functionality
├── assets/                 # Images and other assets
├── package.json            # Project configuration
└── README.md              # This file
```

## 🌐 Deployment

### Netlify Deployment (Recommended)

1. **Import from Git**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Deploy settings:
     - Build command: Leave empty (static site)
     - Publish directory: Leave empty (root)

2. **Manual Deploy**:
   - Zip the entire project folder
   - Go to Netlify and drag & drop the zip file

### Other Deployment Options

- **GitHub Pages**: Push to GitHub and enable Pages in repository settings
- **Vercel**: Connect GitHub repository for automatic deployments
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Any Static Hosting**: Upload files to any web server

## 🛠️ Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Google Fonts (Roboto)
- **Storage**: LocalStorage for progress and notes
- **No Framework Dependencies**: Vanilla JavaScript for maximum compatibility

## 📱 Features in Detail

### Learning Progress
- Tracks visited stations with visual indicators
- Saves progress in browser localStorage
- Shows completion percentage

### Interactive Quiz
- 10 randomized cryptocurrency questions
- Immediate feedback with explanations
- Progress tracking through quiz

### Note-Taking System
- Add notes while learning
- Associate notes with specific stations
- Export notes as text file
- Persistent storage across sessions

### Accessibility
- Full keyboard navigation (1-9 keys for stations, Escape to close)
- ARIA labels and roles
- Focus indicators
- Screen reader friendly

### Mobile Features
- Touch swipe navigation between stations
- Responsive design for all screen sizes
- Optimized touch targets
- Mobile-first approach

## 🎨 Customization

### Adding New Stations
1. Add station data to `stationData` array in `js/main.js`
2. Add HTML content in `index.html`
3. Update CSS if needed for styling

### Modifying Quiz Questions
Edit the `quizQuestions` array in `js/main.js` with your own questions and answers.

### Styling Changes
All styles are in `css/main.css` - modify colors, animations, and layout as needed.

## 🔧 Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile**: iOS Safari 12+, Chrome Mobile 60+
- **Features Used**: CSS Grid, Flexbox, localStorage, ES6+ JavaScript

## 📄 License

MIT License - feel free to use this project for educational purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-station`)
3. Commit your changes (`git commit -am 'Add new station'`)
4. Push to the branch (`git push origin feature/new-station`)
5. Create a Pull Request

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the browser console for errors
- Ensure JavaScript is enabled

## 🎯 Educational Goals

This platform is designed to:
- Make cryptocurrency concepts accessible to beginners
- Provide hands-on learning through interaction
- Build understanding progressively from fundamentals
- Encourage note-taking and active learning
- Test knowledge through quizzes

Perfect for educators, students, and anyone curious about cryptocurrency! 🎓 