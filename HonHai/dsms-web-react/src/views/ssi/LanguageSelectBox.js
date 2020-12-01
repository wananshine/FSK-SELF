import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useCookies } from 'react-cookie';
import styled from 'styled-components'
import _ from 'lodash'
import { Select } from 'antd';
import { fetchLoadingLanguage, fetchLogin } from "../../redux/actions/login";
const { Option } = Select;
const LanguageBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    .ant-select{
        width: 100%;
        .ant-select-selection{
            color: #fff;
            background-color: transparent;
        }
        .ant-select-arrow{
            color: #fff;
        }
    }
`

// React Hooks
const LanguageSelectBox = ({
    loginLanguage,
    sysLanguage,
    onLoadingLanguage,
}) => {
    
    // j_language_japanese
    // j_language_english
    // j_language_traditional_chinese
    // j_language_simplified_chinese
    
    const [cookies, setCookie] = useCookies(['languageCode']);
    const [languagesList, setLanguage] = useState([
        { val: 'zh_CN', 'txt': sysLanguage.j_language_simplified_chinese },
        { val: 'ja_JP', 'txt': sysLanguage.j_language_japanese },
        { val: 'en_US', 'txt': sysLanguage.j_language_english },
        { val: 'zh_TW', 'txt': sysLanguage.j_language_traditional_chinese },
    ]);
    console.log('languagesList:',sysLanguage.j_language_simplified_chinese, sysLanguage.j_language_japanese)
    if (_.includes([undefined, null, ''], cookies.languageCode)) {
        setCookie('languageCode', 'zh_CN', { path: '/' })
    }

    useEffect(() => {
        onLoadingLanguage(cookies.languageCode);
    }, []);
    
    return (
        <LanguageBox>
            <Select defaultValue={ cookies.languageCode } onChange={(value) => { onLoadingLanguage(value); setCookie('languageCode', value, { path: '/' }) }}>
                {
                    languagesList.map((v, i) => { 
                        return (
                            <Option value={v.val} key={v.val}>{v.txt}</Option>
                        )
                    })
                }
            </Select>
        </LanguageBox>
    );
}



const mapDispatchToProps = dispatch => {
    return {
        onLoadingLanguage: (value) => { 
            console.log(value)
            dispatch(fetchLoadingLanguage(value))
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
  )(LanguageSelectBox)
