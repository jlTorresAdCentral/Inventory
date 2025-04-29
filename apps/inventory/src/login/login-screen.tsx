import { hideMobile } from "../assets/styles/core.css";
import { loginContainer, loginForm, loginFormContainer, loginLeftSide, loginRightSide, sectionLoginContainer } from "../assets/styles/login.css";

const LoginScreen = () => {
    return (
        <section className={sectionLoginContainer}>
            <div className={loginContainer}>
                <div className={loginLeftSide}>
                    <div className={loginFormContainer}>
                        <img
                            alt="Company logo"
                            src="https://app.joinadcentral.com/logo-gradient-official.d9a6481.svg"
                        />

                        <div className={loginForm}>
                            <h3>Sign up or login</h3>

                            <input
                                placeholder="name@email.com"
                            ></input>
                            <label>lable i</label>
                            <label>error</label>

                            <button>

                            </button>
                        </div>


                        <a>
                            links
                        </a>
                    </div>
                </div>
                <img
                    className={[hideMobile, loginRightSide].join(" ")}
                    src="https://cdn.prod.website-files.com/6234515f451e78c1e7aafa92/638ebdd8eb1a4db01ed06803_Group%20427322965-min.png"
                    alt="login image"
                />
            </div>
        </section>
    )
}

export default LoginScreen;