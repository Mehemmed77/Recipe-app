import { TextField } from "@mui/material";
import {Button} from "@mui/material";
import "../css/login.css";

export default function Login() {
    return <>
        <div className="main">
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label>Username</label>
                        <TextField sx={{width:"100%"}} variant="outlined" label="Enter your username" 
                                    name="username" required={true} type="text" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <TextField sx={{width:"100%"}} variant="outlined" label="Enter your password" name="username" required={true} type="password" />
                    </div>
                    <div>
                        <Button sx={{backgroundColor:"#474F85"}} variant="contained">Login </Button>
                    </div>
                </form>
            </div>
        </div>
    </>
}