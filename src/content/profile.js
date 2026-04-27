export const profile = {
  name: "Abhiram Kandiyana",
  title: "PhD Candidate in Computer Science and Engineering",
  institution: "University of South Florida",
  institutionSubline:
    "Bellini College of Artificial Intelligence, Cybersecurity and Computing",
  location: "Tampa, FL",
  tagline:
    "Researching efficient vision-language systems for microscopy, medical image analysis, and deployable scientific AI.",
};

export const contactCards = [
  {
    icon: "mail",
    label: "Email",
    value: "kandiyana@usf.edu",
  },
  {
    icon: "location",
    label: "Location",
    value: "Tampa, Florida",
  },
];

export const iconLinks = [
  {
    icon: "mail",
    label: "Email",
    url: "mailto:kandiyana@usf.edu",
  },
  {
    icon: "scholar",
    label: "Google Scholar",
    url: "https://scholar.google.com/citations?hl=en&user=2u0uy84AAAAJ",
  },
  {
    icon: "github",
    label: "GitHub",
    url: "https://github.com/Abhiram-kandiyana",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/abhiram-kandiyana-239029169/",
  },
  {
    icon: "x",
    label: "X",
    url: "https://x.com/codemastery_hq",
  },
];

export const about = [
  "I am a PhD candidate in Computer Science and Engineering at the University of South Florida, where I work on AI methods for microscopy image understanding and biomedical image analysis. My research sits at the intersection of computer vision, deep learning, multimodal modeling, and practical scientific tooling.",
  "Across more than four years of research experience, I have focused on building systems that make large vision-language models more useful in expert-facing settings. This includes prompting and tuning strategies for microscopy classification, explainability workflows for human-in-the-loop analysis, and efficient pipelines that reduce annotation effort while preserving strong empirical performance.",
  "Beyond model development, I am interested in translating research into usable infrastructure. My work has included deployment on AWS, containerized inference with Docker, and GPU-based serving environments that make models available to collaborators and research teams.",
];

export const researchAreas = [
  {
    title: "Microscopy Image Analysis",
    description:
      "Developing automated classification, quantification, and explanation pipelines for microscopy imagery with an emphasis on biomedical utility and expert interpretability.",
  },
  {
    title: "Vision-Language Models for Science",
    description:
      "Adapting foundation VLMs such as GPT-4O, LLaVA, NVLM, and related systems to specialized scientific domains where data is limited and annotation is expensive.",
  },
  {
    title: "Efficient AI Systems",
    description:
      "Designing workflows that combine prompt engineering, parameter-efficient adaptation, segmentation pipelines, and deployment infrastructure to improve both accuracy and usability.",
  },
];

export const highlights = [
  {
    date: "2025",
    title: "ISBI publication on active prompt tuning",
    description:
      "Published work on efficient microscopy image classification using active prompt tuning strategies for GPT-4O-class systems.",
  },
  {
    date: "2025",
    title: "CBMS publication on multimodal few-shot prompting",
    description:
      "Contributed to a study on pain classification in infant cry sounds using few-shot prompting with vision-language modeling techniques.",
  },
  {
    date: "2024",
    title: "Master's thesis completed at USF",
    description:
      "Completed a thesis on semi-automated cell annotation using deep learning, focused on reducing manual effort in microscopy workflows.",
  },
  {
    date: "2021 - Present",
    title: "Ongoing research assistantship at USF",
    description:
      "Continued long-term research on microscopy image understanding, model tuning, segmentation, and deployable biomedical AI systems.",
  },
];

