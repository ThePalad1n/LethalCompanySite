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
  const handleDownload = () => {
    // Logic for file download
    window.location.href = 'src\assets\The_Company.zip'; // Replace with actual path
  };

  return (
    <TerminalStyle>
      <Title>Welcome Valued Employee</Title>

      <DownloadSection>
      <p>Installation Instructions: </p>
      <ImageDisplayComponent />
        <p>Download the latest mod pack:</p>
        <DownloadButton onClick={handleDownload}>Download ZIP</DownloadButton>
      </DownloadSection>
      <DownloadSection>
      <p>Installation Instructions: </p>
      <ImageDisplayComponentTwo />
        <p>Download the latest mod pack <b>with sound changes</b>:</p>
        <DownloadButton onClick={handleDownload}>Download ZIP</DownloadButton>
      </DownloadSection>
    </TerminalStyle>
  );
};

export default TerminalComponent;
