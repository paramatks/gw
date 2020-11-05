import React, { useEffect } from 'react';
import { Row, Col, Typography, Rate, Progress, Button } from 'antd';
import { connect } from "react-redux"
import { EditOutlined, EnvironmentFilled, EyeInvisibleOutlined, HeartOutlined, CloudServerOutlined } from '@ant-design/icons'
import Head from 'next/head'
import { HomeOutlined, MessageOutlined, RocketOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import router from 'next/router'

const { Text } = Typography;

function profile() {

    useEffect(() => {

    }, [])

    return (

        <>


            <Head>
                <title>GoodWork</title>
                <link rel="icon" href="/images\Goodwork_6A rev SC_cropped_transparentBackground.png" />
            </Head>


            <Row align="top" className="profilerownewstyle">

                <Col span="3" style={{ marginLeft: "0.5rem", marginTop: "1rem" }}>
                    <img style={{ objectFit: "cover", position: "relative", height: '3rem', width: '3rem' }}
                        src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                    />
                </Col>



                <Col span="8" style={{ marginTop: "1.25rem", marginLeft: "0.50rem", marginBottom: "0.75rem" }}>
                    <Text style={{ color: "white" }}>
                        Boom
                    </Text>
                    <Rate value={5} style={{ fontSize: "1rem" }}>

                    </Rate>
                </Col>


                <Col span="2" style={{ marginLeft: "9rem", marginTop: "2rem" }}>
                    <EditOutlined style={{ fontSize: "1.5rem", color: "white" }} />
                </Col>
            </Row>


            <Row>
                <Col span="20" style={{ marginLeft: "1rem", marginTop: "0.50rem" }}>
                    <Text>
                        Content
                    </Text>
                </Col>
            </Row>

            <Row>
                <Col span="1" style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                    <EnvironmentFilled className="postsnewlocatoniconstyle" />
                </Col>

                <Col span="10" style={{ marginTop: "1rem", marginLeft: "0.50rem" }}>
                    <Text className="postsnewlocationtextstyle">
                        Chiang Mai, Thailand
                    </Text>
                </Col>

            </Row>

            <Row justify="center" style={{ marginTop: "1.5rem" }}>
                <Col span="3"  >
                    <Text style={{ color: "black" }}>
                        1,655
                    </Text>
                    <br>
                    </br>
                    <Text style={{ color: "black", marginLeft: "0.20rem" }}>
                        Posts
                    </Text>
                </Col>
                <Col span="5" style={{ marginLeft: "1rem" }}>
                    <Text style={{ color: "black", marginLeft: "1.25rem" }} >
                        33K
                    </Text>
                    <br>
                    </br>
                    <Text style={{ color: "black", marginLeft: "0.25rem" }}>
                        Followers
                    </Text>

                </Col>
                <Col span="5" style={{ marginLeft: "1rem" }}>
                    <Text style={{ color: "black", marginLeft: "1.25rem" }}>
                        10K
                    </Text>
                    <br>
                    </br>
                    <Text style={{ color: "black", marginLeft: "0.15rem" }}>
                        Following
                    </Text>
                </Col>
                <Col span="4" style={{ marginLeft: "1rem" }} >

                    <Text style={{ color: "black", marginLeft: "0.75rem" }}>
                        256
                    </Text>
                    <br>
                    </br>
                    <Text style={{ color: "black", marginLeft: "0.25rem" }}>
                        Friends
                </Text>

                </Col>


            </Row>

            <Row justify="start" style={{ marginTop: "1rem" }} >
                <Col span="6" style={{ marginRight: "3rem", marginLeft: "1rem" }}>
                    <EyeInvisibleOutlined style={{ marginLeft: "1.25rem", fontSize: "3rem" }} />
                    <Text style={{ marginLeft: "0.30rem" }} >
                        Blocking List
                    </Text>
                </Col>

                <Col span="3" style={{ marginRight: "4rem" }}>
                    <CloudServerOutlined style={{ fontSize: "3rem" }} />
                    <Text style={{ marginLeft: "0.30rem" }} >
                        Drafts
                    </Text>
                </Col>

                <Col span="4" >
                    <HeartOutlined style={{ fontSize: "3rem", marginLeft: "0.25rem" }} />
                    <Text >
                        Favorites
                        </Text>
                </Col>

            </Row>
            <Row justify="center" style={{ marginTop: "1rem" }}>
                <Col span="7" style={{ marginRight: "1rem" }}>
                    <Text style={{ color: "black", fontSize: "1rem" }}>
                        Overall Rating
                    </Text>
                </Col>

            </Row>

            <Row justify="center">
                <Col span="11" style={{ marginRight: "0.5rem" }} >
                    <Rate value={5} style={{ fontSize: "1.5rem" }}>

                    </Rate>
                </Col>
            </Row>
            <Row justify="center">
                <Col span="10" >
                    <Text style={{ fontSize: "1rem", }}>
                        Positive Rate: 100%
                   </Text>
                </Col>
            </Row>
            <Row>
                <Col span="22" style={{ marginLeft: "1rem" }}>
                    <Text style={{ fontSize: "0.75rem", }}>
                        Service Attitude:
                   </Text>
                    <Progress percent={90} strokeColor={{ from: '#ff8235', to: '#f8d829' }} strokeWidth={20} />
                </Col>
                <Col span="22" style={{ marginLeft: "1rem" }}>
                    <Text style={{ fontSize: "0.75rem", }}>
                        Service Quality:
                   </Text>
                    <Progress percent={90} strokeColor={{ from: '#d8f715', to: '#00ffd3', }} strokeWidth={20} />
                </Col>
                <Col span="22" style={{ marginLeft: "1rem" }}>
                    <Text style={{ fontSize: "0.75rem", }}>
                        Service Efficiency:
                   </Text>
                    <Progress percent={90} strokeColor={{ from: '#ff02af', to: '#f23051', }} strokeWidth={20} />
                </Col>


            </Row>

            <Row align="top" style={{ marginTop: "7rem", position: "sticky", bottom: "0", backgroundColor: "white" }}>
                <Col span="4" style={{ marginLeft: "0.5rem" }}>
                    <Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}
                        onClick={() => { router.push({ pathname: '/newgwindex' }); }}
                    >
                        <HomeOutlined style={{ fontSize: '2rem', color: "#ff8235" }} />
                    </Button>

                    <Text style={{ marginTop: "0.5rem", marginLeft: "0.75rem" }}>
                        Home
					</Text>
                </Col>

                <Col span="5" style={{ marginLeft: "0.5rem" }}>
                    <Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}
                        onClick={() => { router.push({ pathname: '/messages' }); }}
                    >
                        <MessageOutlined style={{ fontSize: '2rem', color: "#ff8235" }} />
                    </Button>

                    <Text style={{ marginLeft: "0.25rem", marginTop: "0.5rem" }}>
                        Messages
					</Text>
                </Col>

                <Col span="4" style={{ marginLeft: "-0.5rem" }}>
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

                <Col span="4" style={{ marginLeft: "0rem" }}>
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
export default connect(state => state)(profile);


























