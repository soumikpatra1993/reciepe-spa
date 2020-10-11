import React, { useState, useEffect } from 'react'
import Layout from '../HOC/Layout';
const Search = () => {

    const [search, setSearch] = useState('')
    useEffect(() => {

    }, [search])
    return (
        <Layout>
            <div className="search-bar">
                <input value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
        </Layout>
    )
}
export default Search