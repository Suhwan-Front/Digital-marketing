import LocalLogin from "../LocalLogin"

export const TopNav: React.FC = () => {
  return (
    <nav className="flex flex-row justify-between text-base border-b-2 border-slate-200 min-w-DesktopSize">
      <div className="flex flex-row">
      <div id="purchaser" className="text-2xl">구매자</div>
      <div id="seller" className="text-2xl">판매자</div>
      </div>
      <LocalLogin />
    </nav>
  )
}
