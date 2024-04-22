import React from 'react'
import ButtonC from '../../../components/ButtonC'

const About = () => {
  return (
    <>
      <div style={styles.maindiv}>
      <h1 className='text-xl mb-5 text-white font-semibold ' >Contact Us</h1>
      

      <div style={styles.seconddiv}>
          <form action="">
        <div style={{display: 'flex'}} className='mb-3 w-full'>
        <input type="text" 
        placeholder='name' 
        style={{color: 'white' ,padding:"10px", backgroundColor: '#444', border: '1px solid white', borderRadius: "5px"}} 
        className='mx-1'/>

        <input type="email" 
        placeholder='email' 
        style={{color: 'white' ,padding:"10px", backgroundColor: '#444', border: '1px solid white', borderRadius: "5px"}} 
        className='mx-1'/>
        </div>
        <div>
        <textarea className='mb-3'
        style={{color: 'white' , padding:"10px", backgroundColor: '#444', border: '1px solid white', borderRadius: "5px"}} 
        cols="50" rows="3" placeholder='Message'></textarea>
        </div>
        <div><ButtonC label="Send" variant="contained" color="secondary" style={{width:"30%"}} /></div>
        </form>
        </div>
        </div>
    </>
  )
}

const styles = {
  maindiv: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#444',
    // display: 'flex',
    padding: "50px"
  },
  seconddiv: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
  }
}

export default About