import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input, Span } from 'reactstrap';

class AddDiscover extends Component {
	constructor(props) {
		super(props);

		this.state = {
			file: null,
			title: '',
            day: '',
			image: '',
            content: '',
			errors: {
				image: [''],
				title: [''],
                day: [''],
				content: [''],
			},
		}
	}

	onRedirect = () => {
		this.setState({
			file: null,
			image: '',
			title: '',
            day: '',
            content: '',
		});
	}

	handleAddSubmit = (e) => {
		e.preventDefault();
		const fileInput = document.querySelector("#fileupload");
		const formData = new FormData();
		console.log(fileInput);
		console.log(fileInput.files[0]);
		formData.append('image', fileInput.files[0]);
		formData.append('title', this.state.title);
        formData.append('day', this.state.day);
        formData.append('content', this.state.content);


		fetch('http://localhost:8000/api/discover', {
			method: 'POST',
			body: formData,

		})
			.then(res => { return res.json() })
			.then(data => {
				if (data.status === "error") {
					this.setState({
						status: data.status,
						errors: data.errors,
					});

				} else {
					this.props.handleAddSubmit(data.data);
					this.props.toogleAddModal();
					this.onRedirect();
					return data;
				}
			})
	}



	onChangeTitle = (e) => {
		this.setState({ title: e.target.value });
	}
    onChangeDay = (e) => {
		this.setState({ day: e.target.value });
	}
    onChangeContent= (e) => {
		this.setState({ content: e.target.value });
	}
	onChangeImage = (e) => {
		this.setState({ file: URL.createObjectURL(e.target.files[0]) });
	}


	render() {
		return (
			<div>
				<Button color="primary" onClick={this.props.toogleAddModal}>Add new Discover</Button>
				<Modal isOpen={this.props.newModalDiscover} toggle={this.props.toogleAddModal}>
					<form onSubmit={this.handleAddSubmit} encType="multipart/form-data" method="post">
						<ModalHeader toggle={this.props.toogleAddModal}>Add a new Discover</ModalHeader>
						<ModalBody>
							<FormGroup>
								<Label for="Title">Title</Label>
								<Input type="text" name="title" onChange={this.onChangeTitle} />
								<span className="text-danger">{this.state.errors.title}</span>
							</FormGroup>
                            <FormGroup>
								<Label for="Day">Day</Label>
								<Input type="text" name="day" onChange={this.onChangeDay} />
								<span className="text-danger">{this.state.errors.day}</span>
							</FormGroup>
                            <FormGroup>
								<Label for="Content">Content</Label>
								<Input type="text" name="content" onChange={this.onChangeContent} />
								<span className="text-danger">{this.state.errors.content}</span>
							</FormGroup>
							<FormGroup>
								<Label for="image">Image</Label>
								<Input id="fileupload" type="file" name="image" onChange={this.onChangeImage} />
								<span className="text-danger">{this.state.errors.image}</span>
							</FormGroup>
						</ModalBody>
						<ModalFooter>
							<Button type="submit" color="primary" >Add</Button>
							<Button color="secondary" >Cancel</Button>
						</ModalFooter>
					</form>
				</Modal>
			</div>
		);//đóng return

	}
}
export default AddDiscover;