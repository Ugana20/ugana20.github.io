let players=[
    {
        name:'you',
        score:30,
        id:1
    },
    {
        name:'he',
        score:25,
        id:2
    },
    {
        name:'she',
        score:20,
        id:3
    },
    {
        name:'it',
        score:15,
        id:4
    },
    {
        name:'it',
        score:15,
        id:4
    },
    {
        name:'it',
        score:15,
        id:4
    },
    {
        name:'it',
        score:15,
        id:4
    },
    {
        name:'we',
        score:10,
        id:5
    }
]





class Header extends React.Component{
    render(){
    return(
        <header>
    
       <h1>{this.props.title}</h1>
       <span className="stats">Player: {this.props.totalPlayers}</span>
       </header>
    )
}
}

// const Header=(props)=>{
//     return(
//         <header>
    
//        <h1>{props.title}</h1>
//        <span className="stats">Player: {props.totalPlayers}</span>
//        </header>
//     )
// }


class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            score:0
        }
    }

// state bolon bindeer too nemj hasah jishee number1
    // incrementScore(){
    //     this.setState({
    //         score: this.state.score +=1
    //     }) 
    // }

// arrow functionoor state uguh jishee number2
    // incrementScore=()=>{
    //     this.setState({
    //         score: this.state.score +=1
    //     })
       
    // }


// prev state yag umnuh toonoos ni toogoo avch yvna Jishee Number3
    incrementScore=()=>{
        this.setState(prevState=>({
            score: prevState.score +=1
        }))
       
    }
    decrementScore(){
        this.setState({
            score: this.state.score -=1
        })
       
    }
    render(){
        return(
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}>--</button>
                <span className="counter-score">{this.state.score}</span>
                {/* Jishee number1 */}
                {/* <button className="counter-action increment" onClick={this.incrementScore.bind(this)} >+</button> */}


                {/* Jishee number2 */}
                {/* <button className="counter-action increment" onClick={()=>this.incrementScore()} >+</button> */}


                {/* Jishee Number3 */}
                <button className="counter-action increment" onClick={this.incrementScore} >+</button>
            </div>
        )
}
}

// const Counter=(props)=>{
//     return(
//         <div className="counter">
//         <button className="counter-action decrement">--</button>
//         <span className="counter-score">{props.score}</span>
//         <button className="counter-action increment">+</button>
//         </div>
//     )
// }

class Player extends React.Component{
    render(){
        return(
            <div className="player">
                <span className="player-name">{this.props.playerName}</span>
              <Counter />
            </div>
        )
}
}
// const Player=(props)=>{
//     return(
     
//         <div className="player">
//             <span className="player-name">{props.playerName}</span>
//           <Counter score={props.score}/>
//         </div>
//     )
// }
class App extends React.Component{
    
    render(){
        return(
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={this.props.initialPlayers.length}/>
                {this.props.initialPlayers.map(player=><Player playerName={player.name} score={player.score} key={player.id.toString()}/>)}        
                
    </div>
    
        )
}
}
// const App=(props)=>{
//     return(
//         <div className="scoreboard">
//             <Header title="Scoreboard" totalPlayers={props.initialPlayers.length}/>
//             {props.initialPlayers.map(player=><Player playerName={player.name} score={player.score} key={player.id.toString()}/>)}        
            
// </div>

//     )
// }





ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById("root")
)

