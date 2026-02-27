import React, { useState } from "react";
import "./../Services/QnA.css";



const steps = [
  {
    number: "01",
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
  },
  {
    number: "03",
    title: "Implementation",
   content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
  },
  {
    number: "05",
    title: "Reporting and Communication",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
  },
  {
    number: "06",
    title: "Continual Improvement",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
  }
];

const QnA = () => {
  const [active, setActive] = useState(0);

  const toggleBox = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="process">

      <div className="prc-hdr">
        <h3 className="highlight">Our Working Process</h3>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

      <div className="prc-list">
        {steps.map((step, index) => (
          <div key={index} className={ active === index   ? "process-box active"  : "process-box"  }
            onClick={() => toggleBox(index)} >

            <div className="process-top">
              <div className="left">
                <span className="nmbr">{step.number}</span>
                <h4>{step.title}</h4>
              </div>
              <div className="icon">
                {active === index ? "-" : "+"}
              </div>
            </div>

            {active === index && (
              <div className="prcs-content">
                <hr />
                <p>{step.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default QnA;