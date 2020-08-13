import { Col, Row, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function SpinComponent() {
    return (
        <Row justify="center" align="middle" style={{height: '100vh'}}>
            <LoadingOutlined style={{ fontSize: 24 }} spin/>
        </Row>
    );
}