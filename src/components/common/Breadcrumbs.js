import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Breadcrumbs = ({ location })  => {
    const pathBits = location.pathname.split('/');
    const breadcrumbs = pathBits.map( (item, i) => {
        return (item==="") ? <Link to="/">Home</Link> : <Link to={`/${item}`}>{item}</Link>
    });
    return (
        <div>
            {breadcrumbs}
        </div>
    )
};
Breadcrumbs.propTypes = {
    location: PropTypes.shape({
        pathName: PropTypes.string
    }),
};
export default Breadcrumbs;
