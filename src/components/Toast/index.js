import React, { useEffect } from 'react';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 right-5 bg-gray-800 text-white p-4 rounded-md shadow-lg z-50 animate-toastAnimation">
      <div className="toast-content">
        {message}
      </div>
    </div>
  );
};

export default Toast;