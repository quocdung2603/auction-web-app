import React from 'react';

// ex button test
// variant="primary"
// size="small"
// rightIcon={<FaArrowRight />}
// onClick={() => alert('Small Button Clicked!')}
// >
// Small Button
// </Button>


interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'icon' | 'border';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  bg_color?: string;
  textColor?: string;
  size?: 'small' | 'medium' | 'large' | 'custom';
  iconPosition?: 'left' | 'right' | 'both';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  variant = 'primary',
  leftIcon,
  rightIcon,
  bg_color,
  textColor,
  size = 'small',
  iconPosition = 'left',
}) => {
  let className = `flex items-center justify-center rounded-[10px]`;

  switch (size) {
    case 'small':
      className += ' px-4 py-2 text-sm';
      break;
    case 'large':
      className += ' px-8 py-3 text-base';
      break;
    case 'custom':
      className += ' px-14 py-2 text-sm';
      break;
    default:
      className += ' px-5 py-2.5 text-base';
      break;
  }

  switch (variant) {
    case 'primary':
      className += ' text-white hover:bg-[#e68a00]';
      break;
    case 'secondary':
      className += ' text-gray-700 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100';
      break;
    case 'outline':
      className += ' text-[#FF4949] border border-[#FF4949] bg-transparent hover:bg-[#FF4949] hover:text-white disabled:border-gray-300 disabled:text-gray-300';
      break;
    case 'icon':
      className += ' text-gray-700 bg-transparent hover:bg-gray-200 disabled:text-gray-400';
      break;
    case 'border':
      className += ' text-[#FF4949] border-2 border-[#FF4949] bg-white font-bold';
      break;
    default:
      break;
  }

  const layoutClass = () => {
    switch (iconPosition) {
      case 'left':
        return 'justify-start';
      case 'right':
        return 'justify-end';
      case 'both':
        return 'justify-between';
      default:
        return 'justify-center';
    }
  };

  return (
    <button
      className={`${className} ${layoutClass()}`}
      style={{
        backgroundColor: bg_color,
        color: textColor,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {(iconPosition === 'left' || iconPosition === 'both') && leftIcon && (
        <span className="mr-2">{leftIcon}</span>
      )}

      <span className="flex-1 text-center">
        {children}
      </span>

      {(iconPosition === 'right' || iconPosition === 'both') && rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </button>
  );
};


export default Button;