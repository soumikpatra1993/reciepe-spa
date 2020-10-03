import React, { Component } from 'react';
import Layout from '../HOC/Layout';
import CategoryCard from '../UI/CategoryCard'
import { connect } from 'react-redux'

class Favourites extends Component {
    render() {
       const { favs } = (this.props)
        return (
         <Layout>
           <React.Fragment>
                <h3> Your favourite categories</h3>
              {favs.length>0 && (<div className="categories">
                  {favs.map((fav , i) => <CategoryCard
                  key = {i}
                  handleCategory = {this.handleCategory}
                  color = {'secondary'}
                   category = {fav}/>)}
              </div>)}
              </React.Fragment>
         </Layout>
        )
    }
}
const mapStateToProps = state => ({favs : state.favouriteReducer.favs})
export default connect(mapStateToProps)(Favourites)
