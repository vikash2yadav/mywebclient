import React from 'react'
import Button from '../../../components/Button'

const About = () => {
  return (
    <>
       <div style={styles.maindiv}>
        <div>
       <h1 className='text-xl mb-10 text-gray-100 font-semibold font-serif' >About Me</h1>
       
       <h5 className='text-l text-gray-300 mb-4' 
       >Who can right clean and better code and develop web application.</h5>
       <p className='text-xs text-gray-300 mb-10' 
      //  style={{ fontFamily: "cursive"}}
       > I am working in IT company from last 10 months as a full stack web developer.</p>

       <Button variant="outlined" 
       className="mt-5 py-4 px-10 hover:bg-white hover:text-gray-700"
           style={{
            border: '1px solid white',
            transition: '0.5s'
        }}
          label="Download CV" 
          />
       </div>
       </div>


    </>
  )
}

const styles = {
    maindiv: {
      color: "white",
      width: '100%',
      height: 'auto',
      backgroundColor: '#444',
      padding: "120px 100px",
    },
}

export default About