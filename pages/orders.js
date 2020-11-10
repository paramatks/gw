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
            <Row className="indexnewstyle" align="middle" justify="start" style={{ paddingBottom: "2rem" }}>
                <Col span="3" style={{ marginLeft: "1rem", marginTop: "1rem", marginBottom: "1rem" }}>
                    <SearchOutlined style={{ color: "white", fontSize: "2rem" }} />
                </Col>

                <Col span="4" style={{ marginLeft: "6rem", marginTop: "1rem", marginBottom: "1rem" }}>
                    <Text style={{ color: "white" }}>
                        Orders
                    </Text>
                </Col>
                <Col span="2" style={{ marginLeft: "6rem", marginTop: "1rem", marginBottom: "1rem" }}>
                    <BellOutlined style={{ color: "white", fontSize: "2rem" }} />
                </Col>

            </Row>



            <Row style={{ backgroundColor: "white", marginTop: "-1.75rem", marginLeft: "1rem", marginRight: "1rem", borderRadius: "30px" }} size="0" direction="horizontal" align="start">

                <Col span="5" style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}>
                    <Button type="primary" shape="circle" size="large" style={{ backgroundColor: "#ffaf37", marginLeft: "1rem" }}>
                        <Text style={{ color: "white" }}>
                            12
                        </Text>

                    </Button>
                    <Text style={{ color: "#ff8235", marginLeft: "0.75rem" }}>
                        Booking
                    </Text>
                </Col>
                <Col span="5" style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}>
                    <Button type="primary" shape="circle" size="large" style={{ backgroundColor: "white", marginLeft: "1rem" }}>
                        <Text>
                            03
                        </Text>
                    </Button>
                    <br>
                    </br>
                    <Text style={{ color: "black", marginLeft: "0.15rem" }}>
                        Processing
                    </Text>

                </Col>
                <Col span="6" style={{ marginLeft: "0.75rem", marginTop: "0.5rem" }}>
                    <Button type="primary" shape="circle" size="large" style={{ backgroundColor: "white", marginLeft: "1rem" }}>
                        <Text>
                            99+
                        </Text>
                    </Button>
                    <Text style={{ color: "black", marginLeft: "0.20rem" }}>
                        Completed
                    </Text>

                </Col>
                <Col span="4" style={{ marginLeft: "0.25rem", marginTop: "0.5rem" }}>
                    <Button type="primary" shape="circle" size="large" style={{ backgroundColor: "white", marginLeft: "0.5rem" }}>
                        <Text>
                            0
                        </Text>
                    </Button>
                    <Text style={{ color: "black", marginLeft: "0.50rem" }}>
                        Others
                    </Text>

                </Col>
            </Row>
            <Row style={{ marginTop: "1rem", marginLeft: "1rem", marginRight: "1rem" }}>
                <Col span="5">
                    My Orders
                </Col>



                <Col span="5" style={{ marginLeft: "11rem" }}>
                    <Text style={{ fontSize: "0.75rem", marginLeft: "0.35rem" }}>
                        View All
                    </Text>
                    <RightOutlined style={{ fontSize: "0.75rem", marginLeft: "0.50rem" }} />
                </Col>
            </Row>

            <Row gutter={3} style={{ marginLeft: "1rem", marginTop: "0.5rem", marginRight: "1rem" }}>
                <Col span={8}>
                    <Card bordered={true}>
                        <AlertOutlined style={{ fontSize: "2rem", marginLeft: "0.5rem" }} />
                        <Text style={{ fontSize: "11px", marginLeft: "0.20rem" }} >
                            Booking
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <ToolOutlined style={{ fontSize: "2rem", marginLeft: "0.5rem" }} />
                        <Text style={{ fontSize: "11px", marginLeft: "-0.25rem" }} >
                            Processing
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true} >
                        <CheckOutlined style={{ fontSize: "2rem", marginLeft: "0.75rem" }} />
                        <Text style={{ fontSize: "11px" }} >
                            Completed
                        </Text>
                    </Card>
                </Col>
            </Row>

            <Row gutter={3} style={{ marginLeft: "1rem", marginTop: "0.5rem", marginRight: "1rem" }}>
                <Col span={8}>
                    <Card bordered={true}>
                        <CloseOutlined style={{ fontSize: "2rem", marginLeft: "0.5rem" }} />
                        <Text style={{ fontSize: "11px", marginLeft: "0.40rem" }} >
                            Cancel
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <EllipsisOutlined style={{ fontSize: "2rem", marginLeft: "0.5rem" }} />
                        <Text style={{ fontSize: "11px", marginLeft: "0.40rem" }} >
                            Others
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true} >
                        <CustomerServiceOutlined style={{ fontSize: "2rem", marginLeft: "0.75rem" }} />
                        <Text style={{ fontSize: "11px", marginLeft: "0.25rem" }} >
                            After Sale
                        </Text>
                    </Card>
                </Col>
            </Row>

            <Row style={{ marginTop: "1rem", marginLeft: "1rem", marginRight: "1rem" }}>
                <Col span="5">
                    My Rating
                </Col>

            </Row>

            <Row gutter={3} style={{ marginLeft: "1rem", marginTop: "0.5rem", marginRight: "1rem" }}>
                <Col span={8}>
                    <Card bordered={true}>
                        <RadarChartOutlined style={{ fontSize: "2rem", marginLeft: "0.5rem" }} />
                        <Text style={{ fontSize: "11px", marginLeft: "1.15rem" }} >
                            All
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <StarOutlined style={{ fontSize: "2rem", marginLeft: "0.5rem" }} />
                        <Text style={{ fontSize: "11px", marginLeft: "0.25rem" }} >
                            Ratings
                        </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true} >
                        <HistoryOutlined style={{ fontSize: "2rem", marginLeft: "0.75rem" }} />
                        <Text style={{ fontSize: "11px", marginLeft: "0.65rem" }} >
                            History
                        </Text>

                    </Card>
                </Col>
            </Row>

            <Row align="top" style={{ marginTop: "7rem", position: "sticky", bottom: "0", backgroundColor: "white" }}>
                <Col span="4" style={{ marginLeft: "0.75rem" }}>
                    <Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}
                        onClick={() => { router.push({ pathname: '/newgwindex' }); }}
                    >
                        <HomeOutlined style={{ fontSize: '2rem', color: "#ff8235" }} />
                    </Button>

                    <Text style={{ marginTop: "0.5rem", marginLeft: "0.75rem" }}>
                        Home
					</Text>
                </Col>

                <Col span="5" style={{ marginLeft: "0.75rem" }}>
                    <Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}
                        onClick={() => { router.push({ pathname: '/messages' }); }}
                    >
                        <MessageOutlined style={{ fontSize: '2rem', color: "#ff8235" }} />
                    </Button>
                    <Text style={{ marginTop: "0.5rem" }}>
                        Messages
					</Text>
                </Col>

                <Col span="4" style={{ marginLeft: "-0.85rem" }}>
                    <Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}
                        onClick={() => { router.push({ pathname: '/newpost' }); }}
                    >
                        <RocketOutlined style={{ fontSize: '3rem', color: "#ff8235" }} />
                    </Button>
                </Col>

                <Col span="4" style={{ marginLeft: "1rem" }}>
                    <Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}
                        onClick={() => { router.push({ pathname: '/orders' }); }}
                    >
                        <MenuOutlined style={{ fontSize: '2rem', color: "#ff8235" }} />
                    </Button>
                    <Text style={{ marginLeft: "0.65rem", marginTop: "0.5rem" }}>
                        Orders
					</Text>
                </Col>

                <Col span="4" style={{ marginLeft: "0.25rem" }}>
                    <Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}
                        onClick={() => { router.push({ pathname: '/profile' }); }}
                    >
                        <UserOutlined style={{ fontSize: '2rem', color: "#ff8235" }} />
                    </Button>
                    <Text style={{ marginLeft: "0.75rem", marginTop: "0.5rem" }}>
                        Profile
					</Text>
                </Col>
            </Row>
        </>

    )

}
export default connect(state => state,)(orders);