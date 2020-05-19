import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import _ from 'lodash'
import styled from 'styled-components'
import { useCookies, Cookies  } from 'react-cookie';
import { Form, Icon, Input, Button, Checkbox, Avatar } from 'antd';

import { tempSaveSkusOrder } from "../../redux/actions/action";
import { fetchLoadingLanguage, fetchLogin } from "../../redux/actions/login";


// React Hooks
const HomeGrid = ({}) => {
    return <div>456</div>;
}




const mapDispatchToProps = dispatch => {
    return {
        onSelectThreeMonth: () => {
            dispatch(tempSaveSkusOrder())
        },
        onLoadingLanguage: () => {
            dispatch(fetchLoadingLanguage('zh_CN'))
        },
        onLogin: (data) => {
            dispatch(fetchLogin(data))
        }
    };
};

const mapStateToProps = (state, ownProps) => {
    console.log('*****:',state)
    return {
        loginLanguage: state.login.loginLanguage,
        sysLanguage: state.login.sysLanguage,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeGrid)
