import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Drowsiness Detection"
              description="I developed a drowsiness detection model using transfer learning with MobileNetV2, curating a diverse dataset of alert and drowsy individuals to ensure reliable performance. By fine-tuning MobileNetV2 on this dataset and leveraging pre-trained features, I achieved accurate classification. The model was implemented with TensorFlow.js for real-time web application usage."
              ghLink="https://github.com/Aishwaryaapandey/FRUGALX-DROWSINESS-DETECTION"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Detecting Alzheimers"
              description="This project explores machine learning models for detecting and classifying Alzheimer's Disease using PCA, LDA, SVM with various kernels, and CNNs (VGG16 for detection, EfficientNetB0 for classification). In the detection phase, models like PCA, SVM, LDA, and VGG16 identify Alzheimer's in brain images. During the classification phase, models assess the severity of Alzheimer's (non, very mild, mild, moderate) based on the dataset, aiding early diagnosis and treatment. This approach aims to enhance life expectancy and quality of life through timely interventions by implementing diverse models to detect Alzheimer's and classify its stages."
              ghLink="https://github.com/Aishwaryaapandey/Detecting-Alzheimers"
        
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
