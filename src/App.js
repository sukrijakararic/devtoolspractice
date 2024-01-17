
import './App.css';
import Header  from './header';

function App() {
  const printMe = () => {
   console.log('hello bro')
 }



  return (
    <div className="App">
      <Header butt={printMe} speak='aye hello'/>
    </div>
  );
}

export default App;
