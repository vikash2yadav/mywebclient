import React from 'react'

const About = () => {
  return (
    <>
       <div style={styles.maindiv}>
       <h1 className='text-xl mb-10 text-white font-semibold ' >About Me</h1>
       <h5 className='text-l text-gray-300 mb-4' 
       style={{ fontFamily: "cursive"}}>Who can right clean and better code and develop web application.</h5>
       <p className='text-xs text-gray-300' 
       style={{ fontFamily: "cursive"}}
       > I am working in IT company from last 10 months as a full stack web developer.</p>
       </div>
    </>
  )
}

const styles = {
    maindiv: {
      width: '100%',
      height: 'auto',
      backgroundColor: '#666',
      padding: "100px",
      // minHeight: "200px"
    },
}

export default About