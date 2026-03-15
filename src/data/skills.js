export const skillsData = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  backend: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  mobile: ['Java', 'Android Studio', 'Android SDK', 'Fragments'],
  devops: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD Pipelines'],
  cloud: ['AWS VPC', 'AWS EC2', 'AWS EKS', 'AWS ALB', 'AWS CloudWatch'],
  tools: ['Git', 'GitHub', 'MongoDB Atlas', 'SonarQube', 'Trivy', 'Linux'],
};

export const skillCategories = [
  {
    category: 'Frontend Development',
    skills: skillsData.frontend,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Backend & Database',
    skills: skillsData.backend,
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Mobile Development',
    skills: skillsData.mobile,
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'DevOps & CI/CD',
    skills: skillsData.devops,
    color: 'from-orange-500 to-red-500'
  },
  {
    category: 'Cloud & Infrastructure',
    skills: skillsData.cloud,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    category: 'Tools & Platforms',
    skills: skillsData.tools,
    color: 'from-yellow-500 to-orange-500'
  }
];
