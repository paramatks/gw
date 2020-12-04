import React, { useEffect } from 'react';
import { Row, Col, Typography, Rate, Progress, Button } from 'antd';
import { connect } from "react-redux"
import { EditOutlined, EnvironmentFilled, EyeInvisibleOutlined, HeartOutlined, CloudServerOutlined, SettingOutlined } from '@ant-design/icons'
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
                <Col span="3" className="profilesettingscolstyle">
                    <Button type="link">
                        <SettingOutlined className="profilesettingsiconstyle"/>
                    </Button>  
                </Col>
                <Col span="3" className="profileavatarcolstyle" >
                    <img className="profileavatarimgstyle"
                        src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                    />
                </Col>
                <Col span="8" className="profileusercolstyle">
                    <Text className="profileusertextstyle">
                        Boom
                    </Text>
                    <Rate value={5} className="profileuserratestyle" />
                </Col>
                <Col span="3" className="profileeditcolstyle">
                    <Button type="link">
                        <EditOutlined className="profileediticonstyle" />
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col span="20" className="profilecontentcolstyle">
                    <Text>
                        Content
                    </Text>
                </Col>
            </Row>

            <Row>
                <Col span="1" className="profilelocationcolstyle">
                    <EnvironmentFilled className="postsnewlocatoniconstyle" />
                </Col>
                <Col span="10" style={{ marginTop: "1rem", marginLeft: "0.50rem" }}>
                    <Text className="postsnewlocationtextstyle">
                        Chiang Mai, Thailand
                    </Text>
                </Col>
            </Row>

            <Row justify="center" className="profilerow4style">
                <Col span="3" className="profilepostscolstyle"  >
                    <Text className="profilepostsamounttextstyle">
                        1,655
                    </Text>
                    <br>
                    </br>
                    <Text className="profilepoststextstyle">
                        Posts
                    </Text>
                </Col>
                <Col span="4" className="profilefollowerscolstyle">
                    <Text className="profilefollowersamounttextstyle" >
                        33K
                    </Text>
                    <br>
                    </br>
                    <Text className="profilefollowerstextstyle">
                        Followers
                    </Text>
                </Col>
                <Col span="5" className="profilefollowingcolstyle">
                    <Text className="profilefollowingamounttextstyle">
                        10K
                    </Text>
                    <br>
                    </br>
                    <Text className="profilefollowingtextstyle">
                        Following
                    </Text>
                </Col>
                <Col span="4" className="profilefriendscolstyle" >
                    <Text className="profilefriendsamounttextstyle">
                        256
                    </Text>
                    <br>
                    </br>
                    <Text className="profilefriendstextstyle">
                        Friends
                    </Text>
                </Col>
            </Row>

            <Row justify="start" className="profilerow5style" >
                <Col span="6" className="profileblockinglistcolstyle">
                    <EyeInvisibleOutlined className="profileeyeinvisibleiconstyle" />
                    <Text className="profileblockinglisttextstyle" >
                        Blocking List
                    </Text>
                </Col>
                <Col span="4" className="profiledraftscolstyle">
                    <CloudServerOutlined className="profilecloudservericonstyle" />
                    <Text className="profiledraftstextstyle" >
                        Drafts
                    </Text>
                </Col>
                <Col span="4" className="profilefavoritescolstyle" >
                    <HeartOutlined className="profilehearticonstyle" />
                    <Text >
                        Favorites
                    </Text>
                </Col>
            </Row>

            <Row justify="center" className="profilerow6style">
                <Col span="7" className="profileoverallratingcolstyle">
                    <Text className="profileoverallratingtextstyle">
                        Overall Rating
                    </Text>
                </Col>
            </Row>

            <Row justify="center">
                <Col span="11" className="profileoverallratingratecolstyle" >
                    <Rate value={5} className="profileoverallratingratestyle" />
                </Col>
            </Row>

            <Row justify="center">
                <Col span="8" className="profilepositiveratecolstyle" >
                    <Text className="profilepostiveratetextstyle">
                        Positive Rate: 100%
                   </Text>
                </Col>
            </Row>

            <Row>
                <Col span="22" className="profileserviceattitudequalityefficiencycolstyle">
                    <Text className="profileserviceattitudequalityefficiencytextstyle">
                        Service Attitude:
                   </Text>
                    <Progress percent={90} strokeColor={{ from: '#ff8235', to: '#f8d829' }} strokeWidth={20} />
                </Col>
                <Col span="22" className="profileserviceattitudequalityefficiencycolstyle">
                    <Text className="profileserviceattitudequalityefficiencytextstyle">
                        Service Quality:
                   </Text>
                    <Progress percent={90} strokeColor={{ from: '#d8f715', to: '#00ffd3', }} strokeWidth={20} />
                </Col>
                <Col span="22" className="profileserviceattitudequalityefficiencycolstyle">
                    <Text className="profileserviceattitudequalityefficiencytextstyle">
                        Service Efficiency:
                   </Text>
                    <Progress percent={90} strokeColor={{ from: '#ff02af', to: '#f23051', }} strokeWidth={20} />
                </Col>
            </Row>

            <Row align="top" className="footerprofilerowstyle">
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

export default connect(state => state)(profile);


























