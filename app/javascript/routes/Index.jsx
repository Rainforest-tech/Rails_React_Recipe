import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home.jsx";
import Recipes from "../components/Recipes.jsx";
import Recipe from "../components/Recipe.jsx";
import NewRecipe from "../components/NewRecipe.jsx";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipes} />
            <Route path="/recipe/:id" exact component={Recipe} />
            <Route path="/recipe" exact component={NewRecipe} />
        </Switch>
    </Router>
);