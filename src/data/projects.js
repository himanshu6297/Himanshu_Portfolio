export const projects = [
  {
    id: 1,
    title: 'YelpCamp',
    subtitle: 'Cloud Native Full-Stack Web Application',
    description: 'A comprehensive full-stack web application for discovering, reviewing, and managing campground locations. Built with a 3-tier cloud architecture featuring containerized microservices on AWS EKS, MongoDB Atlas for persistent storage, and an automated CI/CD pipeline using Jenkins.',
    longDescription: `YelpCamp is a production-grade, cloud-native full-stack web application designed to simulate real-world deployment practices. The platform allows users to authenticate, discover campgrounds, upload images, view maps, and leave reviews.

Key Features:
• User authentication and account management
• Campground listing and review system  
• Image upload functionality
• Map integration for campground locations
• Secure cloud deployment with automated backups
• CI/CD pipeline for zero-downtime deployment
• Containerized microservices architecture
• Auto-scaling capabilities on Kubernetes

Architecture highlights:
• Frontend: HTML5, CSS3, vanilla JavaScript
• Backend: Node.js with Express.js REST APIs
• Database: MongoDB Atlas with indexed queries
• Infrastructure: AWS VPC, EC2, EKS, ALB, CloudWatch
• Container Orchestration: Kubernetes with auto-scaling policies
• Monitoring: AWS CloudWatch for metrics and logs
• Security: Trivy for container vulnerability scanning

The CI/CD pipeline automates code quality checks, security scans, Docker image builds, and production deployments, enabling reliable feature releases every week.`,
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'AWS (VPC, EC2, EKS, ALB)',
      'Jenkins',
      'SonarQube',
      'Trivy',
      'AWS CloudWatch',
      'HTML5',
      'CSS3',
      'JavaScript'
    ],
    keyAchievements: [
      'Designed and implemented RESTful APIs for 15+ endpoints',
      'Containerized application reducing deployment time by 70%',
      'Configured Kubernetes clusters with auto-scaling (2-10 replicas)',
      'Built automated CI/CD pipeline reducing manual deployments by 100%',
      'Implemented security scanning reducing vulnerabilities by 85%',
      'Set up CloudWatch monitoring with custom alerts'
    ],
    link: 'https://github.com', // Replace with actual link
    image: '🏕️',
    duration: 'Multi-month project',
  },
  {
    id: 2,
    title: 'Android Mobile Application',
    subtitle: 'Internship Project - PraxWare Technologies',
    description: 'Developed a full-featured Android application during an internship, gaining hands-on experience with mobile app architecture, API integration, and native UI development using Android Studio.',
    longDescription: `During a 3-week internship at PraxWare Technologies, I designed and developed a feature-rich Android application from scratch, implementing user authentication, navigation patterns, and interactive UI components.

Project Scope:
• Built complete user authentication system (login & registration)
• Implemented navigation patterns using fragments and bottom navigation
• Designed responsive UI layouts using XML
• Integrated REST API concepts for backend communication
• Created interactive information pages and dashboards

Screens Implemented:
• Login Page - Email/password validation with error handling
• Registration Page - User data validation and storage
• Home Dashboard - User profile and activity overview
• Menu Navigation - Bottom navigation with 4+ sections
• Information Pages - Dynamic content display with navigation

Technical Implementation:
• Android Activity lifecycle management
• Fragment-based navigation patterns
• XML layout design for responsive UI
• Android View components and event listeners
• Shared Preferences for local data storage
• AsyncTask/Coroutines for background operations
• RecyclerView for efficient list rendering

Skills Developed:
• Android application architecture and best practices
• UI/UX design principles for mobile platforms
• Mobile navigation patterns
• Android SDK capabilities and limitations
• API integration concepts
• Mobile testing and debugging techniques`,
    technologies: [
      'Java',
      'Android Studio',
      'Android SDK',
      'XML Layout Design',
      'Fragments',
      'REST APIs',
      'SQLite',
      'Gradle'
    ],
    keyAchievements: [
      'Successfully completed 3-week intensive internship',
      'Built 5+ fully functional screens with smooth navigation',
      'Implemented user authentication with data validation',
      'Mastered Android Fragment lifecycle and state management',
      'Created responsive layouts supporting multiple screen sizes',
      'Understood REST API integration concepts'
    ],
    link: 'https://github.com', // Replace with actual link
    image: '📱',
    company: 'PraxWare Technologies, Ahmedabad',
    internshipDates: 'June 20, 2022 – July 8, 2022',
  }
];
