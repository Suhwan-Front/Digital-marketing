import '../../app/globals.css'
import { UserLogin } from "@/components/auth/UserLogin";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <UserLogin />
        </div>
    );
};

export default Login;
