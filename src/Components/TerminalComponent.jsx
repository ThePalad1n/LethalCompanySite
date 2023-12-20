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
  const handleDownload = (fileName) => {
    const link = document.createElement('a');
    link.href = `src/assets/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link); // Append to body
    link.click(); // Simulate click
    document.body.removeChild(link); // Remove the link when done
  };

  return (
    <TerminalStyle>
      <Title>Welcome Valued Employee</Title>

      <DownloadSection>
        <p>Installation Instructions: </p>
        <ImageDisplayComponent />
        <p>Download the latest mod pack:</p>
        <DownloadButton onClick={() => handleDownload('The_Company.zip')}>Download ZIP</DownloadButton>
      </DownloadSection>

      <DownloadSection>
        <p>Installation Instructions </p>
        <ImageDisplayComponentTwo />
        <p>Download the latest mod pack <b>with sound changes</b>:</p>
        <DownloadButton onClick={() => handleDownload('The_Company_Sounds.zip')}>Download ZIP</DownloadButton>
      </DownloadSection>
    </TerminalStyle>
  );
};

export default TerminalComponent;
