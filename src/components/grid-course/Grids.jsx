import React from 'react'
import dan from './dan.jpg'
import jana  from './jana.jpg'
import jean  from './jean.jpg'
import kira from './kira.jpg'
import pat from './pat.jpg'
import  './Grid.css'
import { useState } from 'react'
function Grids() {
    const [on, setOn] = useState(false)
    const click = () => {
        setOn(!on)
    }
  return (
    <div>
        <button onClick={click}>Click</button>
      <div className="grid-con" style={{backgroundColor: on ? 'hsl(263, 55%, 52%)': 'hsl(219, 29%, 14%)'}}>
        
        {details.map((detail, index)=> {
          return <div className={detail.className} key={index}>
                <div className='svg'>
                {detail.svg}
                </div>
           
            {/* card */}
            <div className='p-con'>
            {/* container for profile pics and names  */}
            <img src={detail.picture} alt={detail.name} />
            <div className='nam-title'>
            {/* fragment housing the name and title */}
            <h4>{detail.name} </h4>
            <p>Verified Graduate</p>
            </div>
            
            </div>
            <h3>{detail.testimonialone}</h3>
            <p>{detail.testimonialtwo} </p>
          </div>
        
        })}
        
      </div>
    </div>
  )
}

export default Grids

const details = [
    {
        picture: dan,
        name: "Daniel Clifford",
        testimonialone:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium alias reiciendis velit nemo sequi assumenda ipsum delectus tempore magni, explicabo ab harum minus omnis officia? Voluptatem deleniti sapiente molestias rerum!' ,
        testimonialtwo: 
        
             'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum consectetur consequatur dolorum eligendi reprehenderit repellendus velit rerum tenetur ut.'
             ,
        position:'Verified Graduate'
        ,
        svg: <svg width="104" height="102" xmlns="http://www.w3.org/2000/svg"><path d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z" fill="#A775F1" fillRule="nonzero"/></svg>,
    className: "First"
        
    },
    {
        picture: jana,
        name: "Jonathan Williams",
        testimonialone:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ' ,
        testimonialtwo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum consectetur consequatur dolorum eligendi reprehenderit repellendus velit rerum tenetur ut.',
        position:'Verified Graduate',
    className: "Second"
        
    },
    {
        picture: kira,
        name: "Kira White",
        testimonialone:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ' ,
        testimonialtwo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum consectetur consequatur dolorum eligendi reprehenderit repellendus velit rerum tenetur ut.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum dolorum velit, asperiores ipsa maxime dolorem sed possimus dolor natus. Dignissimos sequi vero dolor ratione voluptates eius minus error cumque.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum dolorum velit, asperiores ipsa maxime dolorem sed possimus dolor natus. Dignissimos sequi vero dolor ratione voluptates eius minus error cumque.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum dolorum velit, asperiores ipsa maxime dolorem sed possimus dolor natus. Dignissimos sequi vero dolor ratione voluptates eius minus error cumque.',
        position:'Verified Graduate',
    className: "Third"

    },

 {
        picture: jean,
        name: "Jeanette Harmon",
        testimonialone:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' ,
        testimonialtwo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum consectetur consequatur dolorum eligendi reprehenderit repellendus velit rerum tenetur ut.',
        position:'Verified Graduate',
    className: "Fourth"

    } ,
  
     
        {
        picture: pat,
        name: "Patrick Alrams",
        testimonialone:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium alias reiciendis velit nemo sequi assumenda ipsum delectus tempore magni, explicabo ab harum minus omnis officia? Voluptatem deleniti sapiente molestias rerum!' ,
        testimonialtwo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum consectetur consequatur dolorum eligendi reprehenderit repellendus velit rerum tenetur ut.',
        position:'Verified Graduate',
    className: "Fifth"

    }
]

