import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/actions/userStateActions";
import { useUserState } from "../../selectors/stateSelectors";
import styles from './style.module.css';

export const HeaderNavigation = () =>{
  const user=useUserState()
  const dispatch=useDispatch()
  const LogOutFn=()=>{
    dispatch(logOut())
  }
    return (
    <div className={styles.headerNavWrapper}>   
     <h1>Tassker</h1>
     {user? 
     <div>
     <button onClick={LogOutFn}>Log Out</button>
     </div>:
     <div>
        <Link to='/log_in'>  
          <button>log in</button>
        </Link>  
        <Link to='/sign_up'>  
          <button>Sign up</button>
        </Link>
      </div>
     } 
    </div>  
    );
}
