# 🚂 Crypto 101 Training Site - Project Planning

## 🎯 Project Overview
Interactive cryptocurrency education platform using a subway map interface to teach blockchain concepts progressively through 9 stations.

## 🏗️ Architecture

### File Structure
```
crypto-training-site/
├── index.html              # Main educational interface
├── crypto_education_site.html # Alternative/extended content
├── css/main.css            # All styling (959 lines)
├── js/main.js             # All JavaScript functionality  
├── assets/                # Images and media
├── package.json           # Project configuration
└── README.md             # Documentation
```

### Design Patterns
- **Vanilla JavaScript**: No frameworks, maximum compatibility
- **Progressive Enhancement**: Works without JS, enhanced with JS
- **Mobile-First**: Responsive design for all devices
- **Component-Based CSS**: Modular styling approach

## 🎨 Design System

### Visual Style
- **Theme**: Subway/Metro map aesthetic
- **Colors**: 9-station gradient spectrum (blue to purple)
- **Typography**: Roboto font family
- **Layout**: Horizontal timeline with alternating station positions

### Component Architecture
- **Timeline Container**: Central wrapper with overflow handling
- **Timeline Trunk**: Horizontal gradient rail connecting all stations
- **Stations**: Interactive nodes with alternating above/below positioning
- **Content Panels**: Expandable educational content areas
- **Navigation**: Button controls and keyboard shortcuts

## 🔧 Current Technical Constraints

### Layout System
- CSS Grid and Flexbox for responsive layout
- Fixed station positioning using nth-child selectors
- Z-index layering for overlapping elements
- Transform-based centering and positioning

### Responsive Breakpoints
- 1400px: Large desktop adjustments
- 1200px: Standard desktop
- 992px: Tablet landscape  
- 768px: Tablet portrait
- 576px: Mobile

## 🎯 Goals & Objectives

### Educational Goals
- Progressive learning from blockchain basics to advanced concepts
- Interactive engagement through subway map metaphor
- Knowledge retention through quiz system
- Personal note-taking and progress tracking

### Technical Goals
- Fast loading and performance
- Cross-browser compatibility
- Accessibility compliance (ARIA, keyboard nav)
- Smooth animations and transitions
- Mobile-optimized experience

## 🚀 Deployment Strategy
- **Primary**: Netlify for static hosting
- **Alternative**: GitHub Pages, Vercel, Firebase
- **Local Dev**: Python/Node.js HTTP server

## 🔧 Current Known Issues

### Alignment Problems
1. **Station Positioning**: Inconsistent spacing between odd/even stations
2. **Content Panel Overlap**: Panels may overlap with adjacent stations
3. **Connecting Lines**: Station-to-trunk connections need precise alignment
4. **Mobile Responsiveness**: Station layout breaks on smaller screens
5. **Z-index Conflicts**: Content panels may appear behind other elements

### Performance Considerations
- Large CSS file (959 lines) could be modularized
- Multiple media queries for responsive design
- Animation performance on lower-end devices

## 📏 Style Guidelines

### CSS Organization
- Global resets and base styles first
- Component styles grouped logically
- Media queries at the end
- Consistent naming conventions

### Color Scheme
- Station 1 (Foundation): #2d3748 (dark gray)
- Station 2 (Transactions): #4299e1 (blue)  
- Station 3 (Accounts): #9f7aea (purple)
- Station 4 (Viewing): #ed8936 (orange)
- Station 5 (Exchanges): #38a169 (green)
- Station 6 (Hot Wallets): #e53e3e (red)
- Station 7 (Taxes): #d69e2e (yellow)
- Station 8 (Cold Wallets): #319795 (teal)
- Station 9 (Wallet Transactions): #553c9a (dark purple)

## 🔧 Maintenance Guidelines

### Code Standards
- Consistent indentation (4 spaces)
- Descriptive class names
- Comments for complex logic
- Modular CSS organization

### Update Process
1. Test changes on local server
2. Verify responsive behavior
3. Check accessibility compliance
4. Deploy to staging environment
5. Push to production

This planning document serves as the foundation for all development decisions and ensures consistency across the project. 