import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import AddCardPayment from './AddCardPayment'
import AddUpiPayment from './AddUpiPayment'
import ViewPaymentStatus from './ViewPaymentStatus';
import Home from './Home'
import SearchById from './SearchById'

function ReactRouter() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
                    <div className="container">
                    <img src="//cdn.shopify.com/s/files/1/2045/8185/files/PT-animated-400-loop10delay_400x117.gif?v=1610736139" alt="PlantingTree" data-rimg="" srcSet="//cdn.shopify.com/s/files/1/2045/8185/files/PT-animated-400-loop10delay_400x117.gif?v=1610736139 1x" className="site-logo-image" style={{ width: '250px',
            height: '65px'}}></img>
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link className="nav-link" class="p-3 mb-2 bg-success text-white" style={{fontSize: "30px", textDecoration: "none" }}  to="/"><b style={{color: 'white'}}>Home</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/listpayments" >List of payments status</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addcard">Add Card Payment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addupi">Add Upi Payment</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/searchById">Search By Id</Link>
                                </li> */}

                            </ul>
                        </div>
                    {/* </div> */}
                </nav>

                
                <Switch>
                    <Route exact path="/listpayments">
                        <ViewPaymentStatus></ViewPaymentStatus>
                    </Route>
                    <Route exact path="/addcard">
                        <AddCardPayment></AddCardPayment>
                    </Route>
                    <Route exact path="/addupi">
                        <AddUpiPayment></AddUpiPayment>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/searchById" component={SearchById}/>
                </Switch>
            </div>
        </Router>
    )
}

export default ReactRouter
