let Registration = (props)=>{
    let {setShowPopUp} = props
    return <>
        <section className="pop-registration">
            <section className="user-registration">
                <form action="">
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" id="fullName" placeholder="Enter FullName" />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" id="email" placeholder="Enter Email" />
                    </div>
                    <div>
                        <label htmlFor="">Mobile</label>
                        <input type="text" id="mobile" placeholder="Enter Mobile" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" />
                    </div>
                    <div>
                        <label htmlFor="">Confirm Password</label>
                        <input
                        type="text"
                        id="cpassword"
                        placeholder="Enter Confirm Password"
                        />
                    </div>
                    <div>
                        <button type="button" id="save" className="btn btn-success">
                        Save
                        </button>
                        <button type="button" className="cancel btn btn-danger" onClick={()=>(setShowPopUp(false))}>Cancel</button>
                    </div>
                </form>
            </section>
        </section>
    </>
}

export default Registration;