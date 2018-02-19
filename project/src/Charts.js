import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BillboardHot100 from './BillboardHot100';
import Header from './Header';
import ChartsList from './ChartsList';


class Charts extends Component {
  render() {
    return (
      <div>
        <Route path = {`${this.props.match.path}/billboard_hot_100`} component = {BillboardHot100} />
      </div>
    );
  }
}

export default Charts;
