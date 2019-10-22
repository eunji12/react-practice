import React, {Fragment} from 'react';
import Header from './components/Header';
import Food from './components/Food';
function App() {
  
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

  return (
    <div>
      <Header/>
      <h2>hello~</h2>
      {
        foodILike.map(dish => 
          (
           <Food key={dish.id} name={dish.name} rating={dish.rating}/>
           )
          )
       } 
    </div>
    );
}


export default App;

