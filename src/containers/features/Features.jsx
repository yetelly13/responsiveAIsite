import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'GPT-3, or Generative Pre-trained Transformer 3, is an advanced language model developed by OpenAI. It belongs to the family of deep learning models known as Transformers .',
  },
  {
    title: 'Become the tended active',
    text: ' GPT-3 is trained on a diverse corpus of text from the internet, including books, articles, websites, and more. This extensive training data helps the model understand and generate text across a wide range of topics and styles.',
  },
  {
    title: 'Contextual Understanding',
    text: ' It considers the context of the conversation, enabling more relevant and coherent responses.',
  },
  {
    title: 'Continual Improvement',
    text: ' As more data becomes available, and as research progresses, new versions and iterations of ChatGPT are developed, aiming for better performance, comprehension, and generation of human-like text.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
