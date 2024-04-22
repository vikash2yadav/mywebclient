import React from 'react'
import ButtonC from '../ButtonC'

const MainBox = () => {
  return (
    <>
      <div style={styles.maindiv} >

        <div style={styles.firsthalf}>
          <div className='text-xl' style={{ fontSize: '2rem', color: 'white' }}>This Is Vikash Yadav</div>
          <p style={{ color: 'rgb(166, 168, 169)' }} className='mb-5'>A full stack web developer</p>

              <ButtonC variant="outlined" style={{ borderColor: 'white', color: 'white' }} label="Say Hi !" />
              {/* <ButtonC className="mx-2" label="Hire me !" variant="outlined" style={{ color: 'white', borderColor: 'white' }} /> */}
        </div>
        <div style={styles.secondhalf}>
          <img width={"300px"} src="https://img.freepik.com/premium-photo/blue-circle-with-man-s-head-circle-with-white-background_745528-3499.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

const styles = {
  maindiv: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#555',
    display: 'flex',
    padding: "50px"
  },
  firsthalf: {
    padding: "20px",
    width: "50%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  secondhalf: {

  },

}
export default MainBox