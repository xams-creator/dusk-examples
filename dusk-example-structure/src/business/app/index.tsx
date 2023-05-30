import React from 'react';
import { RouterProvider } from 'react-router-dom';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import utc from 'dayjs/plugin/utc';

import { ConfigProvider } from 'antd';

import router from '@/configuration/router';

dayjs.extend(utc);
dayjs.locale('zh-cn');

export default function App() {
    return (
        <ConfigProvider
            componentSize='middle'
            locale={zhCN}
            autoInsertSpaceInButton={true}
            theme={{
                token: {
                    colorPrimary: '#5072e0',
                    colorPrimaryBg: '#f0f6ff',
                },
                components: {
                    Layout: {
                        colorBgBody: '#f4f4f8',
                    },
                },
                // algorithm: theme.darkAlgorithm,
            }}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    );
}
