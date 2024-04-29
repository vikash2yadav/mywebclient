import React from 'react'
import { Link } from 'react-router-dom'

const ServiceBox = (props) => {
  return (
    <>
      <Link>
        <div className='mx-5 h-30 hover:bg-blue-600 hover:shadow-md hover:-translate-y-2' style={styles.maindiv} >
          <div style={styles.imageMainDiv}>
            <img style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              className='mb-5'
              src={props.logo} alt="" />
          </div>
          <h1 className='text-black text-m mb-1'>{props.title}</h1>

            <div className='w-full h-0.5 mb-8 flex justify-center '>
          <div className='w-8 h-0.5 bg-red-700 mb-20 text-center rounded-lg'>
          </div>
        </div>

          <p className='text-xl text-gray-500'>
            {props.description}
          </p>
        </div>
      </Link>
    </>
  )
}

const styles = {
  maindiv: {
    border: '1px solid white',
    padding: "30px ",
    marginBottom: "30px",
    textAlign: "center",
    width: "350px",
    fontFamily: "Arial",
    height: "300px",
    transition: 'all 0.5s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Add box shadow here
  },
  imageMainDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}

export default ServiceBox