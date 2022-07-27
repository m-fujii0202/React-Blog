import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";


const Login = ({setIsAuth}:any) => {
    const navigate = useNavigate();
    const loginInWithGoogle = ()=> {
        //Googleでログイン
        signInWithPopup(auth, provider).then((result)=>{
        //  console.log(result);
         localStorage.setItem("isAuth", true);
         setIsAuth(true);
         navigate("/");
;        });
    };

    return (
    <div>
        <p>ログインして始める</p>
        <button onClick={loginInWithGoogle}>Googleで始める</button>
    </div>
    )
};

export default Login;