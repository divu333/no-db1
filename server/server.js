const  express = require ('express');
const app = express();
bodyParser = require ('body-parser'),
cors = require ('cors')


app.use(bodyParser.json ())
app.use(cors())

/* get starts ...*/

let nextId =3;
let recipeBox = [
   {
       id: 1,
       recipeName: "Chicken",
       ingredients : "Heat olive oil in a skillet over medium heat. Saute onion until lightly browned. Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar and salt. Continue stirring for 2 minutes. Add chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes."
   } ,

   {
   id: 2,
       recipeName: "squash",
       ingredients : "Heat olive oil in a skillet over medium heat. Saute onion until lightly browned. Stir in garlic"
}

]


app.get ('/api/recipeBox', (req,res) => {
    res.status(200).send(recipeBox)
})


app.post ('/api/AddRecipeBox', (req,res) => {
    console.log("your list !")

    const newRecipe = {
        id: nextId++,
        recipeName: req.body.recipeName,
        ingredients: req.body.ingredients
    }
recipeBox.push(newRecipe)

res.status(201).send();
console.log(newRecipe)
} )




/* get  end...*/


const port = 3333;
app.listen(port, () =>{
    console.log("listening on port " + port)
})