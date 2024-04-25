import React from 'react';
import ButtonC from '../../../components/ButtonC';

const Contact = (props) => {
  return (
    <>
      <div style={styles.maindiv}>
        <h1 id={`${props.title}`} className='text-xl font-serif mb-10 text-gray-100 font-semibold'>Contact Us</h1>

        <div style={styles.formContainer}>
          <form style={styles.form}>
            <div style={styles.inputGroup}>
              <input type="text"
                     placeholder='Name'
                     style={styles.input}
                     className='mx-0'/>
              <input type="email"
                     placeholder='Email'
                     style={styles.input}
                     className='mx-0'/>
             <input type="tel"
                     placeholder='Phone'
                     style={styles.input}
                     className='mx-0'/>
            <textarea className=''
                      style={{...styles.input, height: "100px"}}
                      placeholder='Message'/>
                      </div>
            <div style={{textAlign: 'center'}}>
              <ButtonC label="Send" variant="contained" color="secondary" style={styles.button}/>
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
    backgroundColor: '#555',
    padding: "100px",
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
    marginBottom: '10px',
  },
  input: {
    color: 'white',
    padding: "10px",
    backgroundColor: '#222',
    border: '1px solid white',
    borderRadius: "5px",
    marginBottom: '10px',
    width: '100%',
  },
  button: {
    width: "100%",
  }
}

export default Contact;
