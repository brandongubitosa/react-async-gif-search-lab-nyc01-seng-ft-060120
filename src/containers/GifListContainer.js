import React from 'react';
import GifList from '../GifList';

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    makeFetchCall() {
        fetch(this.state.baseURL).then((resp) => resp.json())
          .then((data) => {
            this.getGifs(data.images);
          }) 
    }

    getGifs(images) {
        const newGifArray = images.map((image) => <GifList url = { image.url }/>)
        this.setState({
            gifs: newGifArray
        })
    }

    componentDidUpdate(prevProps) {
          if (prevProps.query != this.props.query) {
              console.log("AHHHHHHHH");
            this.getGifs()
          }
    }

    componentDidMount() {
        this.setState({
        baseURL: `https://api.giphy.com/v1/gifs/search?q=${this.props.query}&api_key=GRtB3FOWQAqAC4JIuOVQf5RWQ7P8gCKC`
        })
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