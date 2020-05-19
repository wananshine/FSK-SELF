import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import _ from 'lodash'
import styled from 'styled-components'
import { useCookies, Cookies  } from 'react-cookie';
import { Form, Input, Button, Checkbox, Avatar } from 'antd';
import LanguageSelectBox from './ssi/LanguageSelectBox'

import { tempSaveSkusOrder } from "../redux/actions/action";
import { fetchLoadingLanguage, fetchLogin } from "../redux/actions/login";



const LoginBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-clip: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-size: cover;
    background-image: url('http://10.134.130.110/RES01/jdsms/APIFile/201911/2b2e5d98cb874e36ac5e54045681c90a.jpg');
`
const LoginWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 400px;
    max-width: 510px;
    padding: 126px 75px 45px;
    position: fixed;
    right: 0px; top: 0px; bottom: 0px;
    background-color: rgba(0, 0, 0, 0.6); 
`

const LoginUp = styled.div`
    .login-logo{
        text-align: center;
    }
    .login-title{
        display: block;
        text-align: center;
        margin: 20px 0px 50px;
        font-weight: 400;
        font-style: normal;
        font-size: 20px;
        color: #fff;
    }
    .login-form {
        
    }
    .login-form-forgot {
        color: #e51c23;
        float: right;
    }
    .login-form-button {
        width: 100%;
    }
`

const LoginDown = styled.div`
    .login-state{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .login-company{
            color: #fff;
        }
        .login-language{
            width: 38%;
        }
    }
    .line{
        height: 1px;
        background-color: #fff;
        margin: 18px 0px;
    }
`

const LoginRememberCheckbox = styled(Checkbox)`
    color: #bf1e26;
    .ant-checkbox-checked .ant-checkbox-inner{
        background-color: #bf1e26;
        border-color: #bf1e26;
    }
    .ant-checkbox-checked::after{
        border-color: #bf1e26;
    }
    .ant-checkbox-wrapper:hover .ant-checkbox-inner, 
    .ant-checkbox:hover .ant-checkbox-inner, 
    .ant-checkbox-input:focus + .ant-checkbox-inner{
        border-color: #bf1e26;
    }
`
const LoginButton = styled(Button)`
    background-color: #bf1e26;
    border-color: #bf1e26;
    &:hover,
    &:focus {
    color: #fff;
    background-color: #f94950;
    border-color: #f94950;
}
`


// React Hooks
const LoginGrid = ({
    loginLanguage,
    sysLanguage,
    onLoadingLanguage,
    form,
}) => {
    
    console.log('loginLanguage:', sysLanguage)
    const [loginForm, setLoginFrom] = useState({
        userName: '',
        passWord: '',
        type: '2'
    });
    const [cookies] = useCookies();
    // const { getFieldDecorator } = form;


    useEffect(() => {
        onLoadingLanguage(cookies.languageCode);
    }, []);
    
    return sysLanguage && (
        <LoginBox>
            <LoginWrap>
                {/*<LoginUp>*/}
                    {/*<div className="login-logo" data-txt="logo图片">*/}
                        {/*<Avatar shape="square" size={90} icon={loginLanguage['loginUrl'] || 'user'} />*/}
                    {/*</div>*/}
                    {/*<div className="login-title" data-txt="">*/}
                        {/*{sysLanguage['j_login_page_welcome']} {loginLanguage['customerSysName']}*/}
                    {/*</div>*/}
                    {/*<Form onSubmit={handleSubmit} className="login-form">*/}
                        {/*<Form.Item>*/}
                            {/*{getFieldDecorator('username', {*/}
                                {/*rules: [{ required: true, message: sysLanguage['j_login_message_userName'] } ],*/}
                            {/*})(*/}
                                {/*<Input*/}
                                    {/*onKeyUp={(e) => { setLoginFrom({ ...loginForm, e: e})}}*/}
                                    {/*placeholder={sysLanguage['j_input_user_name']}*/}
                                    {/*size="large"*/}
                                {/*/>,*/}
                            {/*)}*/}
                        {/*</Form.Item>*/}
                        {/*<Form.Item>*/}
                            {/*{getFieldDecorator('password', {*/}
                                {/*rules: [{ required: true, message: sysLanguage['j_login_page_form'] }],*/}
                            {/*})(*/}
                                {/*<Input*/}
                                    {/*type="password"*/}
                                    {/*placeholder={sysLanguage['j_login_message_passWord']}*/}
                                    {/*size="large"*/}
                                {/*/>,*/}
                            {/*)}*/}
                        {/*</Form.Item>*/}
                        {/*<Form.Item>*/}
                            {/*{getFieldDecorator('remember', {*/}
                                {/*valuePropName: 'checked',*/}
                                {/*initialValue: true,*/}
                            {/*})(<LoginRememberCheckbox data-txt="记住账号">*/}
                                {/*{sysLanguage.j_action_remember_account}*/}
                            {/*</LoginRememberCheckbox>)}*/}
                            {/*<a className="login-form-forgot" href="" data-txt="忘记密码">*/}
                                {/*{sysLanguage.j_action_forget_password}*/}
                            {/*</a>*/}
                            {/*<LoginButton type="primary" htmlType="submit" className="login-form-button f-s-14" size="large" data-txt="立即登录">*/}
                                {/*{sysLanguage.j_action_immediately_login}*/}
                            {/*</LoginButton>*/}
                            {/**/}
                        {/*</Form.Item>*/}
                    {/*</Form>*/}
                {/*</LoginUp>*/}
                {/*<LoginDown>*/}
                    {/*<div className="login-state">*/}
                        {/*<div className="login-company">{sysLanguage['j_official_website_title']}</div>*/}
                        {/*<div className="login-language"><LanguageSelectBox></LanguageSelectBox></div>*/}
                    {/*</div>*/}
                    {/*<div className="line"></div>*/}
                    {/*<div className="text-center" style={{color: '#fff'}}>*/}
                        {/*{sysLanguage['j_official_website_copyright']} ©{new Date().getFullYear()} {sysLanguage.j_official_website_copyright_desc}*/}
                    {/*</div>*/}
                {/*</LoginDown>*/}

            </LoginWrap>
        </LoginBox>
    );
}
// const NormalLoginGrid = Form.create({ name: 'normal_login' })(LoginGrid);



const mapDispatchToProps = dispatch => {
    return {
        onSelectThreeMonth: () => {
            console.log(1)
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
  )(LoginGrid)
