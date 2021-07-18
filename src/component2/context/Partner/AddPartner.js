import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input, Span } from 'reactstrap';

class AddPartner extends Component {
	constructor(props) {
		super(props);

		this.state = {
			file: null,
			namecompany: '',
			image: '',
			errors: {
				image: [''],
				namecompany: [''],
			},
		}
	}

	onRedirect = () => {
		this.setState({
			file: null,
			image: '',
			namecompany: '',
		});
	}

	handleAddSubmit = (e) => {
		e.preventDefault();
		const fileInput = document.querySelector("#fileupload");
		const formData = new FormData();
		console.log(fileInput);
		console.log(fileInput.files[0]);
		formData.append('image', fileInput.files[0]);
		formData.append('namecompany', this.state.namecompany);


		fetch('http://localhost:8000/api/partner', {
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



	onChangeNameCompany = (e) => {
		this.setState({ namecompany: e.target.value });
	}

	onChangeImage = (e) => {
		this.setState({ file: URL.createObjectURL(e.target.files[0]) });
	}


	render() {
		return (
			<div>
				<Button color="primary" onClick={this.props.toogleAddModal}>Add new Partner</Button>
				<Modal isOpen={this.props.newModalPartner} toggle={this.props.toogleAddModal}>
					<form onSubmit={this.handleAddSubmit} encType="multipart/form-data" method="post">
						<ModalHeader toggle={this.props.toogleAddModal}>Add a new Partner</ModalHeader>
						<ModalBody>
							<FormGroup>
								<Label for="namecompany">Name Company</Label>
								<Input type="text" name="namecompany" onChange={this.onChangeNameCompany} />
								<span className="text-danger">{this.state.errors.namecompany}</span>
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
export default AddPartner;