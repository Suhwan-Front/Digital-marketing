import type {NextPage} from "next"
import Link from "next/link";
import { SetStateAction, useCallback, useState } from "react"

const SignUp:NextPage = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [name, setName] = useState<string>();
    const [gender, setGender] = useState<string>();
    const [ages, setAges] = useState<string>();
    const [birth, setBirth] = useState<number>();
    const [address, setAddress] = useState<string>();

    const loginHandler = async () => {
        if(email === ''){
            setEmail('false')
        }else if(password === ''){
            setPassword('false')
        }else if(name === ''){
            setName('false')
        }else if(gender === ''){
            setGender('false')
        }else{
            localStorage.setItem('LoginItem', '123')
            const response:ResponseType = await fetch('auth/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    name,
                    gender,
                    ages,
                    birth,
                    address
                }),
            }).then((res) => res.json())
            if(response){
                //성공시 반환 추가해야함
            }
        }
    }

    const handleEditorChange = useCallback((value: SetStateAction<string>)=>{
        setEmail(email)
        setPassword(password)
        setName(name)
        setGender(gender)
    },[])

    return(
        <>
            <div><p>이메일</p><input value={email} onChange={handleEditorChange} /></div>
            <div><p>비밀번호</p><input value={password} onChange={handleEditorChange}/></div>
            <div><p>이름</p><input value={name} onChange={handleEditorChange}/></div>
            <div><p>성별</p><input value={gender} onChange={handleEditorChange}/></div>
            <div><p>연령대</p></div>
            <div><p>생일</p></div>
            <div><p>주소</p></div>
            <button onClick={loginHandler}><Link href={'/'}>제출</Link></button>
        </>
    )
}

export default SignUp