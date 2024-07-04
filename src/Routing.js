import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/ui/Header';
import InitialPage from './page/InitialPage';
import InformationPage from './page/UserInformationPage';
import RevisePage from './page/RevisePage';
import RegisterPage from './page/RegisterPage';
import BoardPage from './page/BoardPage';
import CompanyInformation from './page/CompanyInformation';

function Routing(){
    return(
        <BrowserRouter> 
            <Routes>
                <Route path="/"  element ={<InitialPage/>}/>
                <Route path="/pages/UserInformationPage" element={<InformationPage/>}/>
                
                <Route path="/pages/RevisePage" element={<RevisePage/>}/>
                <Route path="/pages/RegisterPage" element={<RegisterPage/>}/>
                <Route path="/pages/BoardPage" element={<BoardPage/>}/>
                <Route path="/pages/CompanyInformationPage" element={<CompanyInformation/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routing;