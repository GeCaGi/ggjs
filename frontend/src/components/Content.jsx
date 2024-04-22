import LoginForm from "./Authentication/LoginForm";

export default function Content(){
    return (
        <>
            <div className="container">
                
                <div style={{  margin: "auto", width: "50%", padding: "10px", marginTop:"50px"}}>
                    <LoginForm/>
                </div>
                
            </div>
        </>
    )
}