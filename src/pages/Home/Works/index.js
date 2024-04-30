import React from 'react';
import './works.css'; // Importing the CSS file
import SmallBox from '../../../components/smallBox';

const Works = () => {
    return (
        <>
            <div style={styles.maindiv} id="project">
                <h1 style={{ fontSize: "40px" }} className='text-xl mb-4 text-center font-serif text-gray-700 font-semibold'>Our Projects</h1>

                <div className='w-full h-1 mb-8 flex justify-center '>
                    <div className='w-10 h-1 bg-red-700 mb-20 text-center rounded-lg'></div>
                </div>

                <p className='mb-20 mx-4 text-center text-gray-400 text-m'>These all are services, which is provided by me. if you want help contact me. </p>

                <div style={styles.seconddiv} >
                    <div style={{ height: "300px" }} className='w-1/3 hover:opacity-50'>
                        <img style={styles.img} className='img w-full h-full' src="https://cdn.educba.com/academy/wp-content/uploads/2019/05/web-application.gif" alt="" />
                    </div>
                    <div style={{ height: "300px" }} className='w-1/3 hover:opacity-50 '>
                        <img style={styles.img} className='img w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xhR9MeK898nS2zlrRG9wcL1AOR_-gnR1ww&s" alt="" />
                    </div>
                    <div style={{ height: "300px" }} className='w-1/3  hover:opacity-50'>
                        <img style={styles.img} className='img w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjukhloxWLT9iMSdNB11_E3UYrTeSNqhv-nQ&s" alt="" />
                    </div>
                    <div style={{ height: "300px" }} className='w-1/3 hover:opacity-50'>
                        <img style={styles.img} className='img w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xhR9MeK898nS2zlrRG9wcL1AOR_-gnR1ww&s" alt="" />
                    </div>
                    <div style={{ height: "300px" }} className='w-1/3 hover:opacity-50'>
                        <img style={styles.img} className='img w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0KizZsbacUiCja9vMoHcTex3XwsVth9Ifw&s" alt="" />
                    </div>
                    <div style={{ height: "300px" }} className='w-1/3 hover:opacity-50'>
                        <img style={styles.img} className='img w-full  h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5YfhoAu8xTxSZaErnZ6ObWG9Mmw3DPbrMw&s" alt="" />
                    </div>
                </div>

                <div style={styles.seconddiv} className='mb-20'>
                    <SmallBox title="10" description="Awards" />
                    <SmallBox title="2" description="Complete Projects" /> 
                    <SmallBox title="4" description="Happy Customers" />
                    <SmallBox title="300" description="Cups of tea" />
                </div>



            </div>
        </>
    )
}

const styles = {
    maindiv: {
        // marginTop: "200px",
        width: '100%',
        height: 'auto',
        backgroundColor: '#fff',
        color: "white",
        padding: "200px 0px",
    },
    seconddiv: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'space-evenly',
        marginBottom: "100px"
    },
    img: {
        transition: 'transform 0.5s ease',
    }
}

export default Works;
