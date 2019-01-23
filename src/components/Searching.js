import React, { Component } from 'react';

// 
const searchFor = filterResult => x => x.name.toLowerCase().includes(filterResult.toLowerCase()) || !filterResult; 
    
class Searching extends Component {
    state = {
        results : [],
        filterResult: ''
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    results: data
                })
            })
    }

    searchHandler = event => {
        console.log("KP")
        this.setState({
            filterResult : event.target.value
        })
    }

  render() {
      const { results, filterResult } = this.state;
    return (
      <div className="App">
      <form>

            <input type="text"
                value={filterResult} 
                placeholder="search data"
                onChange={this.searchHandler}
                name="filterResult"
                />
        </form>

          {
              results.filter(searchFor(filterResult)).map(result => {
                 return (
                        <div key={result.id}>
                          <p>{result.name}</p>
                          <p>{result.username}</p>
                          <h4>{result.email}</h4>
                      </div>
                 )
              })
          }

      </div>
    );
  }
}

export default Searching;
