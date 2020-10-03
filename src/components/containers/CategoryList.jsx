import React, { Component } from 'react'
import CategoryCard from '../UI/CategoryCard';
import {addToFav} from '../../actions'
import { connect } from 'react-redux'

class CategoryList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props;  
      }
      cons
      handleCategory = (category) => {
        this.props.dispatch(addToFav(category))
      }
    render() {
        const { categories }  = this.props;
        return (
            <React.Fragment>
                <h3>Please choose the categories</h3>
              {categories.length > 0 && (<div className="categories">
                  {categories.map((category , i) => <CategoryCard
                  key = {i}
                  handleCategory = {this.handleCategory}
                   category = {category}/>)}
              </div>)}
              </React.Fragment>
        
        )
    }
}
const mapStateToProps = (state) => ({data : state})
export default connect (mapStateToProps)(CategoryList)