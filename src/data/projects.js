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
      'HTML5',
      'CSS3',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Docker',
      'Kubernetes',
      'AWS VPC',
      'AWS EC2',
      'AWS EKS',
      'AWS ALB',
      'AWS CloudWatch',
      'Jenkins',
      'SonarQube',
      'Trivy',
      'REST APIs',
      'GitHub',
      'Git'
    ],
    keyAchievements: [
      'Designed and implemented RESTful APIs for 15+ endpoints using Node.js and Express.js',
      'Built full-stack web application with HTML5/CSS3 frontend and Express backend',
      'Implemented MongoDB Atlas database schema with indexed queries',
      'Containerized the entire application using Docker with multi-stage builds',
      'Configured Kubernetes deployments on AWS EKS with auto-scaling (2-10 replicas)',
      'Built automated CI/CD pipeline using Jenkins with GitHub integration',
      'Implemented static code analysis with SonarQube for code quality',
      'Set up security vulnerability scanning using Trivy in CI/CD pipeline',
      'Configured AWS infrastructure (VPC, EC2, EKS, ALB) for production deployment',
      'Implemented CloudWatch monitoring with custom alerts and dashboards',
      'Enabled zero-downtime deployments with rolling updates on Kubernetes'
    ],
    link: 'https://github.com',
    image: '🏕️',
    duration: 'Jan 2025 - Apr 2025 (Capstone Project)',
  },
  {
    id: 2,
    title: 'AgriGuard',
    subtitle: 'AI-Powered Leaf Disease Detection System with Chatbot',
    description: 'An intelligent crop disease detection system using deep learning computer vision to analyze leaf images and classify plant diseases with high accuracy. Integrated with a conversational chatbot providing treatment recommendations and guidance for farmers.',
    longDescription: `AgriGuard is an end-to-end AI solution designed to help farmers identify plant diseases early using computer vision and deep learning. The system analyzes leaf images, classifies disease conditions, assesses severity, and provides treatment recommendations through an intelligent chatbot interface.

Problem Solved:
• Traditional disease detection is time-consuming and expert-dependent
• Farmers in remote areas lack access to agronomic expertise
• Delayed diagnosis leads to significant crop loss

System Architecture:
1. Image ingestion from user
2. Image preprocessing and normalization
3. CNN model performs disease classification
4. Backend API processes predictions with FastAPI
5. Chatbot explains results and suggests treatment

Key Features:
• Real-time leaf disease classification using CNN
• Severity assessment (Healthy, Mild, Severe)
• Transfer learning for improved accuracy
• TensorFlow Lite for edge deployment
• Conversational AI chatbot assistance
• Treatment recommendations engine
• Comprehensive disease information database

Model Performance:
• Achieved ≥90% F1-score on PlantVillage dataset
• High precision to reduce false alarms
• Optimized recall to minimize missed diagnoses
• TensorFlow Lite optimization for mobile deployment

Technical Implementation:
• Convolutional Neural Networks with transfer learning
• Data pipeline using tf.data for efficient processing
• FastAPI backend for real-time inference
• TensorFlow Serving for scalable model serving
• Integrated chatbot for user guidance`,
    technologies: [
      'Python',
      'TensorFlow',
      'TensorFlow Lite',
      'Convolutional Neural Networks (CNN)',
      'Transfer Learning',
      'Computer Vision',
      'Image Processing',
      'tf.data Pipeline',
      'FastAPI',
      'TensorFlow Serving',
      'Deep Learning',
      'Model Evaluation',
      'PlantVillage Dataset',
      'Data Preprocessing',
      'REST APIs',
      'Git',
      'Jupyter Notebook'
    ],
    keyAchievements: [
      'Developed CNN-based plant disease classifier achieving ≥90% F1-score',
      'Implemented transfer learning for improved model accuracy with limited data',
      'Built end-to-end AI pipeline from data preprocessing to model serving',
      'Prepared and preprocessed PlantVillage dataset with image normalization',
      'Trained deep learning models with comprehensive evaluation metrics',
      'Achieved high recall to minimize false negatives (missed disease diagnoses)',
      'Designed TensorFlow Lite optimized model for edge deployment on mobile devices',
      'Integrated FastAPI backend for real-time disease prediction',
      'Developed conversational chatbot for treatment recommendations',
      'Created disease severity classification system (Healthy/Mild/Severe)',
      'Built comprehensive model evaluation framework with precision, recall, F1-score'
    ],
    link: 'https://github.com',
    image: '🌾',
    duration: 'Jan 2026 - Apr 2026 (Current Capstone Project)',
    status: 'In Progress'
  },
  {
    id: 3,
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
      'Android Fragments',
      'Activity Lifecycle',
      'REST API Concepts',
      'SQLite',
      'Git'
    ],
    keyAchievements: [
      'Successfully completed intensive 3-week Android development internship',
      'Built 5+ fully functional screens with smooth navigation and transitions',
      'Implemented user authentication system with email validation and error handling',
      'Mastered Android Fragment lifecycle and state management',
      'Created responsive XML layouts supporting multiple screen sizes (phones & tablets)',
      'Designed bottom navigation menu with 4+ sections',
      'Understood REST API integration concepts for backend communication',
      'Built interactive UI components using Android SDK',
      'Implemented local data storage using SQLite',
      'Learned Android Activity lifecycle and proper state restoration'
    ],
    link: 'https://github.com',
    image: '📱',
    company: 'PraxWare Technologies, Ahmedabad',
    internshipDates: 'June 20, 2022 – July 8, 2022',
  }
];
