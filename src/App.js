import React, {Fragment, Component} from 'react';
// import Header from './components/Header';
// import Food from './components/Food';

class App extends Component {
  state = {
    count : 0
  };
  add = () =>{
    // his.setState({count :this.state.count+1});
    this.setState(current => ({count: current.count+1}));
  };
  minus = () => {
    // this.setState({count : this.state.count-1});
    this.setState(current => ({count: current.count-1}));
  };
  

  render() {
    return (
      <div>
          <h1>this number is {this.state.count}</h1>
          <button onClick={this.add}>add</button>
          <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
// 펑셔널 안녕~
// function App() {
  
//   const foodILike = [
//     {
//       id :1
//       , name:"Kimchi"
//       , rating:5
//     }
//     ,{
//       id:2
//       , name:"Samgyeop"
//       , rating : 1000
//     }
//   ]

//   return (
//     <div>
//       <Header/>
//       <h2>hello~</h2>
//       {
//         foodILike.map(dish => 
//           (
//            <Food key={dish.id} name={dish.name} rating={dish.rating}/>
//            )
//           )
//        } 
//     </div>
//     );
// }


// export default App;

