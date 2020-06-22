import React from 'react';

const keyToId = {
  "81": [0, "Boring"],
  "87": [1, "Pish-posh"],
  "69": [2, "Craaap"],
  "65": [3, "Stinky"],
  "83": [4, "Burger"],
  "68": [5, "Hahaha"],
  "90": [6, "Okili-dokily"],
  "88": [7, "Ha-Ha"],
  "67": [8, "I'm the devil"]
}

const idToSound = {
  0: "Boring",
  1: "Pish-posh",
  2: "Craaap",
  3: "Stinky",
  4: "Burger",
  5: "Hahaha",
  6: "Okili-dokily",
  7: "Ha-Ha",
  8: "I'm the devil"
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      noise: "Silence"
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event){
    if(Object.keys(keyToId).includes(event.keyCode.toString())){
      const myId = keyToId[event.keyCode][0]
      const audioEl = document.getElementsByClassName("clip")[myId];
      audioEl.play();
      this.setState({
        noise: keyToId[event.keyCode][1]
      })
    }  else{
      this.setState({
        noise: "Invalid key"
      })
    }
  }

  handleClick(event){
    const myId = event.target.id
    const audioEl = document.getElementsByClassName("clip")[myId];
    audioEl.play();
    this.setState({
      noise: idToSound[myId]
    })
  }

  render() {
    const containerStyle ={
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "green",
      height: "100vh"
    }

    const soundBoxStyle = {
      borderRadius:10,
      position: "relative",
      width: "40%",
      textAlign: "center",
      backgroundColor: "red",
      height: "40%"
    }

    const padStyle = {
      background: "yellow",
      borderRadius:10 ,
      flex: "0 0 32%",
      height: "10vh"
    }

    const displayStyle = {
     backgroundColor: "blue",
     minWidth: "40%",
     height: "40px",
     margin: "auto",
     borderRadius:10
    }

    return(
      <div id="drum-machine" style={containerStyle}>
        <div style={soundBoxStyle}>
          <div style={{display: "flex", flexDirection: "column"}}>
            <h6>Simpsons sound pad</h6>
            <div style={{display: "flex",justifyContent: "space-around",flexWrap: "wrap", backgroundColor: "orange", width: "100%", height: "40vh", borderRadius:10, padding: "10px", paddingTop: "50px" }}>
                <button className="drum-pad" id="0" style={padStyle} onClick={this.handleClick} onKeyDown={this.handleKeyPress}>
                  <audio className="clip" src="https://www.thesoundarchive.com/simpsons/homer/boring.mp3" id="Q"></audio>
                  Q
                </button>
                <button className="drum-pad" id="1" style={padStyle} onClick={this.handleClick}>
                  <audio className="clip" src="https://www.thesoundarchive.com/simpsons/burns/Mr-Burns-pish-posh.mp3" id="W"></audio>
                  W
                </button>
                <button className="drum-pad" id="2" style={padStyle} onClick={this.handleClick}>
                  <audio className="clip" src="https://www.thesoundarchive.com/simpsons/homer/crap.mp3" id="E"></audio>
                  E
                </button>
                <button className="drum-pad" id="3" style={padStyle} onClick={this.handleClick}>
                  <audio className="clip" src="https://www.thesoundarchive.com/simpsons/barney/stinky.mp3" id="A"></audio>
                  A
                </button>
                <button className="drum-pad" id="4" style={padStyle} onClick={this.handleClick}>
                  <audio className="clip" src="https://www.thesoundarchive.com/simpsons/homer/mburger.mp3" id="S"></audio>
                  S
                </button>
                <button className="drum-pad" id="5" style={padStyle} onClick={this.handleClick}>
                  <audio className="clip" src="https://www.thesoundarchive.com/simpsons/bart/bartlaf3.mp3" id="D"></audio>
                  D
                </button>
                <button className="drum-pad" id="6" style={padStyle} onClick={this.handleClick}>
                  <audio className="clip" src="https://www.thesoundarchive.com/simpsons/ned/okly.mp3" id="Z"></audio>
                  Z
                </button>
                <button className="drum-pad" id="7" style={padStyle} onClick={this.handleClick}>
                  <audio className="clip" src="https://www.thesoundarchive.com/simpsons/misc/haha.mp3" id="X"></audio>
                  X
                </button>
                <button className="drum-pad" id="8" style={padStyle} onClick={this.handleClick}>
                  <audio className="clip" src="https://www.thesoundarchive.com/simpsons/ned/Im-the-devil.mp3" id="C"></audio>
                  C
                </button>
            </div>
            <div id="display" style={displayStyle}>
              <h3 style={{margin: "auto"}}>{this.state.noise}</h3>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

export default App;
