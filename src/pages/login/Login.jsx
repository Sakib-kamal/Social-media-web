import { useContext, useRef } from "react"
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core";
import { loginCall } from "../../apiCalls";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error,   dispatch } = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch,
        );

        
    };
    console.log(user, isFetching);
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SkySocial</h3>
                    <span className="loginDesc">
                        <h3> Connect with friends and your family and your competitor and connect them on SkySocial </h3>
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBoxRegister" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress color ="white" size= "20px"/> : "Log In"}</button>
                        <span className="loginForgot"> Don't have an account </span>
                        <button className="loginRegisterButton"> {isFetching ? <CircularProgress color ="primary" size= "20px"/> : "Create  new account"}</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
