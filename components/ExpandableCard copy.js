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
      name: "Button One",
      content: "Content for button 1",
    },
    {
      name: "Button Two",
      content: "Content for button 2",
    },
    {
      name: "Button Three",
      content: "Content for button 3",
    },
    {
      name: "Button Four",
      content: "Content for button 4",
    },
    {
      name: "Button Five",
      content: "Content for button 5",
    },
  ];

    return (
        
        <div className='bb-inns'>
            <ul>
                {listItems.map((item, index) => (
                    <li key={index}>
                        {expandedIndex !== index && (
                            <div className="item">
                                <a className="button" onClick={() => toggleCard(index)}>
                                    {item.name}
                                </a>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            {listItems.map((item, index) => (
                <div key={index} className={`expandable-section ${expandedIndex === index ? 'expanded' : ''}`}>
                    {expandedIndex === index && (
                        <div className="cards card-cent">
                            <span className="close-btn" onClick={() => toggleCard(index)}>
                                Close &times;
                            </span>
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
            <style jsx>{`
        // .button {
        //   padding: 10px 20px;
        //   background-color: #007bff;
        //   color: #fff;
        //   border: none;
        //   cursor: pointer;
        //   border-radius: 5px;
        //   transition: background-color 0.3s;
        // }
        // .button:hover {
        //   background-color: #0056b3;
        // }
        .item {
          display: flex;
          align-items: center;
        }
        .expandable-section {
          display: none;
        }
        .expanded {
          display: block;
        }
        .cards {
            width: 500px;
            height: 350px;
            transition: box-shadow 0.3s ease-out 0s, background-color 0.3s ease-out 0s;
            position: absolute;
            pointer-events: auto;
            z-index: 100;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px 0px;
            background-color: rgba(72, 193, 122, 0.95) !important;
          padding: 20px;
          border-radius: 5px;
          animation: ${expandedIndex !== -1 ? 'expand 0.3s ease forwards' : 'collapse 0.3s ease forwards'};
          
        }
        .card-cent{
            position: absolute;
            left: 35%;
            top: -300px;
            transform: translate(-50%,-50%);
            z-index: 2;
        }
        .close-btn {
          cursor: pointer;
          color: #555;
          float: right;
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
      `}</style>
        </div>
    );
}
