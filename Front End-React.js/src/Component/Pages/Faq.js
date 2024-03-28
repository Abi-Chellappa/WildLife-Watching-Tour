import React, { useState } from 'react';
import Sidebar from '../Bar/Sidebar';
import './Faq.css';
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";

export default function Faq() {
  const [showText, setShowText] = useState(Array(5).fill(false));

  const toggleAnswer = (index) => {
    const newShowText = [...showText];
    newShowText[index] = !newShowText[index];
    setShowText(newShowText);
  };

  const questionsAndAnswers = [
    {
      question: '1. What is an online wildlife watching tour?',
      answer: 'An online wildlife watching tour is a virtual experience that allows you to explore and observe wildlife from the comfort of your own home using live-streaming, pre-recorded videos, and interactive content.',
    },
    {
      question: '2. How does it work?',
      answer: 'Our website provides live camera feeds, recorded videos, and other multimedia content from various wildlife reserves and natural habitats. Users can access these resources to watch animals and learn about their behavior.',
    },
    {
      question: '3. How do I join an online wildlife tour?',
      answer: "To join an online wildlife tour, visit our website and browse the available tours. Choose the one you're interested in, and you can usually join by simply clicking on the tour video or following the provided instructions.",
    },
    {
      question: '4. Can I watch the tours on my mobile?',
      answer: 'Yes, our website is optimized for mobile devices and tablets, allowing you to enjoy wildlife tours on various platforms.',
    },
    {
      question: '5. Are the tours free??',
      answer: 'Yes, most of our tours are free to access, but we may offer premium tours for a fee.',
    },
  ];

  return (
    <div>
      <Sidebar />
      <div className='faqfull'>
        <div className='faqcontainer'>
          <h1 className='faqhead'>Frequently Asked Questions</h1>
          <div className='accordion'>
            <div className='faqimage'>
              <img src='https://www.siteimprove.com/contentassets/2bb73e81dfbd463b96bec03fb6a1829b/undraw_questions_re_1fy7.png?mode=crop&w=540&h=304' alt='' className='accordion-img' />
            </div>
            <div className='faqcontent'>
              {questionsAndAnswers.map((qa, index) => (
                <div key={index} className={`qa ${showText[index] ? 'show-text' : ''}`}>
                  <div className='question'>
                    <h3 className='tq'>{qa.question}</h3>
                    <button className='qbut' onClick={() => toggleAnswer(index)}>
                      <span className={`upicon ${showText[index] ? 'active' : ''}`}>
                        <BiIcons.BiChevronUp />
                      </span>
                      <span className={`dpicon ${!showText[index] ? 'active' : ''}`}>
                        <FaIcons.FaChevronDown />
                      </span>
                    </button>
                  </div>
                  <div className='answer'>
                    <p>{qa.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
