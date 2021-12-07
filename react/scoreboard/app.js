const desc = "Player"
const myTitleId='main-title'
const username="Scoreboard"

const Header=()=>{
    return(
    <header >
        <h1 id={myTitleId}>{username}</h1> 
        <span className = 'stats'> {desc}</span> 
    </header>);
}


const Player=()=>{
    return(
        <div className="player">
            <span className="player-name">
                Uuganaa
            </span>

           <Counter />
        </div>
    );
}

const Counter=()=>{
    return(
    <div className="counter">
        <button className="counter-action decrement">-</button>
        <span className="counter-score">35</span>
        <button className="counter-action increment">+</button>
    </div>
    )
}

const App=()=>{
    return(
        <div className="scoreboard">
            <Header />
            <Player />
            
        </div>
    )
}

// const Haalga=()=>(
//     <header id = "main" >
//         <h1 id={myTitleId}>{username},s First React App </h1> 
//         <span className = 'stats'> {desc}</span> 
//     </header>
// );

// function Haalga() {
//     return (

//         <header id = "main" >
//         <h1 id={myTitleId}>{username},s First React App </h1> 
//         <span className = 'stats'> {desc}</span> 
//         </header>

//     );

// }

ReactDOM.render( 
    <App /> ,

    document.getElementById("root")
)