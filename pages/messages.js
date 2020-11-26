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

            <Row className="messagesstyle" align="middle" justify="start" >
                <Col span="3" className="messagespluscolstyle">
                    <PlusCircleOutlined className="messagesplusiconstyle" />
                </Col>
                <Col span="4" className="messagestextcolstyle">
                    <Text className="messagestextstyle">
                        Messages
                    </Text>
                </Col>
                <Col span="2" className="messagesbellcolstyle">
                    <BellOutlined className="messagesbelliconstyle" />
                </Col>
                <Row justify="center" className="messagesformikrowstyle">
                    <Formik initialValues={{
                        search: ""
                    }}
                        validationSchema={Yup.object({
                            search: Yup.string()
                                .required("Required"),
                        })}
                    >
                        <Form className="messagesformstyle" >
                            <Form.Item name="search">
                                <TextArea className="messagesformtextareastyle"
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

            <Row align="middle" justify="start" className="messagescontentrowstyle">
                <Col span="3" className="messagesavatarcolstyle">
                    <Avatar size="large"
                        src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    />

                </Col>
                <Row justify="start" className="messagescontenttextrowstyle" >
                    <Text className="messagesnametextstyle">
                        Scott Williams
                    </Text>
                    <Row justify="start" className="messagesratingtextcolstyle" >
                        <Rate className="postsnewratestyle"
                            value={4}
                        />
                    </Row>

                    <Row className="messagesratingtextcolstyle">
                        <Text className="messagescontenttextstyle">
                            Hi! For this matter I need to think again.
                        </Text>
                    </Row>

                </Row>

                <Col span="5" className="messagesdatestyle">
                    <Text>
                        Today 13:13
                    </Text>
                </Col>
            </Row>

            <Row align="middle" justify="start" className="messagescontentrowstyle">
                <Col span="3" className="messagesavatarcolstyle">
                    <Avatar size="large"
                        src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    />

                </Col>
                <Row justify="start" className="messagescontenttextrowstyle">
                    <Text className="messagesnametextstyle">
                        Tony Evans
                    </Text>
                    <Row justify="start" className="messagesratingtextcolstyle" >
                        <Rate className="postsnewratestyle"
                            value={3}
                        />
                    </Row>

                    <Row className="messagesratingtextcolstyle">
                        <Text className="messagescontenttextstyle">
                            How long will this repair take?
                        </Text>
                    </Row>

                </Row>

                <Col span="5" className="messagesdatestyle">
                    <Text>
                        Today 11:20
                    </Text>
                </Col>
            </Row>

            <Row align="middle" justify="start" className="messagescontentrowstyle">
                <Col span="3" className="messagesavatarcolstyle">
                    <Avatar size="large"
                        src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    />

                </Col>
                <Row justify="start" className="messagescontenttextrowstyle">
                    <Text className="messagesnametextstyle">
                        Stephen Cooper
                    </Text>
                    <Row justify="start" className="messagesratingtextcolstyle" >
                        <Rate className="postsnewratestyle"
                            value={4}
                        />
                    </Row>

                    <Row className="messagesratingtextcolstyle">
                        <Text className="messagescontenttextstyle">
                            Hi! How will it take to reach me?
                        </Text>
                    </Row>

                </Row>

                <Col span="5" className="messagesdatestyle">
                    <Text>
                        Today 11:12
                    </Text>
                </Col>
            </Row>

            <Row align="middle" justify="start" className="messagescontentrowstyle">
                <Col span="3" className="messagesavatarcolstyle">
                    <Avatar size="large"
                        src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    />
                </Col>
                <Row justify="start" className="messagescontenttextrowstyle">
                    <Text className="messagesnametextstyle">
                        Barbara Ellis
                    </Text>
                    <Row justify="start" className="messagesratingtextcolstyle" >
                        <Rate className="postsnewratestyle"
                            value={4}
                        />
                    </Row>

                    <Row className="messagesratingtextcolstyle">
                        <Text className="messagescontenttextstyle">
                            I need to confirm the time
                        </Text>
                    </Row>

                </Row>

                <Col span="5" className="messagesdatestyle">
                    <Text>
                        Today 09:30
                    </Text>
                </Col>
            </Row>

            <Row align="middle" justify="start" className="messagescontentrowstyle">
                <Col span="3" className="messagesavatarcolstyle">
                    <Avatar size="large"
                        src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    />

                </Col>
                <Row justify="start" className="messagescontenttextrowstyle">
                    <Text className="messagesnametextstyle">
                        Rebecca Rose
                    </Text>
                    <Row justify="start" className="messagesratingtextcolstyle" >
                        <Rate className="postsnewratestyle"
                            value={2}
                        />
                    </Row>

                    <Row className="messagesratingtextcolstyle">
                        <Text className="messagescontenttextstyle">
                            Can the price be more favorable?
                        </Text>
                    </Row>

                </Row>

                <Col span="5" className="messagesdatestyle">
                    <Text>
                        Today 13:23
                    </Text>
                </Col>
            </Row>

            <Row align="middle" justify="start" className="messagescontentrowstyle">
                <Col span="3" className="messagesavatarcolstyle">
                    <Avatar size="large"
                        src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    />

                </Col>
                <Row justify="start" className="messagescontenttextrowstyle">
                    <Text className="messagesnametextstyle">
                        Frank Robertson
                    </Text>
                    <Row justify="start" className="messagesratingtextcolstyle" >
                        <Rate className="postsnewratestyle"
                            value={3}
                        />
                    </Row>

                    <Row className="messagesratingtextcolstyle">
                        <Text className="messagescontenttextstyle">
                            My boat will be available the day after tomo...
                        </Text>
                    </Row>

                </Row>

                <Col span="7" className="messageslongdate1style">
                    <Text>
                        Yesterday 21:12
                    </Text>
                </Col>
            </Row>

            <Row align="middle" justify="start" className="messagescontentrowstyle">
                <Col span="3" className="messagesavatarcolstyle">
                    <Avatar size="large"
                        src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    />
                </Col>
                <Row justify="start" className="messagescontenttextrowstyle">
                    <Text className="messagesnametextstyle">
                        George Palmer
                    </Text>
                    <Row justify="start" className="messagesratingtextcolstyle" >
                        <Rate className="postsnewratestyle"
                            value={4}
                        />
                    </Row>

                    <Row className="messagesratingtextcolstyle">
                        <Text className="messagescontenttextstyle">
                            Will you have time next week? Need your help
                        </Text>
                    </Row>

                </Row>

                <Col span="7" className="messageslongdate2style">
                    <Text>
                        2020/7/31 13:23
                    </Text>
                </Col>
            </Row>

            <Row align="top" className="footermessagesrowstyle">
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

export default connect(state => state)(messages);