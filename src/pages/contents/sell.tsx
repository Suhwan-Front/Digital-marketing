import React from 'react'
import '../../app/globals.css'
import { TopNav } from '@/components/main/TopNav'
import SellForm from '@/components/sell/sellForm'

const SellPage: React.FC = () => {
  return (
    <>
      <TopNav />
      <div className="container mx-auto px-4 py-6">
        <SellForm />
      </div>
    </>
  )
}

export default SellPage
