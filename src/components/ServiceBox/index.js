import React from 'react'
import { Link } from 'react-router-dom'

const ServiceBox = (props) => {
  return (
    <>
      <Link>
        <div className='mx-5 bg-gray-400 h-30 hover:bg-gray-500 hover:shadow-md hover:-translate-y-3' style={styles.maindiv} >
          <div style={styles.imageMainDiv}>
            <img style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              className='mb-5'
              src={props.logo} alt="" />
          </div>
          <h1
            style={{ fontSize: "20px", fontFamily: "serif" }}
            className='text-white font-semibold mb-3'>{props.title}</h1>
          <p style={{ color: 'rgb(50, 50, 50)'}} className='text-xs'>
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
    borderRadius: "5px",
    padding: "30px",
    marginBottom: "30px",
    textAlign: "center",
    width: "280px",
    height: "250px",
    transition: 'all 0.5s',

  },
  imageMainDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  }
}

export default ServiceBox