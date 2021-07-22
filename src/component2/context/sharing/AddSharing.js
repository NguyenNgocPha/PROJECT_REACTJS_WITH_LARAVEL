import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input, Span } from 'reactstrap';

class AddSharing extends Component {
	constructor(props) {
		super(props);

		this.state = {
			file: null,
			name: '',
            job: '',
			image: '',
            share: '',
			errors: {
				image: [''],
				name: [''],
                job: [''],
				share: [''],
			},
		}
	}

	onRedirect = () => {
		this.setState({
			file: null,
			image: '',
			name: '',
            job: '',	
            share: '',
		});
	}

	handleAddSubmit = (e) => {
		e.preventDefault();
		const fileInput = document.querySelector("#fileupload");
		const formData = new FormData();
		console.log(fileInput);
		console.log(fileInput.files[0]);
		formData.append('image', fileInput.files[0]);
		formData.append('name', this.state.name);
        formData.append('job', this.state.job);
        formData.append('share', this.state.share);


		fetch('http://localhost:8000/api/sharing', {
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



	onChangeName = (e) => {
		this.setState({ name: e.target.value });
	}
    onChangeJob = (e) => {
		this.setState({ job: e.target.value });
	}
    onChangeShare= (e) => {
		this.setState({ share: e.target.value });
	}
	onChangeImage = (e) => {
		this.setState({ file: URL.createObjectURL(e.target.files[0]) });
	}


	render() {
		return (
			<div>
				<Button color="primary" onClick={this.props.toogleAddModal}>Add new Sharing</Button>
				<Modal isOpen={this.props.newModalSharing} toggle={this.props.toogleAddModal}>
					<form onSubmit={this.handleAddSubmit} encType="multipart/form-data" method="post">
						<ModalHeader toggle={this.props.toogleAddModal}>Add a new Sharing</ModalHeader>
						<ModalBody>
							<FormGroup>
								<Label for="namecompany">Name Company</Label>
								<Input type="text" name="name" onChange={this.onChangeName} />
								<span className="text-danger">{this.state.errors.name}</span>
							</FormGroup>
                            <FormGroup>
								<Label for="namecompany">Job</Label>
								<Input type="text" name="job" onChange={this.onChangeJob} />
								<span className="text-danger">{this.state.errors.job}</span>
							</FormGroup>
                            <FormGroup>
								<Label for="namecompany">Share</Label>
								<Input type="text" name="share" onChange={this.onChangeShare} />
								<span className="text-danger">{this.state.errors.share}</span>
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
export default AddSharing;