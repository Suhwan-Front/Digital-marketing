import AdSlider from "./AdSlider"
import ProductList from "../sell/ProductList"

const Main = () => {
    return(
        <div>
            <div className="max-w-screen-xl mx-auto py-6 px-4">
                <AdSlider />
            </div>
            <ProductList />
        </div>
    )
}

export default Main