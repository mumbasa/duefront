import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useReducer, useRef, useState } from "react";
//let payload = { address: "", department: { id: 0 }, contact: '', dateEmployed: "", dob: "", email: "", lastName: "", middleName: "", picture: "", ghanaCard: '', firstName: "", rank: { id: 0 }, supervisor: { id: 0 } }
let payload = { address: "", bank: { id: 0 }, mobile: '', dateJoined: "", dob: "", email: "", lastName: "", middleName: "", picture: "", ghanaCard: '', firstName: "", category: { id: 0 }, supervisor: { id: 0 }, department: { id: 0 }, accountNumber: '', sortCode: '' }

const SectionForm = () => {
	const reducer = (state, action) => {
		switch (action.type) {
			case 'fill': {

				return { ...state, [action.field]: action.payload, }
			}
			case 'branch': {

				return { ...state, branch: { id: action.payload } }
			}
			case 'rank':

				return { ...state, rank: { id: action.payload } }
			case 'supervisor': return { ...state, supervisor: { id: action.payload } }
			default:
				return state;
		}

	}

	const [state, dispatch] = useReducer(reducer, payload);

	const HandleChange = (e) => {
		dispatch({ type: 'fill', field: e.target.name, payload: e.target.value });

	}




	return (

		<div class="row">
			<div class="col-md-12">
				<div class="card shadow mb-4">

					<div class="card-body">
						<form>
							<div class="row">
								<div class="col-md-12 form-group">
									<label for="firstName">Section Name</label> <input
										class="form-control" id="firstName" name="fname"
										placeholder="" value="" type="text" />
								</div>
								
							</div>

						
						
							<button class="btn btn-primary" type="button" onclick="sele()">Add
								Section</button>
						</form>
					</div>
				</div></div>
		</div>
	)
}
export default SectionForm