import React from 'react';

class GifList extends React.Component {

    render(){
        return(
            <div>
                <img src={this.props.url} />
            </div>
        )
    }


}

export default GifList