export const personalInfo = {
  name: 'Choo Yi Ken',
  title: 'AI/ML Engineer & Data Enthusiast',
  tagline: 'Building intelligent systems at the intersection of data, ML, and software.',
  email: 'e.yiken@gmail.com',
  phone: '+65 88646563',
  location: 'Singapore',
  github: 'https://github.com/yiken0724',
  linkedin: 'https://www.linkedin.com/in/yikenchoo/',
  resume: '/resume.pdf',  // place your PDF at /public/resume.pdf
  bio: `Final-year student at Nanyang Technological University double-majoring in Mathematics and Computer Science with 
  a Specialisation in Data Science. ASEAN Undergraduate Scholar and Dean's List recipient with a passion for ML research,
  computer vision, and building end-to-end data-driven solutions.`,
};

export const skills = {
  languages: ['Python', 'R', 'SQL', 'DAX', 'Java', 'C', 'C++', 'HTML', 'CSS', 'JavaScript', 'LaTeX', 'MATLAB'],
  ml: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV', 'diffusers', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy', 'Pillow', 'dplyr', 'ggplot2', 'forecast'],
  engineering: ['Git', 'Linux (CLI)', 'Conda', 'PyTorch CUDA', 'SSH', 'REST APIs', 'Selenium', 'Automated ML Pipelines'],
  bi: ['Power BI', 'Tableau', 'Microsoft Excel', 'Power Pivot', 'Power Query', 'Power Automate', 'Power BI Dataflow'],
  cloud: ['Microsoft Azure', 'Microsoft Fabric', 'Google Cloud Platform', 'Google BigQuery', 'SharePoint', 'OneLake'],
  databases: ['PostgreSQL', 'MySQL'],
  tools: ['VS Code', 'RStudio', 'Jupyter Lab', 'Google Colab', 'GitHub Desktop', 'Postman', 'Overleaf'],
};

