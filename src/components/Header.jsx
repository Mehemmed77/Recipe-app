import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CodeIcon from '@mui/icons-material/Code';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router";

export default function Header() {
    return <>
        <div id="header">
            <nav>
                <ul>
                    <li>
                        <HomeIcon />
                        <Link to="/home">Home</Link>
                    </li>

                    <li>
                        <WorkOutlineIcon />
                        <Link to="/workspace">Workspace</Link>
                    </li>

                    <li>
                        <CodeIcon />
                        <Link to="/editor">Editor</Link>
                    </li>
                    
                    <li>
                        <LoginIcon />
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </>
}