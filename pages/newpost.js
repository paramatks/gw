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

				title={<span style={{ marginLeft: "5rem" }}><Text style={{ color: "white" }}>New Post</Text> </span>}

				extra={
					<Button shape="round" size="medium" style={{ backgroundColor: "#f8d829" }}>
						<Text style={{ color: "red" }}>
							Share
						</Text>
					</Button>}
			/>

			<Formik initialValues={{
				newpost: ""
			}}
				validationSchema={Yup.object({
					newpost: Yup.string()
						.required("Required"),
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

			<Row style={{ marginTop: "1rem", position: "sticky", bottom: "0" }}>
				<Col span="12" style={{ marginLeft: "1rem" }}>
					<Button shape="round">
						<EnvironmentOutlined style={{ color: "blue" }} />
						<Text style={{ color: "blue" }}>
							Bangkok, Thailand
						</Text>
					</Button>
				</Col>

				<Col span="8" style={{ marginLeft: "2rem" }}>
					<Button shape="round">
						<GlobalOutlined style={{ color: "blue" }} />
						<Text style={{ color: "blue" }} >
							Public
						</Text>
						<DownOutlined style={{ color: "blue" }} />
					</Button>
				</Col>
				<Row style={{ marginTop: "0.75rem", backgroundColor: "white", width: "100%" }}>
					<Col span="4" style={{ marginLeft: "0.25rem", marginBottom: "0.75rem" }}>
						<Button type="link">
							<CameraOutlined style={{ fontSize: "1.5rem", color: "black" }} />
						</Button>
					</Col>
					<Col span="4" style={{ marginBottom: "0.75rem" }}>
						<Button type="link">
							<VideoCameraOutlined style={{ fontSize: "1.5rem", color: "black" }} />
						</Button>
					</Col>
					<Col span="4" style={{ marginBottom: "0.75rem" }}>
						<Button type="link">
							<Text strong="true" style={{ color: "black", fontSize: "23px", marginTop: "-0.55rem" }} >
								@
							</Text>
						</Button>
					</Col>
					<Col span="4" style={{ marginBottom: "0.75rem" }} >
						<Button type="link">
							<Text strong="true" style={{ color: "black", fontSize: "23px", marginTop: "-0.50rem" }}>
								#
							</Text>
						</Button>
					</Col>
					<Col span="4" style={{ marginBottom: "0.75rem", borderLeftStyle: "solid", borderLeftColor: "gray", borderLeftWidth: "thin" }}>
						<Button type="link">
							<ContainerOutlined style={{ fontSize: "1.5rem", color: "black" }} />
						</Button>
					</Col>
					<Col span="3">
						<Button type="link" style={{ marginLeft: "-1rem" }}>
							<Text style={{ color: "black", fontSize: "16px", marginTop: "-1rem" }}>
								Drafts
							</Text>
						</Button>
					</Col>
				</Row>
			</Row>



		</>
	)
}


export default connect(state => state,)(newPost);