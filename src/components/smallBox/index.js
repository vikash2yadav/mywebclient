import React from 'react'
import { Link } from 'react-router-dom'

const SmallBox = (props) => {
  return (
    <>
      <div className='mx-5 h-30 hover:shadow-md' style={styles.maindiv} >
        <div style={styles.imageMainDiv}>

        </div>
        <h1
          className='text-black text-4xl font-bold text-red-600 mb-3'>{props.title}</h1>

        <p className='text-m text-gray-500'>
          {props.add ? (props.add)
            : (<Link className='text-xl text-gray-600'>    
              {props.description}
            </Link>
            )
          }
        </p>
      </div>
    </>
  )
}


const styles = {
  maindiv: {
    border: '1px solid white',
    borderRadius: "5px",
    padding: "20px 10px",
    paddingBottom:"30px",
    textAlign: "center",
    width: "250px",
    height: "auto",
    transition: 'all 0.5s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box shadow here
  },
  imageMainDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}

export default SmallBox