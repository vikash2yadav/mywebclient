import React from 'react';
import Button from '../Button';

const MainBox = () => {
  return (
    <>
      <div style={styles.maindiv}>
        <div style={styles.firsthalf}>
          <div className='text-xl text-gray-200 mb-4' style={{ fontSize: '2.8rem' }}>This Is Mr. Vikash Yadav</div>
          <p style={{ color: 'rgb(166, 168, 169)', textAlign: 'center',fontFamily: "cursive" }} className='mb-8'>A full stack web developer, programmer and smart coder. </p>

          <Button className="py-3 px-6 hover:bg-white hover:text-gray-700"
            label="View Works "
            style={{
              border: '1px solid white',
              transition: 'all 0.5s',
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
    backgroundColor: '#666',
    display: 'flex',
    padding: '120px 100px',
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
