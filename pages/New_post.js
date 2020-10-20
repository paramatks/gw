import React, { useEffect, useState } from 'react';
import { Tabs, Row, Col, Button, Typography, PageHeader , Modal} from 'antd';
import Head from 'next/head'
import { connect } from "react-redux"
import Postsnew from '../components/posts_new';
import { BellOutlined, CameraOutlined, HomeOutlined, MessageOutlined, RocketOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import router from 'next/router'
import {Formik} from 'formik'
import * as Yup from 'yup';
import { Form, SubmitButton, ResetButton, Input } from 'formik-antd'

const { Text } = Typography;
const { TextArea } = Input;

function Newpost() {

    useEffect(() => {

    }, [])

    const [visible, setVisible] = useState(false);
	/*const [modalText, setModalText] = useState('New Comment')*/
	const [confirmLoading, setConfirmLoading] = useState(false)

	/*const [state, setstate] = useState({
		ModalText: 'Content of the modal',
		Visible: false,
		ConfirmLoading: false,
	});*/

	const showModal = () => {
		setVisible(true)
	};

	const handleOk = () => {

		setModalText('The modal will be closed after two seconds')
		setConfirmLoading(true)

		setTimeout(() => {
			setVisible(false)
			setConfirmLoading(false)
		}, 2000);
	};

	const handleCancel = () => {
		console.log('Clicked cancel button');
		setVisible(false)
	};

    return (



        <>

            <Head>
                <title>GoodWork</title>
                <link rel="icon" href="/images\Goodwork_6A rev SC_cropped_transparentBackground.png" />
            </Head>

            <PageHeader
                className="profilerownewstyle"
                onBack={() => window.history.back()}

                title={<span style={{marginLeft:"5rem"}}><Text style={{color:"white"}}>New Post</Text> </span>}

                extra={
                    <Button shape="round" size="medium" style={{backgroundColor:"#f8d829"}}><Text style={{color:"red"}}>Share
                        
                        </Text> </Button>}
            />

                        
								<Formik initialValues={{
									comment: ""
								}}
									validationSchema={Yup.object({
										comment: Yup.string()
											.required("Required"),
									})}
									onSubmit={async (values, { setSubmitting }) => {
										//await new Promise(r => setTimeout(r, 500));
										//setSubmitting(false);
										console.log(values)
									}}>
									<Form>
										<Form.Item
											name="Post">
											<TextArea
												rows={25}
												size="large"
												name="Post"
												type="text"							
											/>
										</Form.Item>
										<SubmitButton
											style={{ marginLeft: "17rem" }}
										>Submit</SubmitButton>
										<ResetButton />
									</Form>
								</Formik>
						

        </>
    )
}


export default connect(state => state,)(Newpost);