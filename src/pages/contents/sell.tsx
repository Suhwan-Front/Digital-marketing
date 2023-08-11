import React from 'react';
import '../../app/globals.css'
import SellForm from '@/components/sell/sellForm';

const SellPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
        <SellForm />
    </div>
  );
};

export default SellPage;