import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuCard from '../UI/MenuCard'
 class RecipeDetailContainer extends Component {
    render() {
        const {mealList} =  this.props;
        console.log(this.props)
        return (
            <div>
                   
                <div className="container-dishes">
        {mealList.map((dish,i) => <MenuCard dish = {dish} key = {i}/> )}
                </div> 
            </div>
        )
    }
}
const mapStateToProps = state => ({ mealList : state.searchReducer.mealList});
export default connect (mapStateToProps)(RecipeDetailContainer)