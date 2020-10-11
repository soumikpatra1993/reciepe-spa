import React, { useState, useEffect } from 'react'
import Layout from '../HOC/Layout';
import { connect } from 'react-redux'
import { fetchSearchResult } from '../../actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import RecipeDetailContainer from './RecipeDetailContainer'
const Search = (props) => {
    const {dispatch} = props
    const [search, setSearch] = useState('')
    useEffect(() => {

    }, [search])

    return (
        <Layout>
            <div className="search-bar">
            <TextField id="outlined-basic" placeholder="Search reciepies!"
            value={search} onChange={(e) => setSearch(e.target.value)}variant="outlined" />
              
                <Button variant="outlined" color="primary" onClick={() => dispatch(fetchSearchResult(search))}>
                Search</Button>
               
            </div>
            <RecipeDetailContainer/>
        </Layout>
    )
}
export default connect () (Search)