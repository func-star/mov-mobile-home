import React, { Component } from 'react'

export default class Yyn extends Component {
	fileList = []
	uploadFile = () => {
		const input = this.refs.inputRef
		for (let i of input.files) {
			this.fileList.push(i.name.split('.')[0])
		}
		console.log(this.fileList)
		this.setState({})
	}

	render () {
		return (
			<div>
				<form ref='formRef' encType='multipart/form-data' method='POST' target='uploadframe'>
					<input
						name='file'
						multiple
						type='file'
						ref='inputRef'
						onChange={this.uploadFile} />
				</form>
				{
					this.fileList.map((item, index) => {
						return <div key={index}>{item}</div>
					})
				}
			</div>
		)
	}
}
