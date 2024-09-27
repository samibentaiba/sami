import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Like = ({ isLiked, onClick, size = 'medium' }) => {
  // Define styles for the button
  const styles = {
    button: {
      backgroundColor: '#f0f0f0', // Light gray background
      border: '1px solid rgba(255, 255, 255, 0.5)', // Transparent white-gray border
      borderRadius: '8px', // Rounded corners
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.2s ease, border-color 0.2s ease', // Smooth transform and border color transition
      outline: 'none',
      padding: '4px', // Add some padding
    },
    small: {
      width: '37px',
      height: '37px',
      fontSize: '16px', // Adjust icon size
    },
    medium: {
      width: '48px',
      height: '48px',
      fontSize: '20px', // Adjust icon size
    },
    large: {
      width: '60px',
      height: '60px',
      fontSize: '24px', // Adjust icon size
    },
    icon: {
      color: 'purple', // Purple color for the heart
      transition: 'color 0.2s ease', // Smooth color transition
    },
  };

  return (
    <button
      style={{
        ...styles.button,
        ...(size === 'small' ? styles.small : size === 'large' ? styles.large : styles.medium),
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {isLiked ? (
        <FaHeart style={styles.icon} />
      ) : (
        <FaRegHeart style={styles.icon} />
      )}
    </button>
  );
};

export default Like;
