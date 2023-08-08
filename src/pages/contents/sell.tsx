import React from 'react';
import '../../app/globals.css'
import SellForm from '@/components/sell/sellForm';

const SellPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-xl p-8 bg-white rounded-lg shadow-lg">
        <SellForm />
      </div>
    </div>
  );
};

export default SellPage;