// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";


const projects = [
  {
    title: "Deep RL for Stock Trading",
    images: [
      "/Finsearch.png",
    ], // put dummy images here now
    stack: ["Python", "PyTorch", "Stable-Baselines3", "Pandas", "NumPy"],
    description: [
      "Deep reinforcement learning agent that learns buy/sell/hold policies on NIFTY100 stocks from historical data.",
      "Uses PPO with LSTM to capture temporal patterns and optimize risk‑adjusted returns over a 6‑month backtest.",
      "Includes a full training and evaluation pipeline with feature engineering and backtesting utilities.",
    ],
    linkLabel: "View GitHub repository",
    linkUrl: "https://github.com/your-username/deep-rl-trading",
  },
  {
    title: "InstiApp – IIT Bombay",
    images: [
      "Instiapp/Explore.png",
      "Instiapp/feed.png",
      "Instiapp/Blogs.png",
    ],
    stack: ["Flutter", "Dart", "Django", "REST APIs"],
    description: [
      "Full‑stack work on InstiApp, an app digitising student life at IIT Bombay with 15k+ downloads and 4k+ DAUs.",
      "Redesigned UI flows, added discussion forums and blogs, and improved error handling and responsiveness.",
      "Collaborated with DevCom to ship features that students actually use every day across campus.",
    ],
    linkLabel: "View on GitHub / Play Store",
    linkUrl: "https://github.com/your-username/instiapp-or-playstore-link",
  },
  {
    title: "Multilingual NLP Capstone",
    images: ["/projects/nlp-1.png"],
    stack: ["PyTorch", "Transformers", "BERT", "XLM‑R", "Hugging Face"],
    description: [
      "Capstone project comparing monolingual and multilingual transformer models for text classification.",
      "Implemented training and evaluation pipelines using BERT and XLM‑R with Hugging Face Transformers.",
      "Analysed performance across languages and transfer behaviour under low‑resource settings.",
    ],
    linkLabel: "View project details",
    linkUrl: "https://github.com/your-username/nlp-capstone",
  },
  {
title: "Computer Vision for Wildlife Detection",
images: ["/WildlifeDetection.png"],
stack: ["Python", "OpenCV", "scikit-learn", "HOG", "GLCM"],
description: [
"End-to-end image classification pipeline for wildlife detection using traditional computer vision techniques.",
"Applied HOG and GLCM feature extraction with SMOTE for class imbalance, achieving ~90% accuracy.",
"Trained Random Forest, SVM, and XGBoost models on image datasets with preprocessing and optimization."
],
linkLabel: "View GitHub repository",
linkUrl: "https://github.com/your-username/wildlife-detection-cv"
},
{
title: "Habit Tracker Website",
images: ["/HabitTracker.png"],
stack: ["React.js", "Django", "JavaScript", "REST API"],
description: [
"Full-stack habit tracking application built for recruitment with a 5-person team.",
"Features secure authentication, habit creation/editing, and progress visualization dashboards.",
"Designed responsive React frontend integrated with Django backend using component-based architecture."
],
linkLabel: "View GitHub repository",
linkUrl: "https://github.com/your-username/habit-tracker"
},
{
title: "BERT Model from Scratch",
images: ["/BERTModel.png"],
stack: ["Python", "PyTorch", "Transformers", "WikiText-2"],
description: [
"Implemented BERT from scratch for Inter IIT Tech Meet selection camp using PyTorch.",
"Built complete Transformer encoder with multi-head self-attention and feed-forward networks.",
"Created NLP pipeline with MLM masking (15%) and NSP pairs on WikiText-2 dataset."
],
linkLabel: "View GitHub repository",
linkUrl: "https://github.com/your-username/bert-from-scratch"
},
{
title: "Churnlytics - Customer Churn Analysis",
images: ["/Churnlytics.png"],
stack: ["Python", "Pandas", "scikit-learn", "Logistic Regression"],
description: [
"Customer churn prediction and segmentation analysis for Stratify 2025 using 250-customer dataset.",
"Performed EDA with Chi-square and Mann-Whitney tests to identify key churn drivers.",
"Built logistic regression model achieving 87% accuracy and 0.92 ROC-AUC for retention strategies."
],
linkLabel: "View GitHub repository",
linkUrl: "https://github.com/your-username/churnlytics"
},
{
title: "Stochastic Modelling for Insurance Risk",
images: ["/InsuranceRisk.png"],
stack: ["Python", "Probability", "Simulations", "Binomial-Poisson"],
description: [
"Probabilistic model for optimal insurance premiums analyzing mortality rates and claim probabilities.",
"Implemented Python simulations ensuring 1% chance of negative surplus with Binomial-Poisson convergence.",
"Evaluated revenue, risk, and surplus impacts under varying age-dependent population scenarios."
],
linkLabel: "View GitHub repository",
linkUrl: "https://github.com/your-username/stochastic-insurance"
},
{
title: "Analysis of Modern Cryptography",
images: ["/CryptographyAnalysis.png"],
stack: ["Python", "Number Theory", "Cryptanalysis", "AES", "RSA"],
description: [
"Comprehensive study of modern cryptography from Summer of Science 2025 with Maths and Physics Club.",
"Analyzed block ciphers (DES, AES, RC4), asymmetric systems (RSA, Diffie-Hellman, ECC), and hash functions (SHA-2, SHA-3).",
"Explored cryptographic foundations including modular arithmetic, finite fields, digital signatures, and MACs."
],
linkLabel: "View GitHub repository",
linkUrl: "https://github.com/your-username/modern-cryptography"
},
{
  title: "Voice Agent - LoopHealth",
  images: ["/VoiceAgentLoopHealth.png"],
  stack: ["Python", "Speech Recognition", "Text-to-Speech", "NLP", "Healthcare AI"],
  description: [
    "Enables hands-free patient interaction through speech recognition and natural language processing.",
    "Processes voice commands for medical queries, appointment booking, and health information retrieval.",
    "Provides conversational AI interface for healthcare services and patient support."
  ],
  linkLabel: "View GitHub repository",
  linkUrl: "https://github.com/Jyotirya/VoiceAgent-LoopHealth"
},
{
  title: "Sports Web Portal",
  images: ["/IITBSportsWeb.png"],
  stack: ["HTML", "CSS", "JavaScript", "Web Development"],
  description: [
    "Built responsive web interface using HTML5, CSS3, and vanilla JavaScript.",
    "Implemented event listings and schedules display for sports information.",
    "Created interactive sports portal with dynamic content and responsive design."
  ],
  linkLabel: "View GitHub repository",
  linkUrl: "https://github.com/Jyotirya/iitbsportsweb/tree/master"
}

];

const Projects = () => {
  return (
    <div className="projects">
      <h2>Selected projects</h2>
      <p className="projects__subtitle">
        Each project shows what I actually built: stack, visuals, and links to explore the work.
      </p>

      <div className="projects__list">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            className="project-card project-card--detailed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: idx * 0.08 }}
          >
            <div className="project-card__header">
              <h3>{project.title}</h3>
            </div>

            <div className="project-card__body">
              {/* Images */}
              <div className="project-card__images">
                {project.images.map((src, i) => (
                  <div key={i} className="project-card__image-frame">
                    <img src={src} alt={`${project.title} screenshot ${i + 1}`} />
                  </div>
                ))}
              </div>

              {/* Right side: description + stack + link */}
              <div className="project-card__details">
                <div className="project-card__stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-card__description">
                  {project.description.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                <a
                  className="project-card__link"
                  href={project.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel}
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
