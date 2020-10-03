import React, { Component } from 'react';
import Layout from './HOC/Layout';
import { connect } from 'react-redux'
import { fetchCategories } from '../actions';
import CategoryList from './containers/CategoryList';

class App extends Component {
  
  componentDidMount () {

    fetchCategories()
  }
  render() {
    const {categories} = this.props;
    return (
      <Layout>
        <CategoryList categories = {categories}/>
      </Layout>
      
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories : state.categoriesReducer.categories || []
  }
}
const mapDispatchToProps = (dispatch) => dispatch(fetchCategories())
  

export default connect(mapStateToProps , mapDispatchToProps) (App)
