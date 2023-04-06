import React, { useEffect, useState } from "react";
import api from "./api";

export default function App() {
  const [test, setTest] = useState();

  useEffect(() => {
    api.get("/usuario")
      .then((response) => setTest(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    console.log(test)
    // <div className="App">
    //   {films?.results.map((films) => (
    //     <li key={films}>
    //       <p>Titulo: {films?.title} </p>
    //       <p>Diretor: {films?.director} </p>
    //     </li>
    //   ))};
    // </div>
  );
}




















// import React, { useEffect, useState } from "react";
// import api from "./api";

// export default function App() {
//   const [films, setFilms] = useState();

//   useEffect(() => {
//     api.get("films")
//       .then((response) => setFilms(response.data))
//       .catch((err) => {
//         console.error("ops! ocorreu um erro" + err);
//       });
//   }, []);

//   return (
//     // console.log(films.results)
//     <div className="App">
//       {films?.results.map((films) => (
//         <li key={films}>
//           <p>Titulo: {films?.title} </p>
//           <p>Diretor: {films?.director} </p>
//         </li>
//       ))};
//     </div>
//   );
// }














// {peoples.map(peoples => (
  //           <li key={peoples.name} >
  //             <h2>
  //               <strong> Título </strong>
  //               {peoples.name}
  //               {peoples.height}
  //               {console.log("AAA")}
  //             </h2>
  //           </li>
  //         ))}
  //       </div>

// import React, { Component } from 'react';
// import api from './api';

// class App extends Component{

//   state = {
//     peoples: []
//   }

//   componentDidMount(){
//     fetch(api.get('people'))
//       .then(res => res.json())
//       .then(response => {
//         console.log(response)
//         this.setState({
//           peoples: response.data
//         });
//       },
//       (error) => {
//         this.setState({
//           isLoaded: true,
//           error
//         });
//       }
//     );
//   }

//   // async componentDidMount(){
//   //   const response = await api.get('people')
//   //   this.setState({ peoples: response.data });
//   // }

//   render(){

//     const { peoples } = this.state; 

//     console.log(peoples);
//     return(
//       <div>
//         <h1> Listar os Filmes</h1>
//         {peoples.map(peoples => (
//           <li key={peoples.name} >
//             <h2>
//               <strong> Título </strong>
//               {peoples.name}
//               {peoples.height}
//               {console.log("AAA")}
//             </h2>
//           </li>
//         ))}
//       </div>
//     );
//   };
// };

// export default App;


// -----------------------------------------------------------

// import React, { Component } from 'react';
// import api from './api';

// class App extends Component{

//   state = {
//     films: []
//   }

//   async componentDidMount(){
//     const response = await api.get('films')
//     this.setState({ films: response.data });
    
//   }

//   render(){

//     const { films } = this.state; 

//     return(
//       // console.log(this.state.films.results)
//       <div>
//         {this.state.films.results.map((films) => (
//           <li key={films}>
//             <p>Titulo: {films?.title}</p>
//             <p>Diretor: {films?.director}</p>
//           </li>
//         ))};
//       </div>
//     );
//   };
// };

// export default App;