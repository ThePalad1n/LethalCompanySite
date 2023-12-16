import React from 'react';
import TerminalComponent from '../src/Components/TerminalComponent';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
const App = () => {
    return (
        <div>
            {/* <Router>
                <Routes>
                    <Route path="/login"
                        element={<LoginPage/>}/>
                </Routes>
            </Router> */}
            <TerminalComponent/>
        </div>
    );
};

export default App;
