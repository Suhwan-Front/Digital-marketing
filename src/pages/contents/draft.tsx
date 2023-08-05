import type {NextPage} from "next"
import {SetStateAction, useCallback, useState} from "react"
import {SellsEditor} from "../../components/SellsEditor";

type DraftPageProps = {
}

const DraftPage: NextPage<DraftPageProps> = ({

}) => {
  const [value, setValue] = useState("**Hello world!!!**")

  const handleChange = useCallback((value: SetStateAction<string>)=>{
    setValue(value)
  },[])

  return (
    <div>
      <SellsEditor
        value={value}
        />
    </div>
  )
}
export default DraftPage