export const projects = [
  {
    id: 1,
    title: 'VIRTUALSWAP — Customized Image Synthesis using Diffusion Models',
    description:
      'Final Year Project. Built an end-to-end diffusion-based image synthesis pipeline for personalized clothing transfer using Multi IP-Adapter. Integrated Grounded-SAM for clothing segmentation, Zero123++ for multi-view synthesis, and IP-Adapter for image-conditioned diffusion.',
    category: 'DS/ML',
    tags: ['PyTorch', 'diffusers', 'Grounded-SAM', 'Zero123++', 'IP-Adapter', 'Stable Diffusion', 't-SNE'],
    github: null,
    demo: null,
    report: null,
    featured: true,
    year: 2026,
    metrics: ['CLIP +1.44%', 'LPIPS +6.78%', 'ArcFace Similarity +82.4%'],
  },
  {
    id: 2,
    title: 'Image Superpixels Classification using Graph Neural Networks',
    description:
      'Implemented GNN architectures (GCN, GAT, GIN) on MNIST and CIFAR-10 datasets for graph-based image classification. Enhanced benchmark methodology with stratified 5-fold cross-validation and early stopping, reducing training time by 40–60% while maintaining robust performance estimation.',
    category: 'DS/ML',
    tags: ['PyTorch', 'GCN', 'GAT', 'GIN', 'MNIST', 'CIFAR-10', 'scikit-learn'],
    github: 'https://github.com/yiken0724/Comparative-Analysis-on-GNN-Algorithms',
    demo: null,
    report: '/projects/image-superpixels-classification-yiken.pdf',
    featured: true,
    year: 2025,
    metrics: ['70% test accuracy', '40–60% training time reduction', '5-fold CV'],
  },
  {
    id: 3,
    title: 'Customer Clustering using Unsupervised Learning',
    description:
      'Applied K-Means, DBSCAN, and Gaussian Mixture Models with PCA dimensionality reduction on a Supply Chain dataset. Integrated Google Geocoding API for Haversine distance calculation in nearest-neighbour search and evaluated clusters using Silhouette Score, DB-Index, CH-Index, and Dunn Index.',
    category: 'DS/ML',
    tags: ['Python', 'scikit-learn', 'PCA', 'K-Means', 'DBSCAN', 'GMM', 'Google Geocoding API'],
    github: 'https://github.com/yiken0724/Supply-Chain-Data-Clustering-Analysis',
    demo: null,
    report: '/projects/customer-clustering-yiken.pdf',
    featured: true,
    year: 2025,
    metrics: ['3 algorithms benchmarked', 'Silhouette / DB / CH / Dunn evaluated'],
  },
  {
    id: 4,
    title: 'Time Series Analysis Forecasting using ARIMA Models',
    description:
      'Performed time series analysis on cattle body temperature data to identify health patterns and forecast future trends. Implemented Box-Cox transformation with Guerrero\'s method and first-order differencing to achieve stationarity, then selected the best ARIMA model via AIC from ACF/PACF analysis.',
    category: 'Data',
    tags: ['R', 'ARIMA', 'Box-Cox', 'Ljung-Box', 'ACF/PACF', 'forecast'],
    github: 'https://github.com/yiken0724/Time-Series-Analysis-on-Livestock-Data',
    demo: null,
    report: '/projects/time-series-analysis-yiken.pdf',
    featured: false,
    year: 2026,
    metrics: ['3 ARIMA candidates compared', 'Ljung-Box validated', 'AIC model selection'],
  },
  {
    id: 6,
    title: 'Medical QA Chatbot',
    description:
      'Fine-tuned Google Flan-T5-Base with LoRA on doctor-patient dialogues, then augmented with retrieval-grounded responses from trusted medical sources. The hybrid LoRA + RAG approach achieved the best performance, addressing the safety risk of patients relying on ungrounded LLM responses.',
    category: 'DS/ML',
    tags: ['Python', 'Flan-T5', 'LoRA', 'RAG', 'HuggingFace', 'ROUGE', 'BERTScore'],
    github: 'https://github.com/yiken0724/Medical-QA-Chatbot',
    demo: null,
    report: '/projects/medical-qa-chatbot-yiken.pdf',
    featured: true,
    year: 2025,
    metrics: ['ROUGE-L 0.1704', 'BERTScore 0.8495', 'LoRA + RAG hybrid'],
  },
  {
    id: 7,
    title: 'Pattern Mining for Disease Analysis and Diagnosis',
    description:
      'Applied frequent pattern mining and association rule learning to disease datasets to uncover diagnostic patterns. Explored Apriori and FP-Growth algorithms with support/confidence thresholds to identify clinically meaningful item sets.',
    category: 'DS/ML',
    tags: ['Python', 'Jupyter', 'Apriori', 'FP-Growth', 'Pattern Mining', 'scikit-learn'],
    github: 'https://github.com/yiken0724/Pattern-Mining-for-Disease-Analysis-and-Diagnosis',
    demo: null,
    report: '/projects/pattern-mining-yiken.pdf',
    featured: false,
    year: 2025,
    metrics: [],
  },
  {
    id: 8,
    title: 'QEP Analyser',
    description:
      'A Streamlit-based visualisation tool for PostgreSQL Query Execution Plans. Parses and displays execution steps, cost estimates, and resource usage to help developers understand and optimise slow SQL queries. Deployable via Docker or locally.',
    category: 'Software',
    tags: ['Python', 'Streamlit', 'PostgreSQL', 'Docker', 'SQL'],
    report: '/projects/qep-analyser-yiken.pdf',
    github: 'https://github.com/yiken0724/QEP-Analyser',
    demo: null,
    featured: false,
    year: 2024,
    metrics: [],
  },
  {
    id: 9,
    title: 'Storage System for NBA Game Data',
    description:
      'Implemented a disk-based storage system and B+ tree index from scratch in Java to efficiently store and retrieve NBA game records. Includes sequential scan and B+ tree search with performance benchmarking.',
    category: 'Software',
    tags: ['Java', 'B+ Tree', 'Database', 'Data Structures'],
    github: 'https://github.com/yiken0724/Storage-System-for-NBA-Game-Data',
    demo: null,
    report: '/projects/storage-system-yiken.pdf',
    featured: false,
    year: 2024,
    metrics: [],
  },
  {
    id: 10,
    title: 'Image Segmentation and Stereo Vision using MATLAB',
    description:
      'Implemented image segmentation and stereo vision algorithms in MATLAB for the Computer Vision module. Covers disparity map computation, depth estimation from stereo pairs, and region-based segmentation.',
    category: 'DS/ML',
    tags: ['MATLAB', 'Computer Vision', 'Image Segmentation', 'Stereo Vision', 'Depth Estimation'],
    github: 'https://github.com/yiken0724/Image-Segmentation-and-Stereo-Vision-using-MATLAB',
    demo: null,
    report: '/projects/image-segmentation-yiken.pdf',
    featured: false,
    year: 2025,
    metrics: [],
  },
  {
    id: 11,
    title: 'Image Processing with MATLAB',
    description:
      'Explored core image processing techniques in MATLAB including filtering, edge detection, morphological operations, and frequency-domain analysis as part of the SC4061 Computer Vision module.',
    category: 'DS/ML',
    tags: ['MATLAB', 'Image Processing', 'Edge Detection', 'Filtering', 'Computer Vision'],
    github: 'https://github.com/yiken0724/Image-Processing-with-MATLAB',
    demo: null,
    report: '/projects/image-processing-yiken.pdf',
    featured: false,
    year: 2025,
    metrics: [],
  },
  {
    id: 12,
    title: 'Traffic Monitoring with Regression Analysis',
    description:
      'Regression analysis on traffic monitoring data using R. Built and validated multiple linear regression models, performed residual diagnostics, and interpreted coefficients to identify key traffic predictors.',
    category: 'Data',
    tags: ['R', 'Regression', 'Statistics', 'Diagnostics', 'ggplot2'],
    github: 'https://github.com/yiken0724/Traffic-Monitoring-with-Regression-Analysis',
    demo: null,
    report: '/projects/traffic-monitoring-yiken.pdf',
    featured: false,
    year: 2024,
    metrics: [],
  },
  {
    id: 13,
    title: 'Data Analysis on Ford Vehicles',
    description:
      'Statistical data analysis on a Ford vehicles dataset using R. Applied exploratory data analysis, hypothesis testing, and visualisation with ggplot2 to uncover relationships between vehicle attributes.',
    category: 'Data',
    tags: ['R', 'EDA', 'Hypothesis Testing', 'ggplot2', 'dplyr'],
    github: 'https://github.com/yiken0724/Data-analysis-on-Ford-Vehicles',
    demo: null,
    report: '/projects/data-analysis-on-ford-yiken.pdf',
    featured: false,
    year: 2024,
    metrics: [],
  },
  {
    id: 14,
    title: 'Network Data Log Analysis',
    description:
      'Analysed real network traffic log data using Python to detect anomalies and extract insights. Performed packet-level parsing, protocol distribution analysis, and visualised traffic patterns with Matplotlib.',
    category: 'Data',
    tags: ['Python', 'Jupyter', 'Network Analysis', 'Matplotlib', 'Pandas'],
    github: 'https://github.com/yiken0724/Analysing-Network-Data-Log-using-Python',
    demo: null,
    report: '/projects/network-data-log-yiken.pdf',
    featured: false,
    year: 2024,
    metrics: [],
  },
  {
    id: 15,
    title: 'CAMs — Camp Activity Management System',
    description:
      'Java console application for managing NTU camp registrations with role-based access for Staff, Students, and Camp Committee members. Supports camp creation, student registration, enquiry handling, and report generation. Built with OOP principles for SC2002.',
    category: 'Software',
    tags: ['Java', 'OOP', 'Role-based Access', 'CSV'],
    github: 'https://github.com/yiken0724/CAMs-application',
    demo: null,
    report: '/projects/cams-yiken.pdf',
    featured: false,
    year: 2023,
    metrics: [],
  },
  {
    id: 16,
    title: 'Algorithm Design and Analysis',
    description:
      'C++ implementations of classic algorithms studied in SC2001 — including sorting (merge, quick, insertion), dynamic programming, and graph algorithms — with empirical time complexity analysis and benchmarking.',
    category: 'Software',
    tags: ['C++', 'Algorithms', 'Dynamic Programming', 'Graph Algorithms', 'Complexity Analysis'],
    github: 'https://github.com/yiken0724/Algorithm-Design-and-Analysis',
    demo: null,
    report: null,
    featured: false,
    year: 2023,
    metrics: [],
  },
  {
    id: 17,
    title: 'NTU Hotel Room Reservation System',
    description:
      'A C-based console application for hotel room reservations built in SC1003. Supports room browsing, booking, cancellation, and customer record management using structured file I/O.',
    category: 'Software',
    tags: ['C', 'File I/O', 'Console App'],
    github: 'https://github.com/yiken0724/NTU-Hotel-Room-Reservation-System',
    demo: null,
    report: null,
    featured: false,
    year: 2022,
    metrics: [],
  },
];

