import React, { Component } from 'react'
import Layout from '../HOC/Layout';
import {connect} from 'react-redux'
import {fetchCateGoryDetail} from '../../actions'

class CategoryDetail extends Component {
    componentDidMount () {
       const {match , dispatch} =  this.props;
       debugger
      dispatch(fetchCateGoryDetail(match.params.category))
    }
    render() {
    console.log(this.props)
        return (
           <Layout>
               category Detail 
           </Layout>
        )
    }
}
const mapStateToProps = state => ({ categoryData : state.categoriesReducer.meals});
export default connect (mapStateToProps)(CategoryDetail)