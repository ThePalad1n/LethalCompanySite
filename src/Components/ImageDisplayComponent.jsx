import React, { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import styled from 'styled-components';
import step2image5 from '../assets/step2image5.JPG';



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


const ImageDisplayComponent = () => {
    const [visibleImage, setVisibleImage] = useState(null);
  
    const toggleImage = (imageKey) => {
      setVisibleImage(visibleImage === imageKey ? null : imageKey);
    };
  

    return (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Body>
            <Button onClick={() => toggleImage("step2image5")}>Click Me :D</Button>
            {visibleImage === "step2image5" && (
              <>
                <StyledImage src={step2image5} alt="Step 1" />
                <Description>Watch the video and follow along. Make sure you have the mod pack.</Description>
              </>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

export default ImageDisplayComponent;
