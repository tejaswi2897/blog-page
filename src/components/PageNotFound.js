import { Link } from "react-router-dom"

let PageNotFound = () =>{
    return <>
        <div className="PageNotFound">
            <h2 className="marginBottom-3">This is not the page you are looking for.</h2>
            <button className="write-btn">
                <Link to={"/"}>
                    Back to Home
                </Link>
            </button>
        </div>
    </>
}
export default PageNotFound;