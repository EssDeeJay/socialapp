import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Scream from '../components/scream/Scream';
import Profile from '../components/profile/Profile';
import ScreamSkeleton from '../util/ScreamSkeleton';

import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';
import PropTypes from 'prop-types';

class home extends Component {
    componentDidMount(){
       this.props.getScreams();
    }
    render() {
        const { screams, loading } = this.props.data;
        let recentScreamsMarkup = !loading ? (
           screams.map((scream) => <Scream key={scream.screamId} scream={scream} /> )
        ) : (
            <ScreamSkeleton />
        ); 
        return (
            <Grid container spacing={5}>
                <Grid item sm={8} xs={8}>
                    {recentScreamsMarkup}
                </Grid>
                <Grid item sm={4} xs={4}>
                    <Profile />
                </Grid>
            </Grid>
        )
    }
}

home.propTypes = {
    getScreams: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.data
})

export default connect(mapStateToProps, { getScreams})(home);
