<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Portfolio Website Setup & Deployment Checklist

✅ Project scaffolded with Vite + React
✅ Tailwind CSS configured for modern styling
✅ Project data structured in src/data/
✅ All components created (Navbar, Hero, ProjectCard, Footer, etc.)
✅ Sections implemented (Projects, Skills)
✅ Responsive design implemented
✅ GitHub Pages deployment configured

## Next Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Update Personal Information
- [ ] Update social media links in `src/components/Footer.jsx`
- [ ] Update email address in `src/components/Navbar.jsx` and `src/components/HeroSection.jsx`
- [ ] Update GitHub and LinkedIn URLs throughout components

### 3. Add Resume
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Test resume download in navbar and hero sections

### 4. Configure GitHub Pages
- [ ] Update `homepage` field in package.json with your GitHub repository URL
- [ ] Format: `https://yourusername.github.io/Himanshu_Portfolio`

### 5. Test Development Build
```bash
npm run dev
# Navigate to http://localhost:5173
# Test all sections, navigation, and responsive design
```

### 6. Create Production Build
```bash
npm run build
```

### 7. Deploy to GitHub Pages
```bash
npm run deploy
```

### 8. Verify Live Site
- [ ] Visit your GitHub Pages URL in browser
- [ ] Test all links and navigation
- [ ] Verify resume download works
- [ ] Test on mobile devices
- [ ] Check all social media links

## File Structure Context
- `src/components/` - Reusable UI components
- `src/sections/` - Full page sections
- `src/data/` - Project and skills data
- `src/styles/` - Global Tailwind CSS
- `public/` - Static assets (resume.pdf goes here)

## Customization Tips
- Colors: Edit `tailwind.config.js`
- Project content: Edit `src/data/projects.js`
- Skills list: Edit `src/data/skills.js`
- Text content: Edit individual component files

## Troubleshooting
- If GitHub Pages URL shows 404: Check `base` path in `vite.config.js` matches your repo name
- If styles don't load: Clear browser cache and rebuild with `npm run build`
- If resume doesn't download: Verify file exists at `public/resume.pdf`
