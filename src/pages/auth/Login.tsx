import { TopNav } from '@/components/main/TopNav';
import '../../app/globals.css'
import { UserLogin } from "@/components/auth/UserLogin";

const Login = () => {
    return (
        <div>
            <TopNav />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <UserLogin />
        </div>

        </div>
    );
};

export default Login;
