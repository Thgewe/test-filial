import React from 'react';
import './App.css';
import {ETheme} from "./models/themes";
import Layout from "./components/Layout/Layout";
import CustomMenuRouter from "./components/CustomMenuRouter";

function App() {
    return (
        <div className="App" id="root-app" data-theme={ETheme.default}>
            <Layout>
                <CustomMenuRouter />
            </Layout>
        </div>
    );
}

export default App;
