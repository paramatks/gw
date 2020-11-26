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
                <title>GoodWork</title>
                <link rel="icon" href="/images\Goodwork_6A rev SC_cropped_transparentBackground.png" />
            </Head>

            <Row className="ordersheaderrowstyle" align="middle" justify="start" >
                <Col span="3" className="orderssearchcolstyle" >
                    <SearchOutlined className="orderssearchcoliconstyle" />
                </Col>
                <Col span="4" className="ordersheadertextcolstyle">
                    <Text className="ordersheadertextstyle">
                        Orders
                    </Text>
                </Col>
                <Col span="2" className="ordersheaderbellcolstyle">
                    <BellOutlined className="ordersheaderbelliconstyle" />
                </Col>
            </Row>

            <Row className="ordersindicatorsrowstyle" size="0" direction="horizontal" align="start">
                <Col span="5" className="ordersbookingprocessingindicatorcolstyle">
                    <Button type="primary" shape="circle" size="large" className="ordersbookingindicatorbuttonstyle">
                        <Text className="ordersbookingindicatortextstyle">
                            12
                        </Text>

                    </Button>
                    <Text className="ordersbookingindicatortext2style">
                        Booking
                    </Text>
                </Col>
                <Col span="5" className="ordersbookingprocessingindicatorcolstyle">
                    <Button type="primary" shape="circle" size="large" className="ordersprocessingcompletedindicatorbuttonstyle">
                        <Text>
                            03
                        </Text>
                    </Button>
                    <br>
                    </br>
                    <Text className="ordersprocessingindicatortext2style">
                        Processing
                    </Text>
                </Col>
                <Col span="6" className="orderscompletedindicatorcolstyle">
                    <Button type="primary" shape="circle" size="large" className="ordersprocessingcompletedindicatorbuttonstyle">
                        <Text>
                            99+
                        </Text>
                    </Button>
                    <Text className="orderscompletedindicatortext2style">
                        Completed
                    </Text>
                </Col>
                <Col span="4" className="ordersothersindicatorcolstyle">
                    <Button type="primary" shape="circle" size="large" className="ordersothersindicatorbuttonstyle">
                        <Text>
                            0
                        </Text>
                    </Button>
                    <Text className="ordersothersindicatortext2style">
                        Others
                    </Text>
                </Col>
            </Row>

            <Row className="ordersmyordersrowstyle">
                <Col span="5">
                    My Orders
                </Col>
                <Col span="5" className="ordersviewallcolstyle">
                    <Text className="ordersviewalltextstyle">
                        View All
                    </Text>
                    <RightOutlined className="ordersviewalliconstyle" />
                </Col>
            </Row>

            <Row className="ordersrow2style" >
                <Col span={8}>
                    <Card bordered={true}>
                        <AlertOutlined className="ordersbookingalerticonstyle" />
                        <Text className="ordersbookingtextstyle" >
                            Booking
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <ToolOutlined className="orderstooliconstyle" />
                        <Text className="ordersprocessingtextstyle" >
                            Processing
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true} >
                        <CheckOutlined className="orderscheckiconstyle" />
                        <Text className="orderscompletedtextstyle">
                            Completed
                        </Text>
                    </Card>
                </Col>
            </Row>

            <Row className="ordersrow3style">
                <Col span={8}>
                    <Card bordered={true}>
                        <CloseOutlined className="orderscloseiconstyle" />
                        <Text className="orderscanceltextstyle" >
                            Cancel
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <EllipsisOutlined className="ordersellipsisiconstyle" />
                        <Text className="ordersotherstextstyle" >
                            Others
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true} >
                        <CustomerServiceOutlined className="orderscustomerserviceiconstyle" />
                        <Text className="ordersaftersaletexticon" >
                            After Sale
                        </Text>
                    </Card>
                </Col>
            </Row>

            <Row className="ordersmyratingrowstyle">
                <Col span="5">
                    My Rating
                </Col>
            </Row>

            <Row className="ordersrow3style">
                <Col span={8}>
                    <Card bordered={true}>
                        <RadarChartOutlined className="ordersradarcharticonstyle" />
                        <Text className="ordersalltextstyle">
                            All
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <StarOutlined className="ordersstariconstyle" />
                        <Text className="ordersratingtextstyle" >
                            Ratings
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true} >
                        <HistoryOutlined className="ordershistoryiconstyle" />
                        <Text className="ordershistorytextstyle">
                            History
                        </Text>

                    </Card>
                </Col>
            </Row>

            <Row align="top" className="footerordersrowstyle">
                <Col span="4" className="footerhomemessagescolstyle">
                    <Button size="large" type="link" className="footerbuttonstyle"
                        onClick={() => { router.push({ pathname: '/newgwindex' }); }}
                    >
                        <HomeOutlined className="footericonstyle" />
                    </Button>
                    <Text className="footerhometextstyle">
                        Home
					</Text>
                </Col>
                <Col span="5" className="footerhomemessagescolstyle">
                    <Button size="large" type="link" className="footerbuttonstyle"
                        onClick={() => { router.push({ pathname: '/messages' }); }}
                    >
                        <MessageOutlined className="footericonstyle" />
                    </Button>
                    <Text className="footermessagestextstyle">
                        Messages
					</Text>
                </Col>
                <Col span="4" className="footercolrocketstyle">
                    <Button size="large" type="link" className="footerbuttonstyle"
                        onClick={() => { router.push({ pathname: '/newpost' }); }}
                    >
                        <RocketOutlined className="footericonrocketstyle" />
                    </Button>
                </Col>
                <Col span="4" className="footerorderscolstyle">
                    <Button size="large" type="link" className="footerbuttonstyle"
                        onClick={() => { router.push({ pathname: '/orders' }); }}
                    >
                        <MenuOutlined className="footericonstyle" />
                    </Button>
                    <Text className="footerorderstextstyle">
                        Orders
					</Text>
                </Col>
                <Col span="4" className="footerprofilecolstyle">
                    <Button size="large" type="link" className="footerbuttonstyle"
                        onClick={() => { router.push({ pathname: '/profile' }); }}
                    >
                        <UserOutlined className="footericonstyle" />
                    </Button>
                    <Text className="footerprofiletextstyle">
                        Profile
					</Text>
                </Col>
            </Row>

        </>
    )

}

export default connect(state => state)(orders);