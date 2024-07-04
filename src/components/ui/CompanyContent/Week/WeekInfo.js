import React from 'react';
import WeekTable from '../../../../context/image/WeekTable.png';

function WeekInfo() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex' }}>
            <div style={{ flex: '3' }}>
                <img src={WeekTable} alt="주간 정보 테이블" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
            
            <div style={{ flex: '7', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h5>
                    이번주 잔반량 정보 (월요일부터 금요일까지)
                </h5>
            </div>
        </div>
    );
}

export default WeekInfo;
