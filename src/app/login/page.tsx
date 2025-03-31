import rocket from "@/assets/images/rocket.png";
import LoginSignUpForm from "@/components/Login/LoginSignUpForm";
import Container from "@/components/Shared/Container";
import { Karla } from "next/font/google";
import Image from "next/image";

const karla = Karla({
  subsets: ["latin"],
  weight: "700",
});
const Login = () => {
  // const [isLogin, setIsLogin] = useState(true);
  // const [formData, setFormData] = useState({
  //   fullName: '',
  //   email: '',
  //   password: '',
  // });
  // const [showPassword, setShowPassword] = useState(false); // Added state for toggling password visibility
  // const [errorMessage, setErrorMessage] = useState('');
  // // const navigate = useNavigate();

  // // useEffect(() => {
  // //   const user = localStorage.getItem('user');
  // //   if (user) navigate('/dashboard'); // Redirect if already logged in
  // // }, [navigate]);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setErrorMessage('');

  //   if (isLogin) {
  //     // Login logic
  //     const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  //     if (storedUser.email === formData.email && storedUser.password === formData.password) {
  //       localStorage.setItem('token', 'dummy-token'); // Simulate token storage
  //       // navigate('/dashboard'); // Redirect to dashboard
  //     } else {
  //       setErrorMessage('Invalid email or password.');
  //     }
  //   } else {
  //     // Signup logic
  //     if (formData.fullName && formData.email && formData.password) {
  //       localStorage.setItem('user', JSON.stringify(formData));
  //       localStorage.setItem('token', 'dummy-token'); // Simulate token storage
  //       // navigate('/dashboard'); // Redirect to dashboard
  //     } else {
  //       setErrorMessage('All fields are required.');
  //     }
  //   }
  // };

  return (
    <div className="min-h-[90vh] bg-black text-white relative">
      <Image
        src={rocket}
        alt=""
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[0]"
      />
      <Container>
        <div className={`my-10 flex flex-col md:flex-row justify-between`}>
          <div className="flex flex-col h-[70vh] justify-center flex-1 relative z-[10] gap-5">
            <h1 className={`${karla.className} text-3xl md:text-4xl lg:text-7xl text-red-700`}>
              Welcome to our <br /> community!
            </h1>
            <p>Start your new journey with us and <br /> join our community</p>
          </div>
          <div className=" flex-1">
            {/* Login Form */}
            <LoginSignUpForm/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
