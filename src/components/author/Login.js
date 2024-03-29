import { useState } from 'react';
import '../../css/login.css'
import Registration from './Registration';
let Login = ()=>{
    let [showPopUp, setShowPopUp] = useState(false);
    return (
        <>
        <main className="login-page">
            <section className="login-section">
                <p className="title">User Login</p>

                <form action="">
                    <div>
                        <label htmlFor="" >
                            <i className="fa fa-user-secret" aria-hidden="true"></i></label>
                        <input type="email" id="lUserName" name="" placeholder="Enter UserName" />
                    </div>
                    <div>
                        <label htmlFor=""><i className="fa fa-key" aria-hidden="true"></i></label>
                        <input type="password" id="lPassword" name="" placeholder="Enter Password" />
                    </div>
                    <div className="sign-in">
                        <button type="button" id="signIn">
                        <i className="fa fa-sign-in" aria-hidden="true"></i> &nbsp;Login
                        </button>
                        <a href="/">Goto Home</a>
                    </div>
                    <div>
                        <p className="align-right">
                        Don't have account?
                        <a href="#" className="create-account" onClick={() => setShowPopUp(true)}>Create a new</a>
                        </p>
                    </div>
                </form>
            </section>
        </main>
        {
            showPopUp ? <Registration setShowPopUp={setShowPopUp} /> : null
        }
        
    </>
    ) 
}
export default Login;