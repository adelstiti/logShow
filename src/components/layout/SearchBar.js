import React , {useRef} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {searchLog} from '../../actions/logActions'

const SearchBar = ({searchLog}) => {
    const text = useRef('');

    const onChange = e => {
        searchLog(text.current.value)
    }
    return (
        <nav style={{marginBottom : '30px' , background : 'linear-gradient(125deg, #c82a2a, #1f5be3)'}} >
            <div className="nav-wrapper">
                <form>
                <div className="input-field">
                    <input id="search" type="search" placeholder='Search Logs...' ref={text} onChange={onChange}/>
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                </div>
                </form>
            </div>
        </nav>
    );
};
SearchBar.prototypes = {
    searchLog : PropTypes.func.isRequired,
}

export default connect(null,{searchLog})(SearchBar)