import React, { Component } from 'react';
import Layout from './HOC/Layout';
import { connect } from 'react-redux'
import { fetchCategories ,selectedCategories} from '../actions';
import CategoryList from './containers/CategoryList';
import Search from './containers/Search'


class App extends Component {

  
  componentDidMount () {
if (this.props.categories.length === 0){
  fetchCategories();
} else {
  selectedCategories(this.props.categories)
}
  }
shouldComponentUpdate(nextProps) {
  if(nextProps.categories !== this.props.categories) {
  return true
  }
  return false
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
const mapDispatchToProps = (dispatch) =>{
  
return dispatch => {
  dispatch(fetchCategories())
  
  dispatch(selectedCategories())
}
}
  

export default connect(mapStateToProps , mapDispatchToProps) (App)
