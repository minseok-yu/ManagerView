import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../context/css/DatePicker.css';

function DatePickerComponent({ DateChange, mode }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        if (mode === 'week') {
            const monday = getMonday(date);
            DateChange(monday); // 월요일 날짜 전달
        } else {
            DateChange(date); // 선택한 날짜 전달
        }
    };

    // 선택한 날짜가 속한 주의 월요일을 계산하는 함수
    const getMonday = (date) => {
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); // 0은 일요일
        const monday = new Date(date.setDate(diff));
        return monday;
    };

    // 날짜를 yyyy-MM-dd 형식의 문자열로 변환하는 함수
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth()는 0부터 시작하므로 +1
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="date-picker-container">
            
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"
                placeholderText="yyyy/MM/dd"
                className="date-picker-input"
            />
        </div>
    );
}

export default DatePickerComponent;
