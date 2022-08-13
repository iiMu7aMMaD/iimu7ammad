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
            <span className="span">¨Don’t give up on your dreams, or your dreams will give up on you.¨</span>
          </h4>
        </div>
      </header>
    </div>
  );
}

// title 
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", function () {
    loaded();
  });
} else if (document.attachEvent) {
  document.attachEvent("onreadystatechange", function () {
    loaded();
  });
}

function loaded() {
  setInterval(loop, 1500);
}

var x = 0;

var titleText = [
  "Muhammad | Imagine a place...",
  "Muhammad | Imagine a place..",
  "Muhammad | Imagine a place.",
  "Muhammad | Imagine a place",
  "Muhammad | Imagine a plac",
  "Muhammad | Imagine a pla",
  "Muhammad | Imagine a pl",
  "Muhammad | Imagine a p",
  "Muhammad | Imagine a ",
  "Muhammad | Imagine a",
  "Muhammad | Imagine ",
  "Muhammad | Imagine",
  "Muhammad | Imagin",
  "Muhammad | Imagi",
  "Muhammad | Imag",
  "Muhammad | Ima",
  "Muhammad | Im",
  "Muhammad | I",
  "Muhammad | ",
  "Muhammad |",
];

function loop() {
  document.getElementsByTagName("title")[0].innerHTML =
    titleText[x++ % titleText.length];
}
// titile

export default App;
