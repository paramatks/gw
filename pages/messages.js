import React, { useEffect } from 'react';
import { Row, Col, Typography, Rate, Avatar, Button } from 'antd';
import Head from 'next/head'
import { connect } from "react-redux"
import { BellOutlined, PlusCircleOutlined, HomeOutlined, MessageOutlined, RocketOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Formik } from 'formik'
import * as Yup from 'yup';
import { Form, Input } from 'formik-antd'
import router from 'next/router'

const { Text } = Typography;
const { TextArea } = Input;

function messages() {

    useEffect(() => {

    }, [])



    return (
        <>
            <Head>
                <title>GoodWork</title>
                <link rel="icon" href="/images\Goodwork_6A rev SC_cropped_transparentBackground.png" />
            </Head>

            <Row className="indexnewstyle" align="middle" justify="start" >
                <Col span="3" style={{ marginLeft: "1rem", marginTop: "1rem", marginBottom: "1rem" }}>
                    <PlusCircleOutlined style={{ color: "white", fontSize: "2rem" }} />
                </Col>

                <Col span="4" style={{ marginLeft: "5.5rem", marginTop: "1rem", marginBottom: "1rem" }}>
                    <Text style={{ color: "white" }}>
                        Messages
                    </Text>
                </Col>
                <Col span="2" style={{ marginLeft: "6.5rem", marginTop: "1rem", marginBottom: "1rem" }}>
                    <BellOutlined style={{ color: "white", fontSize: "2rem" }} />
                </Col>
                <Row justify="center" style={{ width: "100%", marginBottom: "-1rem" }}>
                    <Formik initialValues={{
                        search: ""
                    }}
                        validationSchema={Yup.object({
                            search: Yup.string()
                                .required("Required"),
                        })}
                    >
                        <Form style={{ width: "100%", marginLeft: "1rem", marginRight: "1rem" }}>
                            <Form.Item name="search">
                                <TextArea style={{ borderRadius: "30px" }}
                                    rows={1}
                                    placeholder="Search"
                                    size="large"
                                    name="search"
                                    type="text"
                                />
                            </Form.Item>
                        </Form>
                    </Formik>

                </Row>
            </Row>
            <Row align="middle" justify="start" style={{ borderTopColor: "#f3f2ed", borderTopWidth: "thick", borderTopStyle: "solid", marginBottom: "1rem" }}>
                <Col span="3" style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>
                    <Avatar size="large"
                        src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    />

                </Col>
                <Row justify="start" style={{ width: "100%", marginTop: "-2.5rem", marginLeft: "4.5rem" }}>
                    <Text style={{ color: "black" }}>
                        Scott Williams
                   </Text>
                    <Row justify="start" style={{ width: "100%" }} >
                        <Rate className="postsnewratestyle"
                            value={4}
                        />
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <Text style={{ color: "#6e6e74" }}>
                            Hi! For this matter I need to think again.
                        </Text>
                    </Row>

                </Row>
                <Col span="5" style={{ marginLeft: "17rem", marginTop: "-6rem" }}>
                    <Text>
                        Today 13:13
                    </Text>
                </Col>
            </Row>
            <Row align="middle" justify="start" style={{ borderTopColor: "#f3f2ed", borderTopWidth: "thick", borderTopStyle: "solid", marginBottom: "1rem" }}>
                <Col span="3" style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>
                    <Avatar size="large"
                        src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    />

                </Col>
                <Row justify="start" style={{ width: "100%", marginTop: "-2.5rem", marginLeft: "4.5rem" }}>
                    <Text style={{ color: "black" }}>
                        Tony Evans
                   </Text>
                    <Row justify="start" style={{ width: "100%" }} >
                        <Rate className="postsnewratestyle"
                            value={3}
                        />
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <Text style={{ color: "#6e6e74" }}>
                            How long will this repair take?
                        </Text>
                    </Row>

                </Row>
                <Col span="5" style={{ marginLeft: "17rem", marginTop: "-6rem" }}>
                    <Text>
                        Today 11:20
                    </Text>
                </Col>
            </Row>
            <Row align="middle" justify="start" style={{ borderTopColor: "#f3f2ed", borderTopWidth: "thick", borderTopStyle: "solid", marginBottom: "1rem" }}>
                <Col span="3" style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>
                    <Avatar size="large"
                        src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    />

                </Col>
                <Row justify="start" style={{ width: "100%", marginTop: "-2.5rem", marginLeft: "4.5rem" }}>
                    <Text style={{ color: "black" }}>
                        Stephen Cooper
                   </Text>
                    <Row justify="start" style={{ width: "100%" }} >
                        <Rate className="postsnewratestyle"
                            value={4}
                        />
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <Text style={{ color: "#6e6e74" }}>
                            Hi! How will it take to reach me?
                        </Text>
                    </Row>

                </Row>
                <Col span="5" style={{ marginLeft: "17rem", marginTop: "-6rem" }}>
                    <Text>
                        Today 11:12
                    </Text>
                </Col>
            </Row>
            <Row align="middle" justify="start" style={{ borderTopColor: "#f3f2ed", borderTopWidth: "thick", borderTopStyle: "solid", marginBottom: "1rem" }}>
                <Col span="3" style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>
                    <Avatar size="large"
                        src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    />

                </Col>
                <Row justify="start" style={{ width: "100%", marginTop: "-2.5rem", marginLeft: "4.5rem" }}>
                    <Text style={{ color: "black" }}>
                        Barbara Ellis
                   </Text>
                    <Row justify="start" style={{ width: "100%" }} >
                        <Rate className="postsnewratestyle"
                            value={4}
                        />
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <Text style={{ color: "#6e6e74" }}>
                            I need to confirm the time
                        </Text>
                    </Row>

                </Row>
                <Col span="5" style={{ marginLeft: "17rem", marginTop: "-6rem" }}>
                    <Text>
                        Today 09:30
                    </Text>
                </Col>
            </Row>
            <Row align="middle" justify="start" style={{ borderTopColor: "#f3f2ed", borderTopWidth: "thick", borderTopStyle: "solid", marginBottom: "1rem" }}>
                <Col span="3" style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>
                    <Avatar size="large"
                        src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    />

                </Col>
                <Row justify="start" style={{ width: "100%", marginTop: "-2.5rem", marginLeft: "4.5rem" }}>
                    <Text style={{ color: "black" }}>
                        Rebecca Rose
                   </Text>
                    <Row justify="start" style={{ width: "100%" }} >
                        <Rate className="postsnewratestyle"
                            value={2}
                        />
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <Text style={{ color: "#6e6e74" }}>
                            Can the price be more favorable?
                        </Text>
                    </Row>

                </Row>
                <Col span="5" style={{ marginLeft: "17rem", marginTop: "-6rem" }}>
                    <Text>
                        Today 13:23
                    </Text>
                </Col>
            </Row>
            <Row align="middle" justify="start" style={{ borderTopColor: "#f3f2ed", borderTopWidth: "thick", borderTopStyle: "solid", marginBottom: "1rem" }}>
                <Col span="3" style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>
                    <Avatar size="large"
                        src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    />

                </Col>
                <Row justify="start" style={{ width: "100%", marginTop: "-2.5rem", marginLeft: "4.5rem" }}>
                    <Text style={{ color: "black" }}>
                        Frank Robertson
                   </Text>
                    <Row justify="start" style={{ width: "100%" }} >
                        <Rate className="postsnewratestyle"
                            value={3}
                        />
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <Text style={{ color: "#6e6e74" }}>
                            My boat will be available the day after tomo...
                        </Text>
                    </Row>

                </Row>
                <Col span="7" style={{ marginLeft: "15.65rem", marginTop: "-6rem" }}>
                    <Text>
                        Yesterday 21:12
                    </Text>
                </Col>
            </Row>
            <Row align="middle" justify="start" style={{ borderTopColor: "#f3f2ed", borderTopWidth: "thick", borderTopStyle: "solid", marginBottom: "1rem" }}>
                <Col span="3" style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>
                    <Avatar size="large"
                        src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    />

                </Col>
                <Row justify="start" style={{ width: "100%", marginTop: "-2.5rem", marginLeft: "4.5rem" }}>
                    <Text style={{ color: "black" }}>
                        George Palmer
                   </Text>
                    <Row justify="start" style={{ width: "100%" }} >
                        <Rate className="postsnewratestyle"
                            value={4}
                        />
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <Text style={{ color: "#6e6e74" }}>
                            Will you have time next week? Need your help
                        </Text>
                    </Row>

                </Row>
                <Col span="7" style={{ marginLeft: "15.20rem", marginTop: "-6rem" }}>
                    <Text>
                        2020/7/31 13:23
                    </Text>
                </Col>
            </Row>

            <Row align="top" style={{ marginTop: "4rem" }}>
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
                    <Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}>
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

export default connect(state => state,)(messages);