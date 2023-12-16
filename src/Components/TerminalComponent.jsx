import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const TerminalStyle = styled.div`
  font-family: 'Courier New', monospace;
  color: green;
  background: linear-gradient(to right, black, black); // Red gradient
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  margin: auto;
  overflow: auto;
  height: 70vh;
`;

const Title = styled.h1`
  color: green; // Or any color that fits the theme
  text-align: center;
`;

const DownloadSection = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const DownloadButton = styled.button`
  background-color: green;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;

const SearchBarContainer = styled.div`
  margin-top: 20px;
`;

const TerminalComponent = () => {
  const handleDownload = () => {
    // Logic for file download
    window.location.href = '/path/to/mock-zip-file.zip'; // Replace with actual path
  };

  return (
    <TerminalStyle>
      <Title>Welcome Valued Employee</Title>

      <DownloadSection>
        <p>Download the latest mod pack:</p>
        <DownloadButton onClick={handleDownload}>Download ZIP</DownloadButton>
      </DownloadSection>
      <DownloadSection>
        <p>Download the latest mod pack <b>with sound changes</b>:</p>
        <DownloadButton onClick={handleDownload}>Download ZIP</DownloadButton>
      </DownloadSection>
      <SearchBarContainer>
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
      </SearchBarContainer>
    </TerminalStyle>
  );
};

export default TerminalComponent;
