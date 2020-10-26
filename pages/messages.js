import React, { useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
import Head from 'next/head'
import { connect } from "react-redux"
import { BellOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Formik } from 'formik'
import * as Yup from 'yup';
import { Form, Input } from 'formik-antd'

const { Text } = Typography;
const { TextArea } = Input;

function messages(props) {

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

        </>
    )

}

export default connect(state => state,)(messages);