export const experience = [
  {
    id: 1,
    company: 'Nanyang Technological University',
    role: 'Peer Tutor',
    period: 'Aug 2024 – Present',
    location: 'Singapore',
    type: 'Part-time',
    description:
      'Peer tutor supporting undergraduate students in advanced mathematical and computational subjects, running personalised sessions throughout the semester.',
    highlights: [
      'Facilitated over 100+ personalised tutoring sessions throughout the semester to support more than 10 students in mastering advanced mathematical concepts',
      'Improved students\' coursework performance and academic confidence through targeted one-on-one guidance',
      'Provided guidance for courses including Calculus, Linear Algebra, Discrete Mathematics, Algorithms, Probability, Statistics, Data Analysis, Regression Analysis, Differential Equations, and Cryptography',
      'Simplified complex theories and offered practical problem-solving techniques to aid comprehension',
    ],
    tech: ['Mathematics', 'Statistics', 'Algorithms', 'Data Analysis'],
  },
  {
    id: 3,
    company: 'Nanyang Technological University',
    role: 'Teaching Assistant',
    period: 'Jan 2026 – May 2026',
    location: 'Singapore',
    type: 'Part-time',
    description:
      'Teaching assistant for an introductory Data Science and AI module (PS0002), conducting weekly tutorial and lab sessions for a class of 40 undergraduate students.',
    highlights: [
      'Conducted weekly tutorial and lab sessions covering 12 core concepts in data science and AI',
      'Provided real-time feedback on students\' code efficiency, readability, and cleanliness',
      'Evaluated students\' lab assignments, ensuring correctness, efficiency, and alignment with task requirements',
    ],
    tech: ['R', 'RStudio', 'Data Science', 'AI'],
  },
  {
    id: 4,
    company: 'Frasers and Neaves Limited',
    role: 'AI Insights Intern',
    period: 'Jan 2025 – Aug 2025',
    location: 'Singapore',
    type: 'Internship',
    description:
      'Full-stack AI and data intern driving analytics, automation, computer vision, and ML initiatives across F&N, delivering data-driven insights to business stakeholders.',
    highlights: [
      'Deployed a Power BI dashboard integrating advanced statistical techniques (ANOVA, Tukey\'s HSD, Wilcoxon Signed-Rank) to evaluate taste-profile similarity between two beverages via hypothesis testing — achieving 99.7% accuracy benchmarked against XLSTAT Macro files',
      'Performed ETL via Dataflow Gen2 into Fabric Notebook for downstream analysis, leveraging Microsoft Fabric data pipeline capabilities',
      'Conducted data engineering using SharePoint Graph API and REST API with Azure Active Directory token authentication to migrate folders from SharePoint into Fabric Notebook, reducing migration time by 40×',
      'Utilised OpenAI o4-mini API for automatic text processing — extracting structured information from documents into text and CSV formats, optimising workflows by 115%',
      'Involved in a Computer Vision project training image recognition models to identify F&N drinks using CustomVision.AI, improving accuracy by 40%',
      'Developed automation solutions using Excel TypeScript and Microsoft Power Automate to streamline internal workflows, reduce manual errors, and improve operational efficiency',
      'Enhanced an automated web crawling pipeline using Selenium and ChromeDriver to scrape F&B outlet data across Singapore\'s planning areas; integrated NLP and fuzzy matching to map scraped categories to F&N\'s database, improving efficiency by 20%',
    ],
    tech: ['Python', 'Power BI', 'Microsoft Fabric', 'OpenAI o4-mini', 'CustomVision.AI', 'Azure AD', 'SharePoint Graph API', 'Selenium', 'NLP', 'ETL', 'Power Automate', 'ANOVA'],
  },
];

