import React from 'react'

const ServiceBox = () => {
  return (
    <>
    <div className='mx-5' style={styles.maindiv} >
        <div style={styles.imgdiv}>
        {/* <img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" alt="" /> */}
        </div>
    <h1 className='text-xl text-blue-400'>Web & Mobile Design</h1>
    <p className='text-sm text-white'>
      this is ecommerce web application
    </p>
    </div>
    </>
  )
}

const styles = {
    maindiv:{
        border: '1px solid white',
        borderRadius: "5px",
        padding: "30px"
    },
    imgdiv:{
      width: '100px',
      height:"100px",
      borderRadius: "50%",
      display: 'flex',
      justifyContent: 'center',
      alignItem: 'center'
    }
}

export default ServiceBox