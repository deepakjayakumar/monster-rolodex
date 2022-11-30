import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card_list.component';
import SearchBox from './components/search-box/search-box.component';



const App = () =>{


 const [searchField,settSearchField] = useState('');
 const [monsters,setmonster] = useState([]);
const [filteredMonsters,setfilteredmonsters] = useState(monsters);
const[title,settitle] = useState('');
  console.log('rendered');
  useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setmonster(users))},[]
  );

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) =>
    {return monster.name.toLocaleLowerCase().includes(searchField)});

    setfilteredmonsters(newfilteredMonsters);
  },[monsters,searchField]

  );

  

  const onSearchChange = (event) => {
        const searchFieldstring = event.target.value.toLocaleLowerCase();
        settSearchField(searchFieldstring);
      }
      
      const onTitleChange = (event) => {
        const searchFieldstring = event.target.value.toLocaleLowerCase();
        settitle(searchFieldstring);
      }

  return (

      
    <div className="App">
    <h1 className='app-title'>{title}</h1>
    <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder = 'Search Monsters'/>

    <br/>

    <SearchBox className='title-box' onChangeHandler={onTitleChange} placeholder = 'Search title'/>
  
    < CardList monsters = {filteredMonsters}/>

    </div>
  );
}


// class App extends Component {

//   constructor()
//   {
//     super();

//     this.state = {
//       monsters :[  ] ,  
//       searchField :''
//     };

//   }

//   componentDidMount()
//   {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(() =>{
//     return {monsters:users}}));
//   }

  

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchField}
//   })
//   }
//   render(){
//     const {monsters,searchField} = this.state;
//     const {onSearchChange}  = this;
//     const filteredMonsters = monsters.filter((monster) =>
//     {return monster.name.toLocaleLowerCase().includes(searchField)})

//     return (

      
//       <div className="App">
//       <h1 class='app-title'>Rolodex</h1>
//       <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder = 'Search Monsters'/>
    
//        < CardList monsters = {filteredMonsters}/>

//       </div>
//     );
  
//   }}

//   class Newapp extends Component
//   {

//     render(){
//     return(
      
//       <h1>This is a new class object</h1>
      
      
//     );
//     }
//   }

export {App};
//export {Newapp};
