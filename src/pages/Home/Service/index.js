import React from 'react'
import ServiceBox from '../../../components/ServiceBox'

const Service = () => {
  return (
    <>
    <div style={styles.maindiv}>
    <h1 className='text-xl mb-5 text-white font-semibold' >Services</h1>
   
     <div style={styles.seconddiv}>
    <ServiceBox />
    <ServiceBox />
    <ServiceBox />
    </div> 
    </div>
    </>
  )
}

const styles = {
    maindiv: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#222',
        // display: 'flex',
        padding: "50px"
      },
      seconddiv: {
        display: 'flex',
        flexDirection: 'row',
      }
}
export default Service