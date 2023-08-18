import UserSignUp from '../../components/auth/UserSignUp'
import { Footer } from '../../components/main/Footer'
import { TopNav } from '../../components/main/TopNav'
import type { NextPage } from 'next'

const SignUp: NextPage = () => {
  return (
    <div>
      <TopNav />
      <UserSignUp />
      <Footer />
    </div>
  )
}

export default SignUp
