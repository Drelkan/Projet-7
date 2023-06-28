import React, {useState } from 'react';
import arrow from './../../assets/image/fleche.png';


const Collapsible = ({ title, content}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  

    return (
      <div className='collapsible-about'>
        <div className='collapsible-title' onClick={toggleCollapse}>
            <h2 onClick={toggleCollapse}>{title}</h2>
            <img src={arrow} className={`collapsible-button ${isCollapsed ? 'collapsed' : 'expanded'}`} alt="haut" id='haut'/>
        </div>
        {/* {!isCollapsed && <div>{!content ? typeof content !== String ? <ul>{content.map((item, index) => <li key={index}>{item}</li>)}</ul> : <p>{content}</p> : ""}</div>} */}
        {!isCollapsed && (
          <div>
            {content !== null && typeof content === 'object' ? (
              <ul>
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{content}</p>
            )}
          </div>
        )}
      </div>
    )
  }
  
export default Collapsible;

// export function fleche({src}) {
//   return (
//     <div>
//         <img src={arrow} className='bouton' id='haut' alt="haut"/>
//     </div>
//   )
// }
