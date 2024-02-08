import { useState } from 'react';

export default function ExpandableCard() {
    const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleCard = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  // Sample content and names for each list item
  const listItems = [
    {
      name: "Office 365",
      heading: "Muscle of Continuous Change",
      content: "Elevate collaboration, streamline work, and embrace the future of workspaces.",
    },
    {
      name: "Copilot",
      heading: "Future Proof Your Business",
      content: "Automate routine tasks with the world’s most powerful productivity tool. ",
    },
    {
      name: "Dynamics 365",
      heading: "Progress Ahead with AI",
      content: "Connect teams, processes, and data through CRM and ERP applications powered by AI.  ",
    },
    {
      name: "Power Platform",
      heading: "Revolutionize the way you work",
      content: "Build apps, automate workflows, gain insights from data, and enhance agile efficiency.",
    },
    {
      name: "Azur Cloude Service",
      heading: "Create tomorrow’s breakthrough",
      content: "Innovate, scale, secure and make your business grow for the long term.",
    },
  ];

    return (
        
        <div className='bb-inns'>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              <div className="item">
                <a className="button" onClick={() => toggleCard(index)}>
                  {item.name}
                </a>
              </div>
            </li>
          ))}
        </ul>
        {listItems.map((item, index) => (
          <div key={index} className={`expandable-section ${expandedIndex === index ? 'expanded' : ''}`}>
            {expandedIndex === index && (
              <div className="cards card-cent">
                <span className="close-btn" onClick={() => toggleCard(index)}>
                  &times;
                </span>
                <div className='heding-tots'>{item.heading}</div>
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
         <style jsx>{`
         .heding-tots{
            color: #fff;
    font-size: 24px;
    margin-bottom: 15px;
         }
         .card-cent{

         }
         .card-cent p{
            color: #fff;
    font-size: 18px;
         }
       
        .expandable-section {
          display: none;
        }
        .expanded {
          display: block;
        }
        .cards {
            width: 450px;
            transition: box-shadow 0.3s ease-out 0s, background-color 0.3s ease-out 0s;
            position: absolute;
            pointer-events: auto;
            z-index: 100;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px 0px;
            background-color: rgb(95 69 144 / 91%)!important;
          padding: 20px;
          border-radius: 5px;
          animation: ${expandedIndex !== -1 ? 'expand 0.3s ease forwards' : 'collapse 0.3s ease forwards'};
          border-radius: 15px;
        }
        .card-cent{
            position: absolute;
            left: 38%;
            top: -300px;
            transform: translate(-50%,-50%);
            z-index: 2;
           text-align:center;
           padding: 80px 40px;
        }
        .close-btn {
            cursor: pointer;
            position: absolute;
            top: -4px;
            right: 9px;
            color: #c0aee9;
            font-size: 30px;
        }
        @keyframes expand {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes collapse {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.5);
          }
        }
        @media(max-width:1400px){
            .card-cent{
             
                left: 31%;
            }
        }
      `}</style>
      </div>
    );
}
