import React from 'react';
import '../../app/globals.css'
import SellForm from '@/components/sell/sellForm';

const SellPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <SellForm />
      </div>
    </div>
  );
};

export default SellPage;