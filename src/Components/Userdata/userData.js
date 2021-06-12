import React from 'react'

import {connect} from 'react-redux'

const Userdata = (props) => {
    return (
        <div>
            {props.user}
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.currentUser,
  });
  
  export default connect(mapStateToProps)(Userdata);