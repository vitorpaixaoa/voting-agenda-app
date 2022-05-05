import React from 'react'
import {styled} from 'baseui';
import Sidebar from './sidebar.js';
import DashboardHeader from './dashboardHeader';
import Home from '../pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vote from '../pages/vote.js';
const Dashboard = () => {
    const [open, setOpen] = React.useState(false);
    return (
        
        <DashboardWrapper>
            <Router>
                
                    <Sidebar open={open} setOpen={setOpen} />
                    <DashboardHeader open={open} setOpen={setOpen} />
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/vote/:id' element={<Vote/>}/>
                    </Routes>
            </Router>
        </DashboardWrapper>
    )
}
export default Dashboard
const DashboardWrapper = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: '#F7F8FC',
    position: 'relative',
    paddingLeft: '285px',
    paddingRight: '2rem',
    width: '100%',
    minHeight: '100vh',
    maxWidth: '100vw',
    boxSizing: 'border-box',
    '@media (max-width: 768px)': {
        paddingLeft: '0',
    }
});