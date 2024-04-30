import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';

const About = () => {
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
      <StyledDiv id="about" isVisible={isVisible}>
        <h1 style={{ fontSize: "40px" }} className='text-xl mb-4 text-center text-gray-700 font-semibold font-serif animate-on-scroll' >About Me</h1>
        <div className='w-full h-1 mb-20 flex justify-center'>
          <div className='w-10 h-1 bg-red-700 mb-20 text-center rounded-lg animate-on-scroll'></div>
        </div>

        <h1 className='text-m mb-10 font-semibold animate-on-scroll' style={{ letterSpacing: "2px" }}> WHO AM  I ?</h1>
      
      
        <p className='mb-5 text-gray-500 animate-on-scroll'>
          <span className='text-black font-semibold'>Hi I'm Vikash Yadav</span> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
        </p>

        <p className='mb-10 text-gray-500 animate-on-scroll'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        
        
        <div className='mb-20'>
          <details className="border-b-1 border-gray-300 mb-2 p-4  shadow-md bg-gray-50 animate-on-scroll">
            <summary className="font-semibold text-m text-red-600">10th</summary>
            <p className="pl-4 py-2 text-m text-gray-500">I completed 10th class with 81% and 99 percentile from Ahmedabad.</p>
          </details>
          <details className="border-b-1 border-g ray-300 mb-2 p-4  shadow-md bg-gray-50 animate-on-scroll">
            <summary className="font-semibold text-m text-red-600">12th</summary>
            <p className="pl-4 py-2 text-m text-gray-500">I completed 12th class with 81% and 99 percentile from Ahmedabad.</p>
          </details>
          <details className="border-b-1 border-gray-300 mb-2 p-4  shadow-md bg-gray-50 animate-on-scroll">
            <summary className="font-semibold text-m text-red-600">B.C.A.</summary>
            <p className="pl-4 py-2 text-m text-gray-500">I completed B.C.A. with 7 SGPA from Ahmedabad.</p>
          </details>
        </div>

        <h1 className='text-xl font-semibold animate-on-scroll'> <span style={{ color: 'red' }}>10</span> Projects completed</h1>
        <Button
          variant="outlined"
          className="mt-5 py-4 px-10 border text-gray-700 border-solid border-1 border-red-700 bg-white hover:bg-red-600 hover:text-white animate-on-scroll"
          style={{ transition: 'all 0.5s' }}
          label="Download CV"
        />
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  padding: 200px 100px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0px)' : 'translateY(40px)')};
  transition: opacity 0.8s, transform 1s;

  @media (max-width: 400px) {
    padding: 100px 40px;
  }
`;

export default About;
