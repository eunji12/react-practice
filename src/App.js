import React from 'react';

function Food(props){
  return (
    <div>
      <h3>I love {props.name}~</h3>
      <span>rating : {props.rating}</span>
    </div>
  );

}
const foodILike = [
  {
    id :1
    , name:"Kimchi"
    , rating:5
  }
  ,{
    id:2
    , name:"Samgyeop"
    , rating : 1000
  }
]
function App() {
  return (
    <div>
      <h2>hello~</h2>
      {
        foodILike.map(dish => 
          (
           <Food key={dish.id} name={dish.name} rating={dish.rating}/>
           )
          )

         /*foodILike.map(dish=>{
          return <Food key={dish.id} name = {dish.name} rating = {dish.rating}/>;
        })*/
      
       } 
    </div>
    );
}


export default App;

