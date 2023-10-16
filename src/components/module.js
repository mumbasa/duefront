import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useReducer, useRef, useState } from "react";
//let payload = { address: "", department: { id: 0 }, contact: '', dateEmployed: "", dob: "", email: "", lastName: "", middleName: "", picture: "", ghanaCard: '', firstName: "", rank: { id: 0 }, supervisor: { id: 0 } }
let payload = { address: "", bank: { id: 0 }, mobile: '', dateJoined: "", dob: "", email: "", lastName: "", middleName: "", picture: "", ghanaCard: '', firstName: "", category: { id: 0 }, supervisor: { id: 0 }, department: { id: 0 }, accountNumber: '', sortCode: '' }
let g = { "answers": [{ "option": "string", "score": 0 }, { "option": "string", "score": 0 }], "groupName": "string", "id": 0, "iteration": 0 }
const NewModuleForm = () => {
	const [ops, setOps] = useState([{ "option": "string", "score": 0 }])
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

	const Submit = (e) => {
alert(ops)
	}

	let ke = ()=>{

		return ops.map(e => (

			<div class="row mb-2" key={new Date()}>

				

				<div class="col-md-7 mb-10">
					<select
						class="form-control" id="address2" name="address2"
						placeholder="Answer group" >
						<option>Select</option>
							</select>
				</div>


				<div class="col-md-2 mb-10">
					<input
						class="form-control" id="address2" name="address2"
						placeholder="weight" type="number"/>
					
				</div>

				<div class="col-md-3 mb-10">
					<button class="btn btn-primary" type="button" onClick={()=>{setOps([ops].concat(...[{"option": "string", "score": 1 }]))}}>Add
						Section</button>

					<button class="btn btn-danger ml-2" type="button" onclick="Submit()">Delete Section
					</button>
				</div>

			</div>
		))
	}
	useEffect(()=>{



	},[ops])



	return (

		<div class="row">
			<div class="col-md-12">
				<div class="card shadow mb-4">

					<div class="card-body">
						<form>
							<div class="row">
								<div class="col-md-10 form-group">
									<label for="firstName">Module name</label> 
									<input
										class="form-control" id="firstName" name="fname"
										placeholder="Module Name" type="text" />
										
								</div>
							
								
							</div>




							<hr />
							<h6 class="form-group">Modules Details</h6>

							{ke()}



							<hr />
							<button class="btn btn-primary" type="button" onClick={Submit}>Add
								Module</button>
						</form>
					</div>
				</div></div>
		</div>
	)	
							}
	export default NewModuleForm