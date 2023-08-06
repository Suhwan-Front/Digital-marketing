import { TopNav } from '@/components/main/topNav'
import Main from '@/components/main/Main'
import AdSlider from '@/components/main/AdSlider'

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 px-4">
      <TopNav />
      <Main />
      <div id="main"></div>
      <div id="item1"></div>
      <div id="footer"></div>
    </div>
  )
}
