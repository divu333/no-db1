import React, { Component } from 'react';
import axios from 'axios';
import viewRecipe from '../ViewRecipe/viewRecipe.css'

class  ViewRecipe extends Component  {

constructor(){
  super()
  this.state = {
    recipeBox :[]
  }
}


componentDidMount () {

  axios.get('/api/recipeBox').then ((res) => {
     console.log(res.data)
     this.setState ({
      recipeBox : res.data
     })
  })

}
render(){ 


    
  return ( 
   
 <div className="viewRecipe">
      <h1> Recipe List</h1>
      <ul> 
      { this.state.recipeBox.map (recipeBox =>
        <li key={recipeBox.id}> {recipeBox.recipeName}<br/> <br/> 
        {recipeBox.ingredients} <br/>  <br/></li>

        )}

      </ul>
 </div>
     );
   }

 }
export default ViewRecipe;
