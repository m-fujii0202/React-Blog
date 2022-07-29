import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";

export type PropsType = {
    setIsAuth: React.Dispatch<React.SetStateAction<string | null |boolean>>;
}

const Login = (props: PropsType) => {
    const { setIsAuth } = props;
    const navigate = useNavigate();
    const loginInWithGoogle = () => {
        //Googleでログイン
        signInWithPopup(auth, provider).then((result) => {
            //  console.log(result);
            localStorage['isAuth'] = true;
            setIsAuth(true);
            navigate("/");
            ;
        });
    };

    return (
        <div>
            <p>ログインして始める</p>
            <button onClick={loginInWithGoogle}>Googleで始める</button>
        </div>
    )
};

export default Login;