export const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    period: 'Jun 2025 – Jul 2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/764Z3082I10I',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    period: 'Jun 2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/5BW1BFIYC465',
  },
  {
    title: 'Natural Language Processing Specialization',
    issuer: 'DeepLearning.AI',
    period: 'May 2025 – Jun 2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/7IYLP6VOS4JU',
  },
  {
    title: 'Power BI Data Analyst Professional Certificate',
    issuer: 'Microsoft',
    period: 'Apr 2025 – May 2025',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/ONY8K7VLMH28',
  },
  {
    title: 'AI Developer Professional Certificate',
    issuer: 'IBM',
    period: 'May 2024',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/RMXSDNDW5XQT',
  },
  {
    title: 'Advanced Data Analytics Professional Certificate',
    issuer: 'Google',
    period: 'May 2024',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/QS2AUWAN6SGF',
  },
  {
    title: 'Business Intelligence Professional Certificate',
    issuer: 'Google',
    period: 'May 2024',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/UTE9QIQVVY7H',
  },
  {
    title: 'Data Analytics Professional Certificate',
    issuer: 'Google',
    period: 'May 2024',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/VEGMS43XXNKE',
  },
];

export const prefixLabel = {
  MH:    'MH — Mathematics',
  SC:    'SC — Computer Science',
  CC:    'CC — Core Curriculum',
  Other: 'Other',
};

