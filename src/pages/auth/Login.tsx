import { UserLogin } from '@/components/login/UserLogin';
import '../../app/globals.css'

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <UserLogin />
        </div>
    );
};

export default Login;
