import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="GPT-3 is one of the largest language models ever created, consisting of a staggering 175 billion parameters. These parameters are the adjustable elements within the model that allow it to learn and generate text." />

      <Feature title="Knowledgebase" text="GPT-3 demonstrates impressive capabilities in natural language understanding and generation. It can complete text prompts, generate coherent paragraphs, translate languages, answer questions, and even perform basic reasoning and inference tasks" />
      <Feature title="Education" text="Due to its versatility, GPT-3 has numerous applications across various industries. It can be used for chatbots, content generation, language translation, code generation, creative writing assistance, and more." />
    </div>
  </div>
);

export default WhatGPT3;