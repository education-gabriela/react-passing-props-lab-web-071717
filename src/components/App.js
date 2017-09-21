import React from 'react';
import FruitBasket from './FruitBasket';
import Filter from './Filter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fruits: [],
      filters: [],
      currentFilter: null,
    }
  }

  componentDidMount() {
    this.fetchFilters().then((filters) => this.setState(Object.assign({}, this.state, {filters: filters})));
    this.fetchFruits();
  }

  fetchFilters = () => {
    return fetch('/api/fruit_types')
      .then(response => response.json());
  }

  fetchFruits = () => {
    console.log(this.state)
    return fetch('/api/fruit')
      .then(response => response.json())
      .then(result => {
        return !this.state.currentFilter || this.state.currentFilter === 'all' ? result : result.filter((i) => i.fruit_type === this.state.currentFilter);
      })
      .then((fruits) => this.setState(Object.assign({}, this.state, {fruits: fruits})));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState(Object.assign({}, this.state, {currentFilter: event.target.value}), this.fetchFruits);
  }

  render() {
    return (
      <div>
        <Filter handleChange={this.handleFilterChange} filters={this.state.filters} />
        <FruitBasket
        fruits={this.state.fruits}
        />
      </div>
    );
  }
}

export default App;
