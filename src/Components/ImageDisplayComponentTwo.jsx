import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import styled from 'styled-components';



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

const Buttonn = styled.button`
  background-color: #8b0000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
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
            <Buttonn onClick={() => toggleImage("step2image5")}>Click Me :D</Buttonn>
            <br></br>
            {visibleImage === "step2image5" && (
              <>
                <iframe width="1000" height="600" src="https://www.youtube.com/embed/TqWcSyWu4CY?si=LCFK8J1NW9n6_F7R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <Description>Watch the video and follow along. Make sure you have the mod pack.</Description>
              </>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

export default ImageDisplayComponentTwo;
