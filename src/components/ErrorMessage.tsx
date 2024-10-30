import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="max-w-2xl mx-auto mt-4">
      <div className="bg-red-50 border-l-4 border-red-500 p-4">
        <div className="flex items-center">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
          <p className="text-red-700">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;