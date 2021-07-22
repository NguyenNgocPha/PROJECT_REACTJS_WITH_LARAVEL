import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input, Span } from 'reactstrap';

class AddCampaign extends Component {
	constructor(props) {
		super(props);

		this.state = {
			file: null,
			
			name: '',
            content: '',
			errors: {
				
				
                name: [''],
				content: [''],
			},
		}
	}

	onRedirect = () => {
		this.setState({
			file: null,
			name: '',
            content: '',
		});
	}

	handleAddSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
        formData.append('name', this.state.day);
        formData.append('content', this.state.content);


		fetch('http://localhost:8000/api/campaign', {
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
  
    onChangeContent= (e) => {
		this.setState({ content: e.target.value });
	}



	render() {
		return (
			<div>
				<Button color="primary" onClick={this.props.toogleAddModal}>Add new Campaign</Button>
				<Modal isOpen={this.props.newModalCampaign} toggle={this.props.toogleAddModal}>
					<form onSubmit={this.handleAddSubmit} encType="multipart/form-data" method="post">
						<ModalHeader toggle={this.props.toogleAddModal}>Add a new Campaign</ModalHeader>
						<ModalBody>
							<FormGroup>
								<Label for="Name">Name</Label>
								<Input type="text" name="name" onChange={this.onChangeName} />
								<span className="text-danger">{this.state.errors.name}</span>
							</FormGroup>
                           
                            <FormGroup>
								<Label for="Content">Content</Label>
								<Input type="text" name="content" onChange={this.onChangeContent} />
								<span className="text-danger">{this.state.errors.content}</span>
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
export default AddCampaign;