import React from 'react'
import { Layout, Breadcrumb } from 'antd'

export default function home() {
    const {Content} = Layout;

    return (
        <Content style={{ textAlign: 'center', fontSize: '35px', marginTop: '60px', marginBottom: '40px'  }}>
            Welcome to the Home page of the Book web app.       
        </Content>
    )
}

