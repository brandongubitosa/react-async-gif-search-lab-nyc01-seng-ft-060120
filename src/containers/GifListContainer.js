import React from 'react';
import GifList from '../components/GifList';

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    makeFetchCall() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.props.query}&api_key=GRtB3FOWQAqAC4JIuOVQf5RWQ7P8gCKC`).then((resp) => resp.json())
          .then((data) => {
              console.log(data)
            this.getGifs(data.data);
          }) 
    }

    getGifs(images) {
        const newGifArray = images.map((image, index) => <GifList key={index} url = { image.images.original.url }/>)
        this.setState({
            gifs: newGifArray
        })
    }

    componentDidUpdate(prevProps) {
          if (prevProps.query != this.props.query) {
            console.log(this.props.query, "it did update", prevProps.query)
            this.makeFetchCall()
          }
    }

  

    render() {
          return (
              <div>
                  {this.state.gifs}
              </div>
          )
      }
}

export default GifListContainer;