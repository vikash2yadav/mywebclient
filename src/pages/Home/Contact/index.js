// Contact.js

import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Box from "../../../components/Box"
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import { TfiWorld } from "react-icons/tfi";
import Input from "../../../components/Input"
import TextArea from "../../../components/TextArea"

const Contact = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 500); // Adjust the value as per your requirement
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div style={styles.maindiv} id="contact">
        <h1 id={`${props.title}`} style={{ fontSize: "40px" }} className='text-xl text-center font-serif mb-4 text-gray-700 font-semibold'>Contact Me</h1>
        <div className='w-full h-1 mb-8 flex justify-center '>
          <div className='w-10 h-1 bg-red-700 mb-20 text-center rounded-lg'></div>
        </div>

        <p className='mb-20 text-center text-gray-400 text-m'>These all are services, which is provided by me. if you want help contact me. </p>

        <div style={styles.seconddiv} className='mb-20'>
          <Box logo={<LocationOnIcon />} title="Address" add="198 West 21th Street, Suite 721 New York NY 10016" className={isVisible ? 'contact-item visible' : 'contact-item'} />
          <Box logo={<CallIcon />} title="Contact Number" description="29384349" className={isVisible ? 'contact-item visible' : 'contact-item'} />
          <Box logo={<MailIcon />} title="Email Address" description="vikash293@edfm.cdkc" className={isVisible ? 'contact-item visible' : 'contact-item'} />
          <Box logo={<TfiWorld />} title="Website" description="www.google.com" className={isVisible ? 'contact-item visible' : 'contact-item'} />
        </div>


        <div className='mt-5' style={styles.formContainer}>
          <form style={styles.form}>
            <p className='text-xs font-semibold text-red-600 mb-1'>We will find you.</p>
            <div style={styles.inputGroup}>
              <Input type="text"
                placeholder='Name'
                style={styles.input}
                className='mx-0' />
              <Input type="email"
                placeholder='Email'
                style={styles.input}
                className='mx-0' />
              <Input type="tel"
                placeholder='Phone'
                style={styles.input}
                className='mx-0' />
              <TextArea className=''
                style={{ ...styles.input, height: "100px" }}
                placeholder='Message' />
            </div>
            <div style={{ textAlign: 'center' }}>

              <Button label="Send"
                className="bg-red-600 hover:bg-white hover:text-gray-700 w-full border border-solid border-1 border-red-600 px-4 py-2 font-serif text-white rounded-lg" />

            </div>
          </form>
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
    padding: "200px 20px",
  },
  seconddiv: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-evenly',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '500px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '3px',
  },
  input: {
    color: 'black',
    padding: "10px",
    backgroundColor: '#f4f1f1',
    border: '0.5px solid gray',
    borderRadius: "5px",
    marginBottom: '8px',
    width: '100%',
  },
  button: {
    width: "100%",
  }
}

export default Contact;
