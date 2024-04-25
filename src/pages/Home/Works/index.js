import React from 'react'
import Button from '../../../components/Button';

const Works = () => {
    return (
        <>
            <div style={styles.maindiv}>
                <h1 className='text-xl mb-10 font-serif text-gray-100 font-semibold'>Works</h1>
                <div style={styles.seconddiv}>
                    <img className='h-100 w-80 mb-5' src="https://cdn.educba.com/academy/wp-content/uploads/2019/05/web-application.gif" alt="" />
                    <img className='h-80 w-100 mb-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9eIgRDtu6PrfZ6_72d_Z9QG52HJPC61QWqTy8tKgww&s" alt="" />
                    <img className='h-80 w-80 mb-5' src="https://appinventiv.com/wp-content/uploads/2017/10/Ways-in-Which-Web-Application-Development-is-Changing.png" alt="" />
                </div>

                <Button
                    style={{
                        textAlign: 'center', border: "1px solid white",
                        transition: '0.5s'
                    }}
                    className="font-semibold font-sans w-full p-4 mt-5 hover:bg-white hover:text-gray-700"
                    label="More Works" />
            </div>
        </>
    )
}


const styles = {
    maindiv: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#333',
        padding: "120px 100px",
        color: "white",
    },
    seconddiv: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'space-around',
    }
}

export default Works