import React , {Component }from 'react';
import form from '../form/form.css';
import axios from 'axios';

 export default class Form extends  Component {
constructor(){
    super()
    this.state = {
        newRecipe : '',
        newIngredients: ''

    }
}

   
handleChange(e) {
    this.setState({ newRecipe:e.target.value})
    this.setState({ newIngredients:e.target.value})
}

  
//     change = e => {
//       this.setState ({
          
//         [e.target.name]: e.target.value

//       });
//     };

handleSubmit () {
    
    const newRecipeBox = {
        recipeName: this.state.newRecipe,
        ingredients:this.state.newIngredients
    }

axios.post('/api/AddRecipeBox',newRecipeBox)
    }
       

  
    render() {
    return ( 
        <div className="container">

        <form >
              
                <input
                type = "text"
                        placeholder =" Recipe Name"
                        name="recipeName"
                        onChange={(e) =>{ this.setState({newRecipe:e.target.value })}} 
                    />
                    
         <br/>
                   
                    

                    <textarea 
                    placeholder ="Ingredients  "
                    type="textarea"
                     name="ingredients" 
                      onChange={(e) =>{ this.setState({newIngredients:e.target.value })}} 
                      />

               <br/>

               <button className ="submitBtn"onClick ={e => this.handleSubmit(e)} > Submit </button>
               <br />
               <br />
               <button className ="cancelBtn" onClick ={e => this.handleSubmit()} > Cancel </button>
        </form>
        </div>
    );

    }
}


