import type {NextPage} from "next"
import {SetStateAction, useCallback, useState} from "react"
import {SellsEditor} from "../../components/SellsEditor";
import Link from "next/link";

type DraftPageProps = {
}

const DraftPage: NextPage<DraftPageProps> = ({

}) => {
  const [value, setValue] = useState("**Hello world!!!**")

  const handleEditorChange = useCallback((value: SetStateAction<string>)=>{
    setValue(value)
  },[])

  const handleSubmitClick = () => {
    localStorage.setItem('content', value)
    console.log(value)
  }

  return (
    <div>
      <SellsEditor
        value={value}
        onChange={handleEditorChange}
        />
        <button onClick={handleSubmitClick}><Link href={'/'}>제출하기</Link></button>
    </div>
  )
}
export default DraftPage