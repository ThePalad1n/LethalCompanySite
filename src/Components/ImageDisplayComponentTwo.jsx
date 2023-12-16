import React, { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import styled from 'styled-components';
import image1 from '../assets/image1.JPG';
import image2 from '../assets/image2.JPG';
// import image3 from '../assets/image3.JPG';
// import image4 from '../assets/image4.JPG';
// import image5 from '../assets/image5.JPG';
// import image6 from '../assets/image6.JPG';
// import step2image1 from '../assets/step2image1.JPG';
// import step2image2 from '../assets/step2image2.JPG';
// import step2image3 from '../assets/step2image3.JPG';
// import step2image4 from '../assets/step2image4.JPG';
// import step2image5 from '../assets/step2image5.JPG';



const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 100vh;
  display: block; // or none initially, depending on your preference
  margin-top: 10px;
`;

const Description = styled.p`
  color: #8b0000; // Adjust color as needed
  margin-top: 10px;
`;


const ImageDisplayComponentTwo = () => {
    const [visibleImage, setVisibleImage] = useState(null);
  
    const toggleImage = (imageKey) => {
      setVisibleImage(visibleImage === imageKey ? null : imageKey);
    };
  

    return (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Body>
            <Button onClick={() => toggleImage("image1")}>Step 1:</Button>
            {visibleImage === "image1" && (
              <>
                <StyledImage src={image1} alt="Step 1" />
                <Description>Description for Step 1</Description>
              </>
            )}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Body>
            <Button onClick={() => toggleImage("image2")}>Step 2:</Button>
            {visibleImage === "image2" && (
              <>
                <StyledImage src={image2} alt="Step 2" />
                <Description>Description for Step 2</Description>
              </>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

export default ImageDisplayComponentTwo;
