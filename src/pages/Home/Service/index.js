import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ServiceBox from '../../../components/ServiceBox';

const Service = () => {
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
    <StyledDiv isVisible={isVisible} id="service">
      <h1 style={{ fontSize: "40px" }} className='text-xl text-center mb-4 text-gray-700 font-serif font-semibold' >My Services</h1>
      <div className='w-full h-1 mb-8 flex justify-center '>
        <div className='w-10 h-1 bg-red-700 mb-20 text-center rounded-lg'></div>
      </div>
      <p className='mb-20 text-center text-gray-400 text-m'>These all are services, which is provided by me. if you want help contact me. </p>
      <ServiceContainer>
        <ServiceBox title="Web & Mobile Design" description="this is ecommerce web application" logo="https://e7.pngegg.com/pngimages/227/326/png-clipart-website-development-mobile-app-development-application-software-web-application-web-design-web-design-logo.png" />
        <ServiceBox title="E-commerce" description="we are working for ecommerce" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFag6YWZ5i97XfY_gc_fPPlaPvNxPv9FkD5NyCKYbZCg&s" />
        <ServiceBox title="Web Development" description=" Donec eu cursus sem vitae tristique ante ibero" logo="https://i.pinimg.com/originals/ee/f5/ad/eef5addc3bf3c9a386ddf4d352c60272.jpg" />
        <ServiceBox title="Web & Mobile Design" description="this is ecommerce web application" logo="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
        <ServiceBox title="Web & Mobile Design" description="this is ecommerce web application" logo="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
        <ServiceBox title="Web & Mobile Design" description="this is ecommerce web application" logo="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
      </ServiceContainer>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  padding: 200px 20px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0px)' : 'translateY(40px)')};
  transition: opacity 0.8s, transform 1s;

  @media (max-width: 400px) {
    padding: 100px 20px;
  }
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Service;
