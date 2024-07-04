import React, { useState } from 'react';
import DatePickerComponent from "../../../forms/DatePicker";
import '../../../../context/css/Company/CompanyWeekContainer.css';
import DayInWeek from './DayInWeek';
import WeekInfo from './WeekInfo';

function WeekContainer() {
    const [date, setDate] = useState('');
    const [selectedText, setSelectedText] = useState('');

    // DatePickerComponent에서 전달된 새로운 날짜를 처리하는 함수
    const handleDateChange = (newDate) => {
        setDate(newDate);
        setSelectedText(''); // 날짜가 변경되면 선택된 텍스트 초기화
    };

    // 선택한 날짜가 속한 주의 월요일부터 금요일까지의 날짜를 계산하는 함수
    const getWeekDays = (startDate) => {
        const days = [];
        const start = new Date(startDate);
        for (let i = 0; i < 5; i++) {
            const date = new Date(start);
            date.setDate(start.getDate() + i);
            days.push(formatDateToKorean(date)); // 월-일-요일 형식으로 변환
        }
        return days;
    };

    // 날짜를 "월-일-요일" 형식으로 변환하는 함수
    const formatDateToKorean = (date) => {
        const options = { month: '2-digit', day: '2-digit', weekday: 'short' };
        return date.toLocaleDateString('ko-KR', options);
    };

    const weekDays = date ? getWeekDays(date) : [];

    const handleThisWeekInfo = () => {
        if (date) {
            const startDate = new Date(date);
            const endDate = new Date(date);
            endDate.setDate(startDate.getDate() + 4); // 금요일 날짜 설정

            const startDateStr = formatDateToKorean(startDate);
            const endDateStr = formatDateToKorean(endDate);

            setSelectedText(`이번주 잔반량 정보 (${startDateStr} ~ ${endDateStr})`);
        }
    };

    return (
        <div className="week-container">
            <div className="top-div">
                {/* Datepicker 컴포넌트를 렌더링하고, 선택한 날짜를 handleDateChange 함수로 전달 */}
                <DatePickerComponent DateChange={handleDateChange} mode="week" />
                {date && (
                    <div className="button-wrapper">
                        {weekDays.map((day, index) => (
                            <button key={index} className="day-button" onClick={() => setSelectedText(day)}>
                                {day}
                            </button>
                        ))}
                        <button className="day-button" onClick={handleThisWeekInfo}>
                            이번주 정보 보기
                        </button>
                    </div>
                )}
            </div>
            
            <div className="bottom-div">
                {selectedText && (
                    <>
                        {date ? (
                            <DayInWeek date={selectedText}/>
                        ) : (
                            <WeekInfo/>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default WeekContainer;
