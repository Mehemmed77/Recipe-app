import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Recipes from "./Recipes";
import Login from "./Login";
import MealPlan from "./MealPlan";

export default function Main () {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="home/" element={<Home />} />
                    <Route path="recipes/" element={<Recipes />} />
                    <Route path="mealplan/" element={<MealPlan />} />
                    <Route path="login/" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
}