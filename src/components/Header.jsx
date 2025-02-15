import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ChecklistIcon from '@mui/icons-material/Checklist';
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
                        <FoodBankIcon />
                        <Link to="/recipes">Recipes</Link>
                    </li>

                    <li>
                        <ChecklistIcon />
                        <Link to="/mealplan">Meal Plans</Link>
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