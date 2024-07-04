import { Link } from "react-router-dom";
import React, { useState } from 'react';
import '../../../context/css/Navigation/CompanyNav.css';
import WeekContainer from "../CompanyContent/Week/WeekContainer";
import MonthContainer from "../CompanyContent/Month/MonthContainer";
function CompanyNavigation(){
    const [selectedMenu, setSelectedMenu] = useState(null); // 기본적으로 선택된 메뉴 없음

    const handleMenuChange = (menu) => {
        setSelectedMenu(menu === selectedMenu ? null : menu); // 클릭된 메뉴와 현재 선택된 메뉴가 같으면 선택 해제
    };
    return( 
        <div style={{display: 'flex', flexDirection : 'row', height: '100%', width: '100%'}}>
            <nav className="company-navigation" style={{flex: '1'}}>
                <ul>
                    
                    <li>
                        <span onClick={() => handleMenuChange('주 별 조회')}><p style={{fontSize: '1em', textAlign: 'center'}}>주 별 조회</p></span>
                    </li>
                    <li>
                        <span onClick={() => handleMenuChange('달 별 조회')}><p style={{fontSize: '1em', textAlign: 'center'}}>달 별 조회</p></span>  
                    </li>
                    
                    
                </ul>
            </nav>
             {/* 조건부 렌더링 */}
             <div style={{flex: '9'}}>
                {selectedMenu === '주 별 조회' && <WeekContainer />}
                {selectedMenu === '달 별 조회'&&  <MonthContainer />}
             </div>
            
        </div>
    )
}
export default CompanyNavigation;