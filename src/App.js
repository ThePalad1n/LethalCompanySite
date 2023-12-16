import React from 'react';
import TerminalComponent from '../src/Components/TerminalComponent';
import ImageDisplayComponent from './Components/ImageDisplayComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    {/* Use the `element` prop to render components */}
                    <Route path="/images" element={<ImageDisplayComponent />} />
                    <Route path="/" element={<TerminalComponent />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
