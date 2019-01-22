import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ViewRecipe from './components/ViewRecipe/ViewRecipe';
import DeleteRecipe from './components/DeleteRecipe';
import CreateRecipe from './components/CreateRecipe';
import UpdateRecipe from './components/Updaterecipe';

export default (
  <Switch>
    <Route path='/CreateRecipe' component={ CreateRecipe } />
    <Route path='/updateRecipe' component={ UpdateRecipe } />
    <Route path='/ViewRecipe' component={ ViewRecipe } />
    <Route path='/DeleteRecipe' component={ DeleteRecipe } />
  </Switch>
)
