import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import router from './router';

class App extends Component {
  

  
 
  render(){ 
     return ( 
       <Router>
     <div className = "App">
     <div className="ListWrapper">
     <div className="logo"> </div>
    
       <nav>
          <ul className="nav-bar">
          <li className="navrBar-item"> <Link to='/CreateRecipe' style={{ textDecoration: 'none' }} >Add New recipe</Link></li>
          <br/>
            <li className="navrBar-item"> <Link to='/UpdateRecipe' style={{ textDecoration: 'none' }} >Update Recipes</Link></li>
          <br/>
            <li className="navrBar-item"> <Link to='/ViewRecipe' style={{ textDecoration: 'none' }} >Show Recipes</Link></li>
            <br />
            <li className="navrBar-item"><Link to='/DeleteRecipe' style={{ textDecoration: 'none' }}>Delete Recipe</Link></li> 
          </ul>
        </nav>

        
        {router}
     </div>
     
      </div>

      </Router>

        );
      }

    }
  

export default App;


