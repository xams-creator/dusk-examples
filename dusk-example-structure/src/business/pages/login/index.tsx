import React, { useEffect } from 'react';
import { shuffle } from 'lodash';
import { useReactive } from 'ahooks';
import { Button, Card, Carousel, Checkbox, Form, Input, Spin, notification } from 'antd';
import FlipMove from 'react-flip-move';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import './index.scss';
import { doLogin } from '@/business/inject/app.model';
import { useDispatch } from '@xams-framework/dusk';
import { useLoading } from '@xams-framework/dusk-plugin-loading';

export default function Login() {
    const [loading] = useLoading();

    useEffect(() => {
        notification.info({
            message: '账号密码为: root/root',
        });
    }, []);
    return (
        <Spin spinning={loading} size={'large'}>
            <div className={'app-login-page'}>
                <FlipImageBox />
                <LeftBox />
            </div>
        </Spin>
    );
}

const FlipImageBox = () => {
    const state = useReactive({
        bgList: ['bar_y', 'bar_x', 'line_gradient', 'line', 'funnel', 'heatmap', 'map', 'pie', 'radar'],
    });

    useEffect(() => {
        const interval = setInterval(() => {
            state.bgList = shuffle(state.bgList);
        }, 2000);
        return () => {
            clearInterval(interval);
        };
    }, [state]);

    return (
        <div className={'app-right-body'}>
            <div className={'app-img-slot'}></div>
            <FlipMove staggerDurationBy='30' duration={500} className={'app-img-box'}>
                {state.bgList.map(item => {
                    return (
                        <div className='app-img-box-li ' key={item}>
                            <img src={`/images/charts/${item}.png`} alt='chart' />
                        </div>
                    );
                })}
            </FlipMove>
        </div>
    );
};

function LeftBox() {
    const dispatch = useDispatch();
    return (
        <div className={'app-left-body'}>
            <div className={'app-login-carousel'}>
                <Carousel autoplay>
                    <img src={`/images/login/one.png`} alt='chart' />
                    <img src={`/images/login/two.png`} alt='chart' />
                    <img src={`/images/login/three.png`} alt='chart' />
                </Carousel>
            </div>
            <div className={'login-account'}>
                <div className={'login-account-container'}>
                    <Card
                        className='login-account-card'
                        title={'登录'}
                        headStyle={{
                            fontWeight: 500,
                            flex: '1',
                            minWidth: '0',
                            color: 'rgb(31, 34, 37)',
                            border: 0,
                        }}
                    >
                        <div className='login-account-top'>
                            <img className='login-account-top-logo' src={'/images/login/logo.png'} alt='展示图片' />
                        </div>
                        <Form
                            onFinish={values => {
                                dispatch(doLogin(values));
                            }}
                            initialValues={{
                                username: 'root',
                                password: null,
                            }}
                        >
                            <Form.Item name={'username'}>
                                <Input prefix={<UserOutlined size={18} style={{ color: 'gray' }} />} size={'large'} />
                            </Form.Item>
                            <Form.Item name={'password'}>
                                <Input.Password
                                    prefix={<LockOutlined size={18} style={{ color: 'gray' }} />}
                                    size={'large'}
                                />
                            </Form.Item>
                            {/*<Form.Item>*/}
                            {/*    <Checkbox>自动登录</Checkbox>*/}
                            {/*</Form.Item>*/}
                            <Form.Item>
                                <Button type={'primary'} block size={'large'} htmlType='submit'>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
}
