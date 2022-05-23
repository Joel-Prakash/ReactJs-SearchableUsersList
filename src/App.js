import {Component} from 'react'
import UserProfile from './components/UserProfile'
import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Jacob Jones',
    role: 'Software Engineer',
  },
  {
    uniqueNo: 2,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Fullstack Developer',
  },
  {
    uniqueNo: 3,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Esther Howard',
    role: 'Frontend Developer',
  },
  {
    uniqueNo: 4,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Backend Developer',
  },
]

class App extends Component {
  state = {searchInput: '', userDetailsList: initialUserDetailsList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteFunction = uniqueNo => {
    const {userDetailsList} = this.state
    const updatedUserDetailsList = userDetailsList.filter(
      eachObj => eachObj.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: updatedUserDetailsList})
  }

  render() {
    const {searchInput, userDetailsList} = this.state

    const searchResultsList = userDetailsList.filter(eachObj =>
      eachObj.name.includes(searchInput),
    )

    return (
      <div className="list-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul>
          {searchResultsList.map(eachObj => (
            <UserProfile
              userInfo={eachObj}
              deleteFunction={this.deleteFunction}
              key={eachObj.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
