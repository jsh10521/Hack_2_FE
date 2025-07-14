import React, { useState } from 'react';

function ClickableBox({ onClick, children }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
        if (onClick) {
            onClick();
        }
    };

    return (
        <div>
            {children}
        </div>
    );
}

export default function App() {
  const handleBoxClick = () => {
    alert('박스가 클릭되었습니다!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <ClickableBox onClick={handleBoxClick}>
        여기를 클릭하세요
      </ClickableBox>
    </div>
  );
}