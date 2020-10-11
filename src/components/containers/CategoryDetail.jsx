import React, { Component } from 'react'
import Layout from '../HOC/Layout';
import { connect } from 'react-redux'
import { fetchCateGoryDetail } from '../../actions';
import Typography from '@material-ui/core/Typography';
import MenuCard from '../UI/MenuCard'
class CategoryDetail extends Component {

    componentDidMount() {
        const { match, dispatch } = this.props;
        dispatch(fetchCateGoryDetail(match.params.category))
    }
    
    render() {
        const { match, categoryData } = this.props;
        return (
            <Layout>
                {categoryData ? ( <React.Fragment> <Typography>{match.params.category} recipes!</Typography>
                <div className="container-dishes">
        {categoryData.map((dish,i) => <MenuCard dish = {dish} key = {i}/> )}
                </div> </React.Fragment>) : (<div>Loading</div>)}
              
            </Layout>
        )
    }
}
const mapStateToProps = state => ({ categoryData: state.categoriesReducer.meals });
export default connect(mapStateToProps)(CategoryDetail)