export const publications = [
  {
    id: "isbi-2025-apt",
    title:
      "Active Prompt Tuning Enables GPT-4O to Do Efficient Classification of Microscopy Images",
    venue: "IEEE International Symposium on Biomedical Imaging (ISBI)",
    year: "2025",
    authors:
      "Abhiram Kandiyana, Peter R. Mouton, Yaroslav Kolinko, Lawrence O. Hall, Dmitry B. Goldgof",
    abstract:
      "This paper studies active prompt tuning for microscopy image classification using GPT-4o-class models. The work shows that careful prompt-set construction can preserve strong classification accuracy while reducing annotation effort, image requirements, and expert time compared with traditional supervised baselines.",
    citation:
      "Kandiyana, A., Mouton, P. R., Kolinko, Y., Hall, L. O., & Goldgof, D. B. (2025). Active Prompt Tuning Enables GPT-4O to Do Efficient Classification of Microscopy Images. IEEE International Symposium on Biomedical Imaging (ISBI).",
    thumbnailLabel: "ISBI 2025",
    links: {
      pdf: "https://arxiv.org/abs/2411.02639",
      website: "https://dblp.org/rec/conf/isbi/KandiyanaMKHG25.html",
    },
  },
  {
    id: "cbms-2025-pain",
    title:
      "Few-Shot Prompting with Vision Language Model for Pain Classification in Infant Cry Sounds",
    venue:
      "IEEE International Symposium on Computer-Based Medical Systems (CBMS)",
    year: "2025",
    authors:
      "Anthony McCofie, Abhiram Kandiyana, Peter R. Mouton, Yu Sun, Dmitry B. Goldgof",
    abstract:
      "This work extends few-shot multimodal prompting into infant pain classification by combining vision-language reasoning with spectrogram-based representations. It demonstrates that low-shot prompting strategies can support clinically relevant classification tasks even when labeled data is limited.",
    citation:
      "McCofie, A., Kandiyana, A., Mouton, P. R., Sun, Y., & Goldgof, D. B. (2025). Few-Shot Prompting with Vision Language Model for Pain Classification in Infant Cry Sounds. IEEE International Symposium on Computer-Based Medical Systems (CBMS), 857-862.",
    thumbnailLabel: "CBMS 2025",
    links: {
      doi: "https://doi.org/10.1109/CBMS65348.2025.00174",
      website: "https://dblp.org/rec/conf/cbms/McCofieKM0G25",
    },
  },
  {
    id: "cbms-2024-active-prompting",
    title:
      "Active Prompting of Vision Language Models for Human-in-the-Loop Classification and Explanation of Microscopy Images",
    venue:
      "IEEE International Symposium on Computer-Based Medical Systems (CBMS)",
    year: "2024",
    authors:
      "Abhiram Kandiyana, Peter R. Mouton, Lawrence O. Hall, Dmitry B. Goldgof",
    abstract:
      "This paper presents a human-in-the-loop framework for using vision-language models to classify and explain microscopy images. The focus is on pairing model predictions with interpretable reasoning so domain experts can evaluate outputs more effectively in biomedical imaging workflows.",
    citation:
      "Kandiyana, A., Mouton, P. R., Hall, L. O., & Goldgof, D. B. (2024). Active Prompting of Vision Language Models for Human-in-the-Loop Classification and Explanation of Microscopy Images. IEEE International Symposium on Computer-Based Medical Systems (CBMS), 205-212.",
    thumbnailLabel: "CBMS 2024",
    links: {
      website: "https://dblp.org/rec/conf/cbms/KandiyanaMHG24",
      details: "https://researchr.org/publication/KandiyanaMHG24",
    },
  },
  {
    id: "asemfl-2024-gpt-microscopy",
    title: "Automatic Classification of Light Microscopy Images Using GPT Models",
    venue: "ASEMFL Annual Meeting",
    year: "2024",
    authors:
      "Abhiram Kandiyana, Peter R. Mouton, Yaroslav Kolinko, Lawrence O. Hall, Dmitry B. Goldgof",
    abstract:
      "This study explores the use of GPT-based systems for light microscopy image classification, with an emphasis on assessing the practical viability of large multimodal models in scientific imaging tasks.",
    citation:
      "Kandiyana, A., Mouton, P. R., Kolinko, Y., Hall, L. O., & Goldgof, D. B. (2024). Automatic Classification of Light Microscopy Images Using GPT Models. ASEMFL Annual Meeting.",
    thumbnailLabel: "ASEMFL 2024",
    links: {},
  },
  {
    id: "thesis-2024-cell-annotation",
    title: "Semi-automated Cell Annotation Framework Using Deep Learning",
    venue: "Master's Thesis, University of South Florida",
    year: "2024",
    authors: "Abhiram Kandiyana",
    abstract:
      "This thesis addresses the cost of manual cell annotation in microscopy workflows by introducing a semi-automated deep learning framework. It focuses on reducing human effort while maintaining the rigor needed for quantitative biological analysis.",
    citation:
      "Kandiyana, A. (2024). Semi-automated Cell Annotation Framework Using Deep Learning (Master's thesis). University of South Florida.",
    thumbnailLabel: "MS Thesis",
    links: {
      pdf: "https://digitalcommons.usf.edu/etd/10269/",
      website: "https://digitalcommons.usf.edu/etd/10269/",
    },
  },
];

export const experience = [
  {
    period: "Aug 2021 - Present",
    role: "Research Assistant",
    organization: "M-AI Project, University of South Florida",
    details:
      "Developed a novel active prompt tuning framework for biomedical image understanding, reaching expert-level accuracy of 96% while boosting efficiency by up to 96% and reducing data and time requirements.",
  },
  {
    period: "Aug 2021 - Present",
    role: "Vision-Language Model Researcher",
    organization: "Microscopy Image Analysis Lab, University of South Florida",
    details:
      "Fine-tuned foundation VLMs including GPT-4o, NVLM, CLIP, LLaVA, and LLaVA-Med for microscopy image classification, reaching an average accuracy of 93% across research workflows.",
  },
  {
    period: "Aug 2021 - Present",
    role: "ML Systems and Deployment Contributor",
    organization: "University of South Florida",
    details:
      "Engineered segmentation and deployment workflows with Meta SAM, Docker, AWS, EC2, S3, vLLM, PyTorch DDP, and Transformers, cutting manual annotation time by 57% while maintaining more than 90% accuracy and serving models across the university.",
  },
];

export const academicExperience = [
  {
    period: "Aug 2021 - Present",
    role: "Research Assistant",
    organization: "M-AI Project, University of South Florida",
    organizationUrl: "https://stalker0418.github.io/DL_Lab/",
    details:
      "Developed a novel active prompt tuning framework for biomedical image understanding, achieving 96% expert-level accuracy while boosting efficiency by up to 96% and minimizing data and time requirements. Fine-tuned foundation VLMs such as GPT-4o, NVLM, CLIP, LLaVA, and LLaVA-Med for microscopy image classification with an average accuracy of 93%, while also building preprocessing workflows including normalization, denoising, color space conversion, histogram equalization, and augmentation.",
  },
  {
    period: "Aug 2021 - Present",
    role: "Teaching Assistant",
    organization: "Bellini College, University of South Florida",
    details:
      "Delivered graduate-level lectures on deep learning topics including preprocessing, activation functions, regularization, optimization, backpropagation, and CNNs, and designed hands-on image processing labs covering OpenCV fundamentals plus 3D and stereo imaging.",
  },
];

export const industryExperience = [
  {
    period: "Jun 2026 - Aug 2026",
    role: "Data Science Intern",
    organization: "Capital One AI Foundations - LLM Foundations Team, New York City",
    details:
      "Incoming internship focused on data science and large language model foundation work within Capital One's AI Foundations organization.",
  },
  {
    period: "May 2024 - Aug 2025",
    role: "Co-Founder and Founding Engineer",
    organization: "Mindlr AI",
    details:
      "Designed and built an AI search engine from scratch that generates multi-step blueprints and workflows using LangChain, RAG, Pinecone, AWS, Docker, Hugging Face, and LLM-based systems. Bootstrapped the startup from idea to beta product within three months and helped it gain visibility through BuildSpace.",
  },
  {
    period: "Aug 2020 - Aug 2021",
    role: "Machine Learning Engineer",
    organization: "ConceptWaves | Vinshko Technologies, Hyderabad, India",
    details:
      "Built object detection and classification tools for semi-automated online proctoring, implemented computer vision grading systems that reduced grading time by 40%, and improved energy efficiency through predictive modeling that reduced consumption by 15%.",
  },
];

export const education = [
  {
    degree: "PhD in Computer Science and Engineering",
    institution: "University of South Florida",
    period: "Jan 2023 - Dec 2026",
    detail:
      "Major area: automated quantification and explanation of microscopy images using vision-language models. GPA: 3.9/4.0.",
    professors: [
      {
        name: "Dmitry B. Goldgof",
        url: "https://www.usf.edu/ai-cybersecurity-computing/people/faculty/goldgof-dmitry.aspx",
      },
      {
        name: "Lawrence Hall",
        url: "https://www.usf.edu/ai-cybersecurity-computing/people/faculty/hall-lawrence.aspx",
      },
    ],
  },
  {
    degree: "Master's in Computer Science, Thesis Track",
    institution: "University of South Florida",
    period: "Aug 2021 - May 2024",
    detail:
      "Completed with a 3.9/4.0 GPA. Thesis: Semi-automated Cell Annotation Framework Using Deep Learning.",
    professors: [
      {
        name: "Dmitry B. Goldgof",
        url: "https://www.usf.edu/ai-cybersecurity-computing/people/faculty/goldgof-dmitry.aspx",
      },
      {
        name: "Lawrence Hall",
        url: "https://www.usf.edu/ai-cybersecurity-computing/people/faculty/hall-lawrence.aspx",
      },
    ],
  },
];

export const skills = [
  {
    category: "Programming",
    items: ["Python", "C", "CUDA", "SQL"],
  },
  {
    category: "Frameworks and Libraries",
    items: [
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Scikit-image",
      "Scikit-learn",
      "NumPy",
      "TorchVision",
      "Matplotlib",
      "Keras",
      "Pillow",
      "Hugging Face",
      "vLLM",
      "OpenAI APIs",
    ],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "AWS", "Git", "EC2", "S3", "GPU clusters"],
  },
  {
    category: "Research Areas",
    items: [
      "Computer Vision",
      "Deep Learning",
      "Medical Image Analysis",
      "Image Segmentation",
      "Object Detection",
      "Vision-Language Models",
      "Prompt Engineering",
      "Parameter-Efficient Fine-Tuning",
      "Distributed Computing",
    ],
  },
];
