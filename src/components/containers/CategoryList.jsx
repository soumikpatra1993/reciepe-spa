import React, { Component } from 'react'
import CategoryCard from '../UI/CategoryCard';
import {addToFav , selectedCategory} from '../../actions'
import { connect } from 'react-redux'
class CategoryList extends Component {

    shouldComponentUpdate (nextProps) {
        if( nextProps.categories !== this.props.categories) {;
     
        return true
    }
    return false

        } 
      handleCategory = (category , color) => {
        this.props.dispatch(addToFav(category))
        let newCategory = {...category , color}
        this.props.dispatch(selectedCategory(newCategory))
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
export default connect ()(CategoryList)