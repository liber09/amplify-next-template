import React, { FC, CSSProperties, ReactNode, MouseEvent } from 'react';

interface DynamicButtonProps {
  text: ReactNode;
  backgroundColor?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const DynamicButton: FC<DynamicButtonProps> = ({ text, backgroundColor, onClick }) => {
  const buttonStyle: CSSProperties = {
    backgroundColor: backgroundColor || 'blue', // Default to blue if no backgroundColor is provided
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontSize: '24px',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default DynamicButton;
