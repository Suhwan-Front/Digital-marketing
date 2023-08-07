import Link from "next/link"
import AdSlider from "./AdSlider"

const Main = () => {
    return(
        <div>
            <div className="max-w-screen-xl mx-auto py-6 px-4">
                <AdSlider />
            </div>
            <Link href={'/contents/draft'}>콘텐츠 등록</Link>
        </div>
    )
}

export default Main