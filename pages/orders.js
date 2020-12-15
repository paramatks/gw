import React, { useEffect } from 'react';
import { Row, Col, Button, Typography, Card } from 'antd';
import Head from 'next/head'
import { BellOutlined, SearchOutlined, MessageOutlined, RocketOutlined, MenuOutlined, UserOutlined, RightOutlined, AlertOutlined, ToolOutlined, CheckOutlined, CloseOutlined, EllipsisOutlined, CustomerServiceOutlined, StarOutlined, HistoryOutlined, RadarChartOutlined, HomeOutlined } from '@ant-design/icons';
import router from 'next/router'
import { connect } from "react-redux"

const { Text } = Typography;

function orders() {

    useEffect(() => {

    }, [])
    return (
        <>
            <Head>
                <title>
                    GoodWork
                </title>
                <link rel="icon" href="/images\Goodwork_6A rev SC_cropped_transparentBackground.png" />
            </Head>

            <Row className="ordersheaderrowstyle" align="middle" >
                <Col span="3" className="orderssearchcolstyle" >
                    <Button type="link" >
                        <SearchOutlined className="orderssearchcoliconstyle" />
                    </Button>
                </Col>
                <Col span="4" className="ordersheadertextcolstyle" >
                    <Text className="ordersheadertextstyle" >
                        Orders
                    </Text>
                </Col>
                <Col span="2" className="ordersheaderbellcolstyle" >
                    <Button type="link">
                        <BellOutlined className="ordersheaderbelliconstyle" />
                    </Button>   
                </Col>
            </Row>

            <Row className="ordersindicatorsrowstyle" >
                <Col span="5" className="ordersbookingprocessingindicatorcolstyle" >
                    <Button type="primary" shape="circle" size="large" className="ordersbookingindicatorbuttonstyle" >
                        <Text className="ordersbookingindicatortextstyle" >
                            12
                        </Text>
                    </Button>
                    <Text className="ordersbookingindicatortext2style" >
                        Booking
                    </Text>
                </Col>
                <Col span="5" className="ordersbookingprocessingindicatorcolstyle" >
                    <Button type="primary" shape="circle" size="large" className="ordersprocessingcompletedindicatorbuttonstyle" >
                        <Text>
                            03
                        </Text>
                    </Button>
                    <Text className="ordersprocessingindicatortext2style" >
                        Processing
                    </Text>
                </Col>
                <Col span="6" className="orderscompletedindicatorcolstyle" >
                    <Button type="primary" shape="circle" size="large" className="ordersprocessingcompletedindicatorbuttonstyle" >
                        <Text>
                            99+
                        </Text>
                    </Button>
                    <Text className="orderscompletedindicatortext2style" >
                        Completed
                    </Text>
                </Col>
                <Col span="4" className="ordersothersindicatorcolstyle" >
                    <Button type="primary" shape="circle" size="large" className="ordersothersindicatorbuttonstyle" >
                        <Text>
                            0
                        </Text>
                    </Button>
                    <Text className="ordersothersindicatortext2style" >
                        Others
                    </Text>
                </Col>
            </Row>

            <Row className="ordersmyordersrowstyle" >
                <Col span="5" >
                    My Orders
                </Col>
                <Col span="7" className="ordersviewallcolstyle" >
                    <Button type="link" >
                        <Text className="ordersviewalltextstyle" >
                            View All
                        </Text>
                    </Button>
                    <RightOutlined className="ordersviewalliconstyle" />
                </Col>
            </Row>

            <Row className="ordersrow2style" >
                <Col span={8}>
                    <Card bordered={true}>
                        <Button type="link" className="ordersbuttonstyle" >
                            <AlertOutlined className="ordersbookingalerticonstyle" />
                        </Button>
                        <Text className="ordersbookingtextstyle" >
                            Booking
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <Button type="link" className="ordersbuttonstyle" >
                            <ToolOutlined className="orderstooliconstyle" />
                        </Button>
                        <Text className="ordersprocessingtextstyle" >
                            Processing
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <Button type="link" className="ordersbuttonstyle" >
                            <CheckOutlined className="orderscheckiconstyle" />
                        </Button>
                        <Text className="orderscompletedtextstyle" >
                            Completed
                        </Text>
                    </Card>
                </Col>
            </Row>

            <Row className="ordersrow3style" >
                <Col span={8}>
                    <Card bordered={true}>
                        <Button type="link" className="ordersbuttonstyle" >
                            <CloseOutlined className="orderscloseiconstyle" />
                        </Button>
                        <Text className="orderscanceltextstyle" >
                            Cancel
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <Button type="link" className="ordersbuttonstyle" >
                            <EllipsisOutlined className="ordersellipsisiconstyle" />
                        </Button>
                        <Text className="ordersotherstextstyle" >
                            Others
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <Button type="link" className="ordersbuttonstyle">
                            <CustomerServiceOutlined className="orderscustomerserviceiconstyle" />
                        </Button>
                        <Text className="ordersaftersaletexticon" >
                            After Sale
                        </Text>
                    </Card>
                </Col>
            </Row>

            <Row className="ordersmyratingrowstyle" >
                <Col span="5" >
                    My Rating
                </Col>
            </Row>

            <Row className="ordersrow3style" >
                <Col span={8}>
                    <Card bordered={true}>
                        <Button type="link" className="ordersbuttonstyle" >
                            <RadarChartOutlined className="ordersradarcharticonstyle" />
                        </Button>
                        <Text className="ordersalltextstyle" >
                            All
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <Button type="link" className="ordersbuttonstyle" >
                            <StarOutlined className="ordersstariconstyle" />
                        </Button>
                        <Text className="ordersratingtextstyle" >
                            Ratings
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <Button type="link" className="ordersbuttonstyle" >
                            <HistoryOutlined className="ordershistoryiconstyle" />
                        </Button>
                        <Text className="ordershistorytextstyle" >
                            History
                        </Text>
                    </Card>
                </Col>
            </Row>

            <Row className="footerordersrowstyle" >
                <Col span="4" className="footerhomemessagescolstyle" >
                    <Button size="large" type="link" className="footerbuttonstyle"
                        onClick={() => { router.push({ pathname: '/newgwindex' }); }}
                    >
                        <HomeOutlined className="footericonstyle" />
                    </Button>
                    <Text className="footerhometextstyle" >
                        Home
					</Text>
                </Col>
                <Col span="5" className="footerhomemessagescolstyle" >
                    <Button size="large" type="link" className="footerbuttonstyle"
                        onClick={() => { router.push({ pathname: '/messages' }); }}
                    >
                        <MessageOutlined className="footericonstyle" />
                    </Button>
                    <Text className="footermessagestextstyle" >
                        Messages
					</Text>
                </Col>
                <Col span="4" className="footercolrocketstyle" >
                    <Button size="large" type="link" className="footerbuttonstyle"
                        onClick={() => { router.push({ pathname: '/newpost' }); }}
                    >
                        <RocketOutlined className="footericonrocketstyle" />
                    </Button>
                </Col>
                <Col span="4" className="footerorderscolstyle" >
                    <Button size="large" type="link" className="footerbuttonstyle"
                        onClick={() => { router.push({ pathname: '/orders' }); }}
                    >
                        <MenuOutlined className="footericonstyle" />
                    </Button>
                    <Text className="footerorderstextstyle" >
                        Orders
					</Text>
                </Col>
                <Col span="4" className="footerprofilecolstyle" >
                    <Button size="large" type="link" className="footerbuttonstyle"
                        onClick={() => { router.push({ pathname: '/profile' }); }}
                    >
                        <UserOutlined className="footericonstyle" />
                    </Button>
                    <Text className="footerprofiletextstyle" >
                        Profile
					</Text>
                </Col>
            </Row>

        </>
    )

}

export default connect(state => state)(orders);