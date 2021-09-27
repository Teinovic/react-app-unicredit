import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import BookInstances from '../components/BookInstances'


export default function BookList() {
    const {Content} = Layout;
    
    return (
        <Content style={{ padding: '0 50px', marginTop: '30px' }}>
          <BookInstances />       
        </Content>
      

    )
}