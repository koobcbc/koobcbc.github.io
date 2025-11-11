---
layout: post
title: Winning 2nd Place at United Airlines GenAI Hackathon
date: 2025-06-23 12:00:00
description: My experience building an agent-to-agent GenAI solution for real-time airline fault reporting at the United Airlines GenAI Hackathon
tags: hackathon genai llm langchain
categories: projects
thumbnail: assets/img/united_hackathon/IMG_9495.JPG
images:
  slider: true
---

In June 2025, I had the incredible opportunity to participate in the United Airlines GenAI Hackathon, where my team and I developed an innovative agent-to-agent GenAI solution for real-time airline fault reporting. I'm thrilled to share that we won **2nd place** in the competition!

## The Challenge

The hackathon focused on leveraging Generative AI to solve real-world problems in the aviation industry. Our team tackled the challenge of streamlining airline fault reporting—a critical process that can significantly impact operational efficiency and passenger experience.

## Our Solution: Multi-Agent GenAI System

We architected a modular multi-agent system using **LangChain** and **Google's Gemini** to handle multimodal inputs and automate issue triage. The system seamlessly operates across iOS, Android, and web applications, making it accessible to maintenance crews regardless of their device preference.

### Key Features

**1. Specialized AI Agents**
Our system integrated four specialized agents, each with a distinct role:
- **Image Agent**: Classifies and analyzes fault images uploaded by maintenance crews
- **Form Agent**: Auto-fills structured forms based on extracted information
- **Submission Agent**: Handles the submission workflow and data validation
- **Supervisor Agent**: Orchestrates the entire process and ensures quality control

**2. Retrieval-Augmented Generation (RAG)**
We implemented RAG-driven fault resolution pipelines that query knowledge bases to provide accurate, context-aware solutions. This approach significantly improved response time and accuracy compared to traditional manual processes.

**3. Multimodal Input Handling**
The system can process various input types:
- Images of faulty equipment
- Text descriptions
- Structured form data
- Voice recordings (via transcription)

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/united_hackathon/IMG_9495.JPG" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/united_hackathon/9EEA0E05-0901-45B3-9E70-9AB9F8E6B1ED.JPG" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/united_hackathon/Screenshot 2025-06-29 at 6.24.15 PM.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>

## Demo Video

Here's a screen recording demonstrating our multi-agent system in action:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Screen Recording 2025-06-23 at 8.36.07 AM.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>
<div class="caption">
    Demo of the United Phoenix multi-agent GenAI system for airline fault reporting
</div>

## Technical Architecture

The system was built with scalability and reliability in mind:

- **Backend**: Python with LangChain for agent orchestration
- **LLM**: Google Gemini 2.5 for natural language understanding and generation
- **Frontend**: Cross-platform mobile app (React Native with Expo Go) and web interface
- **Integration**: RESTful APIs connecting all components

## Key Learnings

This hackathon was an incredible learning experience that reinforced several important lessons:

1. **Multi-Agent Systems**: Breaking down complex problems into specialized agents makes systems more maintainable and effective
2. **RAG for Domain Knowledge**: Retrieval-augmented generation is crucial when dealing with domain-specific information that needs to be accurate and up-to-date
3. **Multimodal AI**: The future of AI applications lies in seamlessly handling different input types
4. **Rapid Prototyping**: The hackathon format pushed us to build a working solution quickly while maintaining code quality

## Impact

Our solution demonstrated significant potential for improving airline operations:
- **Faster Response Times**: Automated triage reduces time from fault detection to resolution
- **Improved Accuracy**: AI-powered classification reduces human error
- **Better Resource Allocation**: Intelligent routing ensures issues reach the right teams quickly
- **Enhanced Documentation**: Automated form filling ensures consistent, complete records

## Reflection

Winning 2nd place at this hackathon was incredibly rewarding, but the real value came from the experience of working with cutting-edge GenAI technologies and solving a real-world problem. The feedback from United Airlines judges validated our approach and highlighted the potential impact of our solution.

The hackathon also reinforced my passion for building AI systems that solve practical problems. As I continue my studies in Applied Data Science at the University of Chicago, I'm excited to apply these learnings to future projects in healthcare, biotechnology, and beyond.

## Presentation Slides

For a detailed overview of our solution, architecture, and results, check out our presentation slides:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <a href="{{ '/assets/pdf/United Phoenix_UChicago & United Airlines Hackathon Summer 2025.pdf' | relative_url }}" target="_blank" class="btn btn-primary">
            <i class="fas fa-file-pdf"></i> View Presentation Slides (PDF)
        </a>
    </div>
</div>

---

*If you're interested in learning more about multi-agent systems or have questions about our implementation, feel free to reach out!*

