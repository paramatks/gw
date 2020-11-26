import React, { useEffect } from 'react';
import { Row, Col, Button, Typography, PageHeader } from 'antd';
import Head from 'next/head'
import { connect } from "react-redux"
import { Formik } from 'formik'
import * as Yup from 'yup';
import { Form, Input } from 'formik-antd'
import { EnvironmentOutlined, GlobalOutlined, DownOutlined, CameraOutlined, VideoCameraOutlined, ContainerOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { TextArea } = Input;

function newPost() {

	useEffect(() => {

	}, [])

	return (
		<>
			<Head>
				<title>GoodWork</title>
				<link rel="icon" href="/images\Goodwork_6A rev SC_cropped_transparentBackground.png" />
			</Head>

			<PageHeader
				className="profilerownewstyle"
				onBack={() => window.history.back()}

				title={<Text className="newposttitletextstyle" >New Post</Text>}

				extra={
					<Button shape="round" size="medium" className="newpostsharebuttonstyle">
						<Text className="newpostsharetextstyle">
							Share
						</Text>
					</Button>}
			/>

			<Formik initialValues={{
				newpost: ""
			}}
				validationSchema={Yup.object({
					newpost: Yup.string()
						.required("Required")
				})}
				onSubmit={async (values, { setSubmitting }) => {
					console.log(values)
				}}>
				<Form>
					<Form.Item
						name="newpost">
						<TextArea
							rows={25}
							size="large"
							name="newpost"
							type="text"
							placeholder="Say something..."
						/>
					</Form.Item>
				</Form>
			</Formik>

			<Row className="newpostrow1style">
				<Col span="12" className="newpostlocationcolstyle">
					<Button shape="round">
						<EnvironmentOutlined className="newpostlocationpublicicontextstyle" />
						<Text className="newpostlocationpublicicontextstyle">
							Bangkok, Thailand
						</Text>
					</Button>
				</Col>
				<Col span="8" className="newpostpubliccolstyle">
					<Button shape="round">
						<GlobalOutlined className="newpostlocationpublicicontextstyle" />
						<Text className="newpostlocationpublicicontextstyle" >
							Public
						</Text>
						<DownOutlined className="newpostlocationpublicicontextstyle" />
					</Button>
				</Col>
				<Row className="newpostrow2style">
					<Col span="4" className="newpostcameracolstyle">
						<Button type="link">
							<CameraOutlined className="newpostcameraiconstyle" />
						</Button>
					</Col>
					<Col span="4" className="newpostvideocameraathashtagcolstyle">
						<Button type="link">
							<VideoCameraOutlined className="newpostvideocameracontainericonstyle" />
						</Button>
					</Col>
					<Col span="4" className="newpostvideocameraathashtagcolstyle">
						<Button type="link">
							<Text strong="true" className="newpostattextstyle" >
								@
							</Text>
						</Button>
					</Col>
					<Col span="4" className="newpostvideocameraathashtagcolstyle" >
						<Button type="link">
							<Text strong="true" className="newposthashtagtextstyle">
								#
							</Text>
						</Button>
					</Col>
					<Col span="4" className="newpostcontainercolstyle">
						<Button type="link">
							<ContainerOutlined className="newpostvideocameracontainericonstyle" />
						</Button>
					</Col>
					<Col span="3">
						<Button type="link" className="newpostdraftsbuttonstyle">
							<Text className="newpostdraftstextstyle">
								Drafts
							</Text>
						</Button>
					</Col>
				</Row>

			</Row>

		</>
	)
}

export default connect(state => state)(newPost);