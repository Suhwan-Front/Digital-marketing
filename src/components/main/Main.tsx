import ProductList from '../sell/productList'
import AdSlider from './AdSlider'

const Main = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-6 px-4">
        <AdSlider />
      </div>
      <ProductList />
    </div>
  )
}

export default Main
