import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Index from '../pages/Index'
import Layout from './Layout'

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Index} />
                </Layout>
            </Switch>
        </BrowserRouter>
    )
}
