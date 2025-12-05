import React from "react";
import { motion } from "framer-motion";

// Helper for the Card logic to keep code clean
const ProjectItem = ({ title, stack, description, linkLabel, linkUrl, children }) => {
  return (
    <div className="timeline-item">
      <motion.div 
        className="timeline-marker"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      
      <motion.div 
        className="project-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="project-header">
          <h3>{title}</h3>
          <a href={linkUrl} target="_blank" rel="noreferrer" className="project-link">
            {linkLabel}
          </a>
        </div>

        <div className="project-stack">
          {stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-desc">
          {description.map((line, i) => (
            <p key={i}>• {line}</p>
          ))}
        </div>

        {/* Custom Visuals Area */}
        {children}
      </motion.div>
    </div>
  );
};

// Section Header Helper
const SectionTitle = ({ title }) => (
  <motion.div 
    className="timeline-section-header"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <h2>{title}</h2>
  </motion.div>
);

const Projects = () => {
  // Image Placeholders helper
  const renderPlaceholder = (text) => (
    <div className="img-placeholder">{text}</div>
  );

  return (
    <section className="section projects-container" id="projects">
      
      {/* =========================================
          SECTION 1: DEVELOPMENT
      ========================================= */}
      <SectionTitle title="Development Projects" />

      {/* InstiApp: 6 Mobile Images */}
      <ProjectItem
        title="InstiApp – IIT Bombay"
        stack={["Flutter", "Dart", "Django", "REST APIs"]}
        description={[
          "Full‑stack work on InstiApp, digitising student life with 15k+ downloads.",
          "Redesigned complete UI flows, added discussion forums, and improved error handling.",
          "Collaborated with DevCom to ship features used daily across campus."
        ]}
        linkLabel="Play Store"
        linkUrl="https://play.google.com/store/apps/details?id=app.insti.flutter"
      >
        <div className="layout-mobile-scroll">
          {/* Replace renderPlaceholder with <img src="..." /> when you have them */}
          {["Explore", "feed", "Blogs", "Event", "Search", "Community"].map((name, i) => (
            <div key={i} className="frame-phone">
               <img src={`Instiapp/${name}.png`} alt={name} />
               {/* {renderPlaceholder(name)} */}
            </div>
          ))}
        </div>
      </ProjectItem>

      {/* Habit Tracker: 3 Desktop Images */}
      <ProjectItem
        title="Habit Tracker Website"
        stack={["React.js", "Django", "JavaScript", "REST API"]}
        description={[
          "Full-stack habit tracking application built in a team of four.",
          "Features secure authentication, habit creation, and analytics dashboards.",
          "Designed responsive React frontend integrated with Django backend."
        ]}
        linkLabel="View GitHub"
        linkUrl="https://github.com/Jyotirya/habit-dashboard"
      >
        <div className="layout-desktop-grid">
           {["dashboard", "statistics ", "sign up"].map((name, i) => (
            <div key={i} className="frame-desktop">
              <img src={`HabitTracker/${name}.png`} alt={name} />
            </div>
          ))}
        </div>
      </ProjectItem>

      {/* Sports Website: 3 Desktop Images */}
      <ProjectItem
        title="Sports Web Portal"
        stack={["HTML", "Django", "JavaScript",]}
        description={[
          "Built responsive web interface using vanilla JavaScript and HTML5.",
          "Implemented event listings and schedules display for sports information.",
          "Created interactive sports portal with dynamic content."
        ]}
        linkLabel="View GitHub"
        linkUrl="https://github.com/Jyotirya/iitbsportsweb/tree/master"
      >
        <div className="layout-desktop-grid">
           {["home", "rename", "sport"].map((name, i) => (
            <div key={i} className="frame-desktop">
              <img src={`Sports/${name}.png`} alt={name} />
            </div>
          ))}
        </div>
      </ProjectItem>

      {/* Portfolio: Text Only */}
      <ProjectItem
        title="Personal Portfolio"
        stack={["React", "Vite", "Framer Motion", "Three.js"]}
        description={[
          "Interactive portfolio showcasing AI/ML and full-stack projects.",
          "Built with React + Framer Motion for entrance animations.",
          "Features floating orbs background and responsive design."
        ]}
        linkLabel="View GitHub"
        linkUrl="https://github.com/Jyotirya/portfolio"
      />


      {/* =========================================
          SECTION 2: AI & MACHINE LEARNING
      ========================================= */}
      <SectionTitle title="AI & Machine Learning" />

      <ProjectItem
        title="Deep RL for Stock Trading"
        stack={["Python", "PyTorch", "Stable-Baselines3", "Pandas"]}
        description={[
          "Deep reinforcement learning agent that learns buy/sell policies.",
          "Uses PPO with LSTM to capture temporal patterns.",
          "Includes training and evaluation pipeline with backtesting."
        ]}
        linkLabel="View Drive Link"
        linkUrl="https://drive.google.com/drive/folders/1gkUfkf5cQcZT_-7w1Ddes_auWGaRwaDW?usp=sharing"
      />

      <ProjectItem
        title="Computer Vision System"
        stack={["Python", "OpenCV", "YOLO", "HOG"]}
        description={[
          "End-to-end image classification pipeline for wildlife detection.",
          "Applied feature extraction (HOG/GLCM) with SMOTE for class imbalance.",
          "Achieved ~90% accuracy with optimized models."
        ]}
        linkLabel="View GitHub"
        linkUrl="https://github.com/Jyotirya/Image_Classifier/tree/master"
      />

      <ProjectItem
        title="Multilingual NLP Capstone"
        stack={["PyTorch", "Transformers", "BERT", "XLM-R"]}
        description={[
          "Compared monolingual and multilingual transformer models.",
          "Implemented training pipelines using Hugging Face Transformers.",
          "Analysed transfer behaviour under low-resource settings."
        ]}
        linkLabel="View GitHub"
        linkUrl="https://github.com/Jyotirya/Evaluation-of-Multilingual-Models"
      />

      <ProjectItem
        title="BERT Implementation"
        stack={["Python", "PyTorch", "Deep Learning"]}
        description={[
          "Implemented BERT from scratch for Inter IIT Tech Meet selection.",
          "Built complete Transformer encoder with multi-head attention.",
          "Created NLP pipeline with MLM masking and NSP pairs."
        ]}
        linkLabel="View GitHub"
        linkUrl="https://github.com/Jyotirya/Bert_From_Scratch"
      />


      {/* =========================================
          SECTION 3: OTHER PROJECTS
      ========================================= */}
      <SectionTitle title="Other Projects" />

      {/* Quant: 2 Images (Grid adapts automatically) */}
      <ProjectItem
        title="Summer of Quant"
        stack={["Python", "Pandas", "yfinance", "Matplotlib"]}
        description={[
          "Algorithmic trading strategies including statistical arbitrage.",
          "Built data pipelines for historical market data.",
          "Implemented risk management models for live simulation."
        ]}
        linkLabel="View GitHub"
        linkUrl="https://github.com/Jyotirya/Summer-of-Quant-"
      >
      </ProjectItem>

      <ProjectItem
        title="Churnlytics"
        stack={["Python", "Scikit-Learn", "Pandas"]}
        description={[
          "Customer churn prediction and segmentation analysis.",
          "Performed EDA with Chi-square and Mann-Whitney tests.",
          "Built logistic regression model achieving 87% accuracy."
        ]}
        linkLabel="View Drive Link"
        linkUrl="https://drive.google.com/drive/folders/1OJ-pCY6Lg-twJPvK4TvzrPfzz3hoD6QT?usp=sharing"
      />

      {/* Voice Agent: Single Hero Image */}
      <ProjectItem
        title="Voice Agent"
        stack={["Python", "RAG", "NLP"]}
        description={[
          "Enables hands-free patient interaction through speech.",
          "Processes voice commands for medical queries and booking.",
          "Provides conversational AI interface."
        ]}
        linkLabel="View GitHub"
        linkUrl="https://github.com/Jyotirya/VoiceAgent-LoopHealth"
      >
        {/* <div className="layout-hero">
          <img src="Aiassistant.png" alt="Voice Agent" />
        </div> */}
      </ProjectItem>

      <ProjectItem
        title="Cryptography Suite"
        stack={["Python", "AES", "RSA", "Math"]}
        description={[
          "Comprehensive study of modern cryptography.",
          "Analyzed block ciphers, asymmetric systems, and hash functions.",
          "Explored modular arithmetic and digital signatures."
        ]}
        linkLabel="View Report"
        linkUrl="https://drive.google.com/file/d/19fY6PW2Jxe2AZ8BJbY-mawftJfhcXZb8/view?usp=sharing"
      />

    </section>
  );
};

export default Projects;