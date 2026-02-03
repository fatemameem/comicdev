import React from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  isVisible: boolean;
}

export const Notification: React.FC<NotificationProps> = ({
  message,
  type,
  onClose,
  isVisible
}) => {
  if (!isVisible) return null;

  const bgColor = type === 'success' 
    ? 'bg-green-100 dark:bg-green-900 border-green-500' 
    : 'bg-red-100 dark:bg-red-900 border-red-500';
  
  const textColor = type === 'success' 
    ? 'text-green-800 dark:text-green-200' 
    : 'text-red-800 dark:text-red-200';

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
      <div className={`${bgColor} ${textColor} border-2 rounded-lg shadow-comic dark:shadow-comic-dark p-4 max-w-md mx-auto flex items-center gap-3`}>
        {type === 'success' ? (
          <CheckCircle size={20} className="text-green-600 dark:text-green-400 shrink-0" />
        ) : (
          <AlertCircle size={20} className="text-red-600 dark:text-red-400 shrink-0" />
        )}
        <span className="font-comic font-medium flex-1">{message}</span>
        <button
          onClick={onClose}
          className="text-current hover:opacity-70 transition-opacity p-1"
          title='close'
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};