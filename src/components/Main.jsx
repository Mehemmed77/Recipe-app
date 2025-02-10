import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "./Editor";
import Layout from "./Layout";
import Home from "./Home";
import Workspace from "./Workspace";
import Login from "./Login";

export default function Main () {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="editor/" element={<Editor />} />
                    <Route path="home/" element={<Home />} />
                    <Route path="workspace/" element={<Workspace />} />
                    <Route path="login/" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
}