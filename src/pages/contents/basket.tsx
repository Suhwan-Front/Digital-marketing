import { TopNav } from '@/components/main/TopNav'
import '../../app/globals.css'
import { BasketForm } from '@/components/BasketForm'

const basket = () => {
  return (
    <div className="bg-gray-100">
      <TopNav />
      <BasketForm />
    </div>
  )
}

export default basket
