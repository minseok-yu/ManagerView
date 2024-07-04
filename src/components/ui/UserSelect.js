import React from 'react';

function UserSelect({ onSelect }) {
    const handleUserChange = (event) => {
        onSelect(event.target.value);
    };

    return (
        <div style={{ width: '100%', height:'100%' }}>
            <h3>조회할 사용자를 고르세요.</h3>
            <select style={{ width: '100%' }} onChange={handleUserChange}>
                {/* 서버에서 받아온 데이터를 기반으로 동적으로 옵션을 생성합니다. */}
                <option value="사용자1">사용자 1</option>
                <option value="사용자2">사용자 2</option>
                <option value="사용자3">사용자 3</option>
            </select>
        </div>
    );
}

export default UserSelect;
