import UserSignUp from "@/components/auth/UserSignUp";
import { TopNav } from "@/components/main/TopNav";
import type { NextPage } from "next";

const SignUp: NextPage = () => {

  return (
        <div>
          <TopNav />
      <UserSignUp />
    </div>
  );
};

export default SignUp;
