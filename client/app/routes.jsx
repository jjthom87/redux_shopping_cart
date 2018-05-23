import React from "react";
import { Switch, Route } from "react-router-dom";

import Guestbook from "./components/Guestbook";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";
import Store from "./components/Store";
import Cart from "./components/Cart";

export default (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/sign-in" component={SignIn} />
		<Route path="/sign-up" component={SignUp} />
		<Route path="/home" component={UserHome} />
		<Route path="/guestbook" component={Guestbook} />
		<Route path="/store" component={Store} />
		<Route path="/cart" component={Cart} />
	</Switch>
);