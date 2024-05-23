import React from 'react';
import Layout from "./app/layout/Layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from "./app/Inicio/Inicio";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        {/* Renderiza tanto Inicio como Layout */}
                        <Route index element={<Inicio />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}
