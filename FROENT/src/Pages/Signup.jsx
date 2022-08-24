import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Login.module.css"
export const Signup = () => {

  // let handlelogout=()=>{
  //   dispatch(logoutaction())
  // }
  return (
    <div>
    <div className={styles.prmaindiv}>
          <div className={styles.prleftdiv}>
            <img alt="trackinhtime_logo"style={{maxHeight:"100%",maxWidth:"96%"}}src="https://pro.trackingtime.co/img/login/1.svg"></img>
          </div>
          <div className={styles.prrightdiv}>
            <span style={{fontSize:"3vh"}}><span style={{fontWeight:"300"}}>TRACKING</span>TIME</span>
            <div className={styles.prbuttondiv}>
                <button><img alt="google_logo"src="https://pro.trackingtime.co/img/login/google-logo.png"></img><span>Sign in with Google</span></button>
                <button><img alt="microsoft_logo" src="https://pro.trackingtime.co/img/login/microsoft-logo.png"></img><span>Sign in with Microsoft</span></button>
                <button><img alt="apple_logo" src="https://pro.trackingtime.co/img/login/apple-logo.png"></img><span>Sign in with Apple</span></button>
                
            </div>
        <span className={styles.signuporlogin}>Sign up with your email</span>
                <form className={styles.rightlogin}>
                  <input type="email" placeholder="Email"/><br/><br/>
                  <input type="password" placeholder="Password"/>
  <br/>
                    
                       <button className={styles.loginbtn}>Signup </button>
                       <br/>
                      <Link to="/login"> <span className={styles.term}>Back to login</span></Link>
                        <div className="signup">
                        {/* <span style={{marginTop:"2vh",color:"gray",marginBottom:"2vh"}}>Dont have an account? <span style={{cursor:'pointer',textDecoration:"underline",marginTop:"2vh",color:"black",marginBottom:"2vh"}} >sign up</span></span> */}
                   
                      </div>
                   
                      <span className={styles.term}>Terms of service / Privacy Policy</span>
                </form>

                  
                  </div>
                
            </div>
              
      
  </div>

    
  )
}