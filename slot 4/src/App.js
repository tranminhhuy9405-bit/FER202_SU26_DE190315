import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Hello from './components/Hello';
import ListPerson from './components/ListPerson';
import Footer from './components/Footer';
import PizzaList from './components/PizzaList';

function App() {

return(

<div>

<Hello/>

<ListPerson/>

<PizzaList/>

<Footer
id="DE190315"
name="HuyTM"
email="tranminhhuy9405@gmail.com"
githubLink="https://github.com/tranminhhuy9405-bit/FER202_SU26_DE190315.git"
/>

</div>

);

}

export default App;