import React from 'react'
import NavBar from './NavBar'
import GifSearch from './GifSearch';

import GifListContainer from '../containers/GifListContainer';

// the App component should render out the GifListContainer component 
class App extends React.Component {
  state = {query: 'dolphin'}

  handleSubmit = ({ query }) => {
    this.setState({
      query: query
    })
  }

  render() {
    return (
      <div>
          < NavBar color='black' title="Giphy Search" />
          <GifSearch handleSubmit = { this.handleSubmit }/>
          <GifListContainer query = { this.state.query }/>

      </div>
    )
  }
}

export default App
