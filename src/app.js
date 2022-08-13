import './assets/styles/app.css';
import logo from './assets/images/avatar.png';
import Wave from 'react-wavify'

function App() {
  return (
    <div className="App">
      <Wave className="App-canvas" fill='#fff'
        paused={false}
        options={{
          height: 80,
          amplitude: 40,
          speed: 0.05,
          points: 4
        }}
      ></Wave>
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <div>
            <h1>
              <span>Muhammad</span> <span >H</span>
            </h1>
            <h3>
              <span>ii_mu7ammad</span>
            </h3>
          </div>
          <h4>
            <span className="span">Don’t give up on your dreams, or your dreams will give up on you.</span>
          </h4>
        </div>
      </header>
    </div>
  );
}

export default App;