export const modules = [
  // ── AY22/23 Semester 1 ──────────────────────────────────────────
  { code: 'MH1100', title: 'Calculus I',                                            au: 4, grade: 'A+',   gp: 5.00, sem: 'AY22/23 S1', prefix: 'MH',    school: 'NTU', professor: 'Assoc Prof Tong Ping, Assoc Prof Xia Kelin', notes: '' },
  { code: 'MH1200', title: 'Linear Algebra I',                                      au: 4, grade: 'A',    gp: 5.00, sem: 'AY22/23 S1', prefix: 'MH',    school: 'NTU', professor: 'Assoc Prof Andrew Kricker', notes: '' },
  { code: 'MH1300', title: 'Foundations of Mathematics',                            au: 4, grade: 'A+',   gp: 5.00, sem: 'AY22/23 S1', prefix: 'MH',    school: 'NTU', professor: 'Prof Ng Keng Meng', notes: '' },
  { code: 'SC1003', title: 'Introduction to Computational Thinking & Programming',  au: 3, grade: 'B+',   gp: 4.00, sem: 'AY22/23 S1', prefix: 'SC',    school: 'NTU', professor: 'Dr Li Fang, Assoc Prof Hui Siu Cheng', notes: '' },
  { code: 'SC1005', title: 'Digital Logic',                                         au: 3, grade: 'A-',   gp: 4.50, sem: 'AY22/23 S1', prefix: 'SC',    school: 'NTU', professor: 'Assoc Prof Chan Syin', notes: '' },
  { code: 'CC0002', title: 'Navigating the Digital World',                          au: 2, grade: 'B+',   gp: 4.00, sem: 'AY22/23 S1', prefix: 'CC',    school: 'NTU', professor: '', notes: '' },
  { code: 'CC0003', title: 'Ethics & Civics in a Multicultural World',              au: 2, grade: 'A-',   gp: 4.50, sem: 'AY22/23 S1', prefix: 'CC',    school: 'NTU', professor: '', notes: '' },

  // ── AY22/23 Semester 2 ──────────────────────────────────────────
  { code: 'MH1101', title: 'Calculus II',                                           au: 4, grade: 'A+',   gp: 5.00, sem: 'AY22/23 S2', prefix: 'MH',    school: 'NTU', professor: 'Dr Ku Cheng Yeaw', notes: '' },
  { code: 'MH1201', title: 'Linear Algebra II',                                     au: 4, grade: 'A',    gp: 5.00, sem: 'AY22/23 S2', prefix: 'MH',    school: 'NTU', professor: 'Asst Prof Kiah Han Mao', notes: '' },
  { code: 'MH1301', title: 'Discrete Mathematics',                                  au: 3, grade: 'A',    gp: 5.00, sem: 'AY22/23 S2', prefix: 'MH',    school: 'NTU', professor: 'Assoc Prof Chan Song Heng', notes: '' },
  { code: 'SC1006', title: 'Computer Organisation & Architecture',                  au: 3, grade: 'A-',   gp: 4.50, sem: 'AY22/23 S2', prefix: 'SC',    school: 'NTU', professor: 'Assoc Prof Mohamed M. Sabry, Mr Oh Hong Lyle', notes: '' },
  { code: 'SC1007', title: 'Data Structures & Algorithms',                          au: 3, grade: 'B',    gp: 3.50, sem: 'AY22/23 S2', prefix: 'SC',    school: 'NTU', professor: 'Dr Owen Noel Newton Fernando, Dr Loke Yuan Ren', notes: '' },
  { code: 'CC0001', title: 'Inquiry & Communication in an Interdisciplinary World', au: 2, grade: 'B+',   gp: 4.00, sem: 'AY22/23 S2', prefix: 'CC',    school: 'NTU', professor: '', notes: '' },
  { code: 'CC0005', title: 'Healthy Living & Wellbeing',                            au: 3, grade: 'B+',   gp: 4.00, sem: 'AY22/23 S2', prefix: 'CC',    school: 'NTU', professor: '', notes: '' },

  // ── AY23/24 Semester 1 ──────────────────────────────────────────
  { code: 'MH2100', title: 'Calculus III',                                          au: 4, grade: 'A',    gp: 5.00, sem: 'AY23/24 S1', prefix: 'MH',    school: 'NTU', professor: 'Asst Prof Gary Greaves', notes: '' },
  { code: 'MH2500', title: 'Probability & Introduction to Statistics',              au: 4, grade: 'B+',   gp: 4.00, sem: 'AY23/24 S1', prefix: 'MH',    school: 'NTU', professor: 'Assoc Prof Wu Guohua', notes: '' },
  { code: 'SC2001', title: 'Algorithm Design & Analysis',                           au: 3, grade: 'B+',   gp: 4.00, sem: 'AY23/24 S1', prefix: 'SC',    school: 'NTU', professor: 'Prof Zhang Hanwang, Dr Huang Shell Ying', notes: '' },
  { code: 'SC2002', title: 'Object Oriented Design & Programming',                  au: 3, grade: 'B+',   gp: 4.00, sem: 'AY23/24 S1', prefix: 'SC',    school: 'NTU', professor: 'Prof Zhang Jie, Dr Li Fang', notes: '' },
  { code: 'SC2005', title: 'Operating Systems',                                     au: 3, grade: 'A-',   gp: 4.50, sem: 'AY23/24 S1', prefix: 'SC',    school: 'NTU', professor: 'Asst Prof Dmitrii Ustiugov, Prof Cai Wentong', notes: '' },
  { code: 'CC0006', title: 'Sustainability: Society, Economy & Environment',        au: 3, grade: 'B+',   gp: 4.00, sem: 'AY23/24 S1', prefix: 'CC',    school: 'NTU', professor: '', notes: '' },

  // ── AY23/24 Semester 2 ──────────────────────────────────────────
  { code: 'MH3110', title: 'Ordinary Differential Equations',                       au: 4, grade: 'A+',   gp: 5.00, sem: 'AY23/24 S2', prefix: 'MH',    school: 'NTU', professor: 'Asst Prof Wang Zhongjian', notes: '' },
  { code: 'MH3500', title: 'Statistics',                                            au: 4, grade: 'A-',   gp: 4.50, sem: 'AY23/24 S2', prefix: 'MH',    school: 'NTU', professor: 'Dr Yeo Kwee Po', notes: '' },
  { code: 'MH3511', title: 'Data Analysis with Computer',                           au: 3, grade: 'A',    gp: 5.00, sem: 'AY23/24 S2', prefix: 'MH',    school: 'NTU', professor: 'Dr Yue Mu', notes: '' },
  { code: 'PS0002', title: 'Introduction to Data Science & Artificial Intelligence',au: 3, grade: 'A',    gp: 5.00, sem: 'AY23/24 S2', prefix: 'SC',    school: 'NTU', professor: 'Assoc Prof Xiang Liming', notes: '' },
  { code: 'SC2207', title: 'Introduction to Databases',                             au: 3, grade: 'A-',   gp: 4.50, sem: 'AY23/24 S2', prefix: 'SC',    school: 'NTU', professor: 'Assoc Prof Ng Wee Keong, Assoc Prof Cong Gao', notes: '' },
  { code: 'ML0004', title: 'Career & Innovative Enterprise for the Future World',   au: 2, grade: 'A-',   gp: 4.50, sem: 'AY23/24 S2', prefix: 'CC',    school: 'NTU', professor: '', notes: '' },
  { code: 'CC0007', title: 'Science & Technology for Humanity',                     au: 3, grade: 'B+',   gp: 4.00, sem: 'AY23/24 S2', prefix: 'CC',    school: 'NTU', professor: '', notes: '' },

  // ── AY24/25 Semester 1 ──────────────────────────────────────────
  { code: 'MH3510', title: 'Regression Analysis',                                   au: 4, grade: 'A',    gp: 5.00, sem: 'AY24/25 S1', prefix: 'MH',    school: 'NTU', professor: 'Assoc Prof Yan Zhenzhen, Prof Pan Guangming', notes: '' },
  { code: 'MH4511', title: 'Sampling & Survey',                                     au: 4, grade: 'A+',   gp: 5.00, sem: 'AY24/25 S1', prefix: 'MH',    school: 'NTU', professor: 'Dr Yeo Kwee Po', notes: '' },
  { code: 'MH5301', title: 'Modern Cryptography: Real-World Applications & Impact', au: 3, grade: 'A',    gp: 5.00, sem: 'AY24/25 S1', prefix: 'MH',    school: 'NTU', professor: 'Adj Asst Prof Sim Siang Meng, Adj Assoc Prof Khoo Khoong Ming', notes: '' },
  { code: 'SC2006', title: 'Software Engineering',                                  au: 3, grade: 'A',    gp: 5.00, sem: 'AY24/25 S1', prefix: 'SC',    school: 'NTU', professor: 'Dr Shen Zhiqi, Prof Liu Yang', notes: '' },
  { code: 'SC2008', title: 'Computer Network',                                      au: 3, grade: 'B+',   gp: 4.00, sem: 'AY24/25 S1', prefix: 'SC',    school: 'NTU', professor: 'Assoc Prof Lee Bu Sung, Asst Prof Zhao Jun', notes: '' },
  { code: 'SC3020', title: 'Database System Principles',                            au: 3, grade: 'PASS', gp: null, sem: 'AY24/25 S1', prefix: 'SC',    school: 'NTU', professor: 'Assoc Prof Long Cheng, Assoc Prof Sourav Saha Browmick', notes: '' },
  { code: 'HW0218', title: 'Communication Across the Sciences',                     au: 2, grade: 'A',    gp: 5.00, sem: 'AY24/25 S1', prefix: 'CC',    school: 'NTU', professor: '', notes: '' },

    // ── AY24/25 Semester 2 ──────────────────────────────────────────
  { code: 'SC3079', title: 'Professional Internship',                               au: 10,grade: 'PASS', gp: null, sem: 'AY24/25 S2', prefix: 'CC',    school: 'NTU', professor: 'Prof Erik Cambria', notes: '' },

  // ── AY25/26 Semester 1 ──────────────────────────────────────────
  { code: 'MH4510', title: 'Statistical Learning and Data Mining',                  au: 4, grade: 'A',    gp: 5.00, sem: 'AY25/26 S1', prefix: 'MH',    school: 'NTU', professor: 'Dr Fedor Duzhin', notes: '' },
  { code: 'SC4020', title: 'Data Analytics and Mining',                             au: 3, grade: 'A+',   gp: 5.00, sem: 'AY25/26 S1', prefix: 'SC',    school: 'NTU', professor: 'Assoc Prof Lin Guosheng, Assoc Prof Kwoh Chee Keong', notes: '' },
  { code: 'SC4061', title: 'Computer Vision',                                       au: 3, grade: 'A',    gp: 5.00, sem: 'AY25/26 S1', prefix: 'SC',    school: 'NTU', professor: 'Assoc Prof Qian Ke Mao, Assoc Prof Liu Shijian', notes: '' },
  { code: 'SC4002', title: 'Natural Language Processing',                           au: 3, grade: 'EX',   gp: null, sem: 'AY25/26 S1', prefix: 'SC',    school: 'SMU', professor: 'Assoc Prof Gao Wei', notes: '' },
  { code: 'SC4003', title: 'Intelligent Agents',                                    au: 3, grade: 'EX',   gp: null, sem: 'AY25/26 S1', prefix: 'SC',    school: 'SMU', professor: 'Prof Pradeep Varakantham', notes: '' },
  { code: 'SC3xxx', title: 'Heuristic Search and Optimisation',                     au: 3, grade: 'EX',   gp: null, sem: 'AY25/26 S1', prefix: 'SC',    school: 'SMU', professor: 'Asst Prof Djordje Zikelic', notes: '' },

    // ── AY25/26 Semester 2 ──────────────────────────────────────────
  { code: 'MH4500', title: 'Time Series Analysis',                                  au: 4, grade: 'NA',   gp: null, sem: 'AY25/26 S2', prefix: 'MH',    school: 'NTU', professor: 'Prof Pan Guangming', notes: '' },
  { code: 'MH4501', title: 'Multivariate Analysis',                                 au: 4, grade: 'NA',   gp: null, sem: 'AY25/26 S2', prefix: 'MH',    school: 'NTU', professor: 'Assoc Prof Daniel Paulin', notes: '' },
  { code: 'MOOC01', title: 'Deep Learning Specialization',                          au: 3, grade: 'NA',   gp: null, sem: 'AY25/26 S2', prefix: 'SC',    school: 'NTU', professor: '', notes: '' },
  { code: 'SC4079', title: 'Final Year Project',                                    au: 8, grade: 'NA',   gp: null, sem: 'AY25/26 S2', prefix: 'CC',    school: 'NTU', professor: 'Assoc Prof Liu Ziwei, Assoc Prof Ariel Neufeld', notes: '' },
];

export const education = [
  {
    school: 'Nanyang Technological University',
    degree: 'B.Sc. (Hons) Mathematical & Computer Sciences (Double Major) — Data Science Specialisation',
    period: 'Aug 2022 – May 2026',
    gpa: '4.62/5.00',
    notes: 'ASEAN Undergraduate Scholar · Dean\'s List AY 2024/2025 · Expected Honours (Highest Distinction).',
  },
  {
    school: 'Singapore Management University',
    degree: 'Student Exchange Program (SUSEP)',
    period: 'Aug 2025 – Dec 2025',
    gpa: null,
    notes: 'Competitively selected as 1 of 25 NTU students for the Singapore University Student Exchange Programme (SUSEP).',
  },
];
