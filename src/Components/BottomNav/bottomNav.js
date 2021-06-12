import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUser,faUserFriends, faServer,  faHome} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

import {connect} from 'react-redux';


const BottomNav = (props) => {
    return (
        <div className="btm-nav-wrapper">
          <div className="btm-nav">
            <Link to={`/profile/${props.user.id}`}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faUserFriends} />
            </Link>
            <Link to={`/messages`}>
              <FontAwesomeIcon icon={faComment} />
            </Link>
            <Link to={'/services'}>
              <FontAwesomeIcon icon={faServer} />
            </Link>
            <Link to={'/homepage'}>
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(BottomNav);