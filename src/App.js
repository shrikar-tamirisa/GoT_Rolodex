import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {GoTs : [], searchField : ""}
  }
  componentDidMount(){
    fetch("https://thronesapi.com/api/v2/Characters").then(resp => resp.json()).
    then(chars => this.setState({GoTs : chars}))
  }
  render(){
    const {GoTs, searchField} = this.state;
    const filteredGoTs = GoTs.filter((char) => char.firstName.toLowerCase().includes(
      searchField.toLowerCase()
    ))
    return <div className='App'>
      <h1>Game of Thrones rolodex</h1>
      <SearchBox placeholder="Search character" handleChange={(event) => this.setState({searchField : event.target.value})}/>
      <CardList chars={filteredGoTs}/>
    </div>
  }
}


export default App;
