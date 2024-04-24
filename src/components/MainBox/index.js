import React from 'react';
import Button from '../Button';
import ButtonC from '../ButtonC';

const MainBox = () => {
  return (
    <>
      <div style={styles.maindiv}>
        <div style={styles.firsthalf}>
          <div className='text-xl mb-4' style={{ fontSize: '2.5rem',  fontFamily: "cursive", color: 'white' }}>This is Mr. vikash yadav</div>
          <p style={{ color: 'rgb(166, 168, 169)', textAlign: 'center',fontFamily: "cursive" }} className='mb-8'>A full stack web developer, programmer and smart coder. </p>
          
          {/* <ButtonC variant="outlined" 
          style={{ borderColor: 'white', color: 'white' }} 
          label="Hire Me !" 
          /> */}

          <Button className="px-5 py-2"
            label="Say Hi !"
            style={{
              color: 'white',
              border: '1px solid white',
              borderRadius: '5px'
          }}
          />

        </div>
        <div style={styles.secondhalf}>
          <img width={"300px"} src="https://img.freepik.com/premium-photo/blue-circle-with-man-s-head-circle-with-white-background_745528-3499.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

const styles = {
  maindiv: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#555',
    display: 'flex',
    padding: '100px',
    minHeight: "200px"
  },
  firsthalf: {
    padding: '20px',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  secondhalf: {
    padding: "0px 100px"
  }
};

export default MainBox;
