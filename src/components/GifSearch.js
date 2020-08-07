import React from 'react';

class GifSearch extends React.Component {
    state = {query: ''}

    handleChange = (event) => {
        this.setState({
            'query' : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.query) return;

        this.props.handleSubmit(this.state);
    }

    render() {
        return (
            <form onSubmit = { this.handleSubmit }>
                <input name = "query" value = { this.state.query } onChange = { this.handleChange } placeholder = "dolphins"/>
                <button type = "submit">Find Gif</button>
            </form>
        )
    }
}

export default GifSearch;