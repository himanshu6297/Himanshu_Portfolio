export const skillsData = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'XML Layout Design'],
  backend: ['Node.js', 'Express.js', 'MongoDB', 'MongoDB Atlas', 'NoSQL', 'REST APIs', 'REST API Design'],
  mobile: ['Java', 'Android Studio', 'Android SDK', 'Android Fragments', 'Activity Lifecycle', 'SQLite'],
  devops: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD Pipelines', 'SonarQube', 'Trivy'],
  cloud: ['AWS VPC', 'AWS EC2', 'AWS EKS', 'AWS ALB', 'AWS CloudWatch', 'Cloud Architecture'],
  tools: ['Git', 'GitHub', 'Android Studio', 'Linux'],
  aiml: ['TensorFlow', 'Keras', 'CNN (Image Classification)', 'Transfer Learning (MobileNetV2)', 'Image Preprocessing & Augmentation', 'Model Fine-Tuning', 'Model Evaluation (Precision, Recall, F1)', 'Confusion Matrix', 'Computer Vision'],
  llm: ['LLM Integration (OpenAI / GPT-based)', 'Prompt Engineering', 'Context-Aware Chatbot Design', 'AI Response Structuring', 'Decision Support Systems', 'Confidence-Based Logic', 'Explainable AI Responses'],
  aiarch: ['End-to-End AI Systems', 'Model → API → Frontend Integration', 'Real-Time Inference Pipelines', 'FastAPI Model Serving', 'JSON Response Design', 'System Scalability Design']
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
  },
  {
    category: 'AI & Machine Learning',
    skills: skillsData.aiml,
    color: 'from-violet-500 to-purple-500'
  },
  {
    category: 'LLM & Chatbot Systems',
    skills: skillsData.llm,
    color: 'from-rose-500 to-pink-500'
  },
  {
    category: 'AI System Architecture',
    skills: skillsData.aiarch,
    color: 'from-cyan-500 to-blue-500'
  }
];
