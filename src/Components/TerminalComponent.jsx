import React from 'react';
import styled from 'styled-components';
import ImageDisplayComponent from './ImageDisplayComponent'; // Import the image component
import ImageDisplayComponentTwo from './ImageDisplayComponentTwo'; // Import the image component

const TerminalStyle = styled.div`
  font-family: 'Courier New', monospace;
  color: #8b0000;
  background: linear-gradient(to right, black, black); // Red gradient
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  margin: auto;
  overflow: auto;
  height: 70vh;
`;

const Title = styled.h1`
  color: #8b0000; // Or any color that fits the theme
  text-align: center;
`;

const DownloadSection = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const DownloadButton = styled.button`
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

const TerminalComponent = () => {
  // URLs to your Google Drive files
  const googleDriveUrl1 = 'https://www.youtube.com/watch?v=l78x5cADWJM&t=1253s';
  const googleDriveUrl2 = 'https://drive.google.com/drive/folders/1iu-8_sfByzhCsAUp3q9ltCFE2D12wmmS?usp=drive_link';

  return (
    <TerminalStyle>
      <Title>Welcome Valued Employee</Title>

      <DownloadSection>
        <p>Installation Instructions: </p>
        <ImageDisplayComponent />
        <p>Download the latest mod pack:</p>
        <br></br>
        <DownloadButton as="a" href={googleDriveUrl1} target="_blank" rel="noopener noreferrer">Download ZIP</DownloadButton>
      </DownloadSection>
<br></br><br></br>
      <DownloadSection>
        <p>Installation Instructions </p>
        <ImageDisplayComponentTwo />
        <p>Download the latest mod pack <b>with sound changes</b>:</p>
        <br></br>
        <DownloadButton as="a" href={googleDriveUrl2} target="_blank" rel="noopener noreferrer">Download ZIP</DownloadButton>
      </DownloadSection>
    </TerminalStyle>
  );
};


export default TerminalComponent;
