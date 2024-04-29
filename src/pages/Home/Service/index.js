import React from 'react'
import ServiceBox from '../../../components/ServiceBox'

const Service = () => {
  return (
    <>
      <div id="#service" style={styles.maindiv}>
        <h1 style={{ fontSize: "40px" }} className='text-xl text-center mb-4 text-gray-700 font-serif font-semibold' >My Services</h1>

        <div className='w-full h-1 mb-8 flex justify-center '>
          <div className='w-10 h-1 bg-red-700 mb-20 text-center rounded-lg'>
          </div>
        </div>

        <p className='mb-20 text-center text-gray-400 text-m'>These all are services, which is provided by me. if you want help contact me. </p>
        <div style={styles.seconddiv}>
          <ServiceBox title="Web & Mobile Design" description="this is ecommerce web application" logo="https://e7.pngegg.com/pngimages/227/326/png-clipart-website-development-mobile-app-development-application-software-web-application-web-design-web-design-logo.png" />
          <ServiceBox title="E-commerce" description="we are working for ecommerce" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFag6YWZ5i97XfY_gc_fPPlaPvNxPv9FkD5NyCKYbZCg&s" />
          <ServiceBox title="Web Development" description=" Donec eu cursus sem vitae tristique ante ibero" logo="https://i.pinimg.com/originals/ee/f5/ad/eef5addc3bf3c9a386ddf4d352c60272.jpg" />
          <ServiceBox title="Web & Mobile Design" description="this is ecommerce web application" logo="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
          <ServiceBox title="Web & Mobile Design" description="this is ecommerce web application" logo="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
          <ServiceBox title="Web & Mobile Design" description="this is ecommerce web application" logo="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
        </div>
      </div>
    </>
  )
}

const styles = {
  maindiv: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    // display: 'flex',
    padding: "100px 20px",
  },
  seconddiv: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'center'
  }
}
export default Service