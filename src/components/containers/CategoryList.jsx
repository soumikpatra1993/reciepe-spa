import React, { Component } from 'react'
import CategoryCard from '../UI/CategoryCard'

class CategoryList extends Component {

    componentDidMount() {

    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props;  
      }
    render() {
        const { categories }  = this.props;
        return (
            <React.Fragment>
                <h3>Please choose the categories</h3>
              {categories.length && (<div className="categories">
                  {categories.map((category) => <CategoryCard category = {category}/>)}
              </div>)}
              </React.Fragment>
        
        )
    }
}
export default CategoryList