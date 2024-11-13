import { useState } from 'react';

const useToast = () => {
  const [toast, setToast] = useState({ show: false, message: '' });

  const showToast = (message) => {
    setToast({ show: true, message });
  };

  const hideToast = () => {
    setToast({ show: false, message: '' });
  };

  return { toast, showToast, hideToast };
};

export default useToast;