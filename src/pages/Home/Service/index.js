import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ServiceBox from "../../../components/ServiceBox";
import { servicesData } from "../../../constant/sampleData";

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 500); // Adjust the value as per your requirement
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledDiv isVisible={isVisible} id="service">
      <h1 className="text-5xl text-center mb-4 text-gray-700 font-serif font-semibold">
        My Services
      </h1>
      <div className="w-full h-1 mb-8 flex justify-center ">
        <div className="w-10 h-1 bg-red-700 mb-20 text-center rounded-lg"></div>
      </div>
      <p className="mb-20 text-center text-gray-400 text-m">
        These all are services, which is provided by me. if you want help
        contact me.{" "}
      </p>
      <ServiceContainer>
        {servicesData?.map((item) => (
          <ServiceBox
            title={item?.title}
            description={item?.description}
            logo={item?.src}
          />
        ))}
      </ServiceContainer>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  padding: 80px 20px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0px)" : "translateY(40px)"};
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
