import React, { useState } from 'react';
import Header from '../components/ui/Header';
import UserSelect from '../components/ui/UserSelect';
import MainNavigation from '../components/ui/Navigation/MainNavgation';
import '../context/css/UserInformationPage.css';
import DatePickerComponent from '../components/forms/DatePicker';

function UserInformationPage() {
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedWeek, setSelectedWeek] = useState(null);

    const handleSelectedUser = (user) => {
        setSelectedUser(user);
        setSelectedDate(null); // 사용자가 변경되면 날짜 선택 초기화
        setSelectedWeek(null); // 사용자가 변경되면 주 선택 초기화
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleWeekChange = (monday) => {
        setSelectedWeek(monday);
    };

    return (
        <div>
            <Header />
            <MainNavigation />
            <div className="Content">
                <div className="UserSelectContainer">
                    <UserSelect onSelect={handleSelectedUser} />
                </div>
                {selectedUser ? (  // 사용자가 선택된 경우에만 Info 섹션을 보여줌
                    <div className="Info">
                        <h1 style={{ textAlign: 'center', margin: 'auto' ,flex:'1'}}>{selectedUser}의 잔반 정보</h1>
                        <div style={{ display: 'flex', flexDirection: 'column' ,flex:'9'}}>
                            <div style={{ display: 'flex', flexDirection: 'row' ,flex:'1'}}>
                                <div style={{ flex: '1', flexDirection: 'column' }}>
                                    <h4>조회할 날짜 선택</h4>
                                    <DatePickerComponent DateChange={handleDateChange} mode="date" />
                                    {selectedDate && (
                                        <div>
                                            <p style={{ marginTop: '10px' }}>선택한 날짜: {selectedDate.toLocaleDateString()}</p>
                                            <div className='dayinfo'>
                                                <h4>퇴식 시간: 11:78am</h4>
                                                <h4>잔반 무게: 120g</h4>
                                                <h4>잔반 사진</h4>
                                                <h4>몇번쨰로 적게 긴지/총 식사 인원</h4>
                                            </div>
                                        </div>
                                        
                                    )}
                                </div>
                                <div style={{ flex: '1', flexDirection: 'column' }}>
                                    <h4>조회할 주 선택</h4>
                                    <DatePickerComponent DateChange={handleWeekChange} mode="week" />
                                    {selectedWeek && (
                                        <div>
                                            <p style={{ marginTop: '10px' }}>선택한 주의 월요일: {selectedWeek.toLocaleDateString()}</p>
                                            <div className='dayinfo'>
                                                <h4>이번주 잔반량..그래프</h4>
                                                <h4>몇번쨰로 적게 남긴지/총 식사 인원</h4>
                                            </div>
                                        </div>
                                        
                                    )}
                                </div>
                            </div>
                            <div style={{ flex: '1', flexDirection: 'column' ,flex:'1'}}>
                                <h4>조회할 달 선택</h4>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default UserInformationPage;
