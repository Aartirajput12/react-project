// import React from "react";

// class Mount extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0,
//     };

//     console.log("Constructor called");
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       console.log("Tick");
//     }, 1000);
//   }

//   componentDidUpdate() {
//     console.log("Component updated");
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//     console.log("Timer cleared");
//   }

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>

//         <button
//           onClick={() =>
//             this.setState({
//               count: this.state.count + 1,
//             })
//           }
//         >
//           Increment
//         </button>
//         <button
//           onClick={() =>
//             this.setState({
//               count: this.state.count - 1,
//             })
//           }
//         >
//           decrement
//         </button>

        
//       </div>
//     );
//   }
// }

// export default Mount;