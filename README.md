# Himanshu Portfolio Website

Modern, responsive portfolio website showcasing full-stack development, cloud architecture, and DevOps expertise.

## Project Highlights

- **YelpCamp** - Cloud-native full-stack application with Kubernetes orchestration, CI/CD pipeline, and AWS infrastructure
- **Android Application** - Mobile app development internship project with comprehensive UI/UX implementation

## Technologies

### Frontend
- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Lucide React (icons)
- React Scroll (smooth scrolling)

### Infrastructure
- Deployed on GitHub Pages (static hosting)
- Vite production build optimization
- Responsive design for all devices

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/Himanshu_Portfolio.git
cd Himanshu_Portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open browser and navigate to http://localhost:5173
```

### Production Build

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview
```

## Deployment

### Deploy to GitHub Pages

```bash
# Update package.json homepage with your repo URL
# Then deploy:
npm run deploy
```

**Note:** Update the homepage URL in `package.json` to match your GitHub repository.

## Project Structure

```
src/
├── components/        # Reusable components (Navbar, HeroSection, etc.)
├── sections/          # Page sections (ProjectsSection, SkillsSection)
├── data/              # Static data (projects.js, skills.js)
├── styles/            # Global CSS with Tailwind
├── App.jsx            # Main app component
└── main.jsx           # React entry point
```

## Customization

### Update Personal Information
- Navbar links
- Hero section intro text
- Social media links in Footer
- Contact information

### Add Resume
Place your resume PDF file at `public/resume.pdf`

### Update Project Links
Edit project links in `src/data/projects.js` to point to your actual repositories

### Modify Colors
Update Tailwind configuration in `tailwind.config.js` to customize the color scheme

## Features

✨ Modern, vibrant design with gradient accents
📱 Fully responsive across all devices
⚡ Fast performance with Vite optimization
🎨 Smooth animations and transitions
📥 Resume download functionality
🔗 Social media integration
📊 Skills categorized by technology area

## License

This project is open source and available under the MIT License.

## Author

Himanshu Patel - Full Stack Developer & Cloud Architect

---

**Live Portfolio:** [https://yourusername.github.io/Himanshu_Portfolio](https://yourusername.github.io/Himanshu_Portfolio)
