import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useReducer, useRef, useState } from "react";
//let payload = { address: "", department: { id: 0 }, contact: '', dateEmployed: "", dob: "", email: "", lastName: "", middleName: "", picture: "", ghanaCard: '', firstName: "", rank: { id: 0 }, supervisor: { id: 0 } }
let payload = { address: "", bank: { id: 0 }, mobile: '', dateJoined: "", dob: "", email: "", lastName: "", middleName: "", picture: "", ghanaCard: '', firstName: "", category: { id: 0 }, supervisor: { id: 0 }, department: { id: 0 },accountNumber:'',sortCode:'' }

const StaffForm =()=>{
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
										<div class="col-md-4 form-group">
											<label for="firstName">First name</label> <input
												class="form-control" id="firstName" name="fname"
												placeholder="" value="" type="text"/>
										</div>
										<div class="col-md-4 form-group">
											<label for="lastName">Middle name</label> <input
												class="form-control" id="middleName" name="mname"
												placeholder="" value="" type="text"/>
										</div>
										<div class="col-md-4 form-group">
											<label for="lastName">Last name</label> <input
												class="form-control" id="lastName" name="lname"
												placeholder="" value="" type="text"/>
										</div>
									</div>



									<div class="row">
										<div class="col-md-3 mb-10">
											<label for="country">Nationality</label> <select
												class="form-control custom-select d-block w-100"
												id="country" name="country">
												<option value="Afghanistan">Afghanistan</option>
												<option value="Åland Islands">Åland Islands</option>
												<option value="Albania">Albania</option>
												<option value="Algeria">Algeria</option>
												<option value="American Samoa">American Samoa</option>
												<option value="Andorra">Andorra</option>
												<option value="Angola">Angola</option>
												<option value="Anguilla">Anguilla</option>
												<option value="Antarctica">Antarctica</option>
												<option value="Antigua and Barbuda">Antigua and
													Barbuda</option>
												<option value="Argentina">Argentina</option>
												<option value="Armenia">Armenia</option>
												<option value="Aruba">Aruba</option>
												<option value="Australia">Australia</option>
												<option value="Austria">Austria</option>
												<option value="Azerbaijan">Azerbaijan</option>
												<option value="Bahamas">Bahamas</option>
												<option value="Bahrain">Bahrain</option>
												<option value="Bangladesh">Bangladesh</option>
												<option value="Barbados">Barbados</option>
												<option value="Belarus">Belarus</option>
												<option value="Belgium">Belgium</option>
												<option value="Belize">Belize</option>
												<option value="Benin">Benin</option>
												<option value="Bermuda">Bermuda</option>
												<option value="Bhutan">Bhutan</option>
												<option value="Bolivia">Bolivia</option>
												<option value="Bosnia and Herzegovina">Bosnia and
													Herzegovina</option>
												<option value="Botswana">Botswana</option>
												<option value="Bouvet Island">Bouvet Island</option>
												<option value="Brazil">Brazil</option>
												<option value="British Indian Ocean Territory">British
													Indian Ocean Territory</option>
												<option value="Brunei Darussalam">Brunei Darussalam</option>
												<option value="Bulgaria">Bulgaria</option>
												<option value="Burkina Faso">Burkina Faso</option>
												<option value="Burundi">Burundi</option>
												<option value="Cambodia">Cambodia</option>
												<option value="Cameroon">Cameroon</option>
												<option value="Canada">Canada</option>
												<option value="Cape Verde">Cape Verde</option>
												<option value="Cayman Islands">Cayman Islands</option>
												<option value="Central African Republic">Central
													African Republic</option>
												<option value="Chad">Chad</option>
												<option value="Chile">Chile</option>
												<option value="China">China</option>
												<option value="Christmas Island">Christmas Island</option>
												<option value="Cocos (Keeling) Islands">Cocos
													(Keeling) Islands</option>
												<option value="Colombia">Colombia</option>
												<option value="Comoros">Comoros</option>
												<option value="Congo">Congo</option>
												<option value="Congo, The Democratic Republic of The">Congo,
													The Democratic Republic of The</option>
												<option value="Cook Islands">Cook Islands</option>
												<option value="Costa Rica">Costa Rica</option>
												<option value="Cote D'ivoire">Cote D'ivoire</option>
												<option value="Croatia">Croatia</option>
												<option value="Cuba">Cuba</option>
												<option value="Cyprus">Cyprus</option>
												<option value="Czech Republic">Czech Republic</option>
												<option value="Denmark">Denmark</option>
												<option value="Djibouti">Djibouti</option>
												<option value="Dominica">Dominica</option>
												<option value="Dominican Republic">Dominican
													Republic</option>
												<option value="Ecuador">Ecuador</option>
												<option value="Egypt">Egypt</option>
												<option value="El Salvador">El Salvador</option>
												<option value="Equatorial Guinea">Equatorial Guinea</option>
												<option value="Eritrea">Eritrea</option>
												<option value="Estonia">Estonia</option>
												<option value="Ethiopia">Ethiopia</option>
												<option value="Falkland Islands (Malvinas)">Falkland
													Islands (Malvinas)</option>
												<option value="Faroe Islands">Faroe Islands</option>
												<option value="Fiji">Fiji</option>
												<option value="Finland">Finland</option>
												<option value="France">France</option>
												<option value="French Guiana">French Guiana</option>
												<option value="French Polynesia">French Polynesia</option>
												<option value="French Southern Territories">French
													Southern Territories</option>
												<option value="Gabon">Gabon</option>
												<option value="Gambia">Gambia</option>
												<option value="Georgia">Georgia</option>
												<option value="Germany">Germany</option>
												<option value="Ghana">Ghana</option>
												<option value="Gibraltar">Gibraltar</option>
												<option value="Greece">Greece</option>
												<option value="Greenland">Greenland</option>
												<option value="Grenada">Grenada</option>
												<option value="Guadeloupe">Guadeloupe</option>
												<option value="Guam">Guam</option>
												<option value="Guatemala">Guatemala</option>
												<option value="Guernsey">Guernsey</option>
												<option value="Guinea">Guinea</option>
												<option value="Guinea-bissau">Guinea-bissau</option>
												<option value="Guyana">Guyana</option>
												<option value="Haiti">Haiti</option>
												<option value="Heard Island and Mcdonald Islands">Heard
													Island and Mcdonald Islands</option>
												<option value="Holy See (Vatican City State)">Holy
													See (Vatican City State)</option>
												<option value="Honduras">Honduras</option>
												<option value="Hong Kong">Hong Kong</option>
												<option value="Hungary">Hungary</option>
												<option value="Iceland">Iceland</option>
												<option value="India">India</option>
												<option value="Indonesia">Indonesia</option>
												<option value="Iran, Islamic Republic of">Iran,
													Islamic Republic of</option>
												<option value="Iraq">Iraq</option>
												<option value="Ireland">Ireland</option>
												<option value="Isle of Man">Isle of Man</option>
												<option value="Israel">Israel</option>
												<option value="Italy">Italy</option>
												<option value="Jamaica">Jamaica</option>
												<option value="Japan">Japan</option>
												<option value="Jersey">Jersey</option>
												<option value="Jordan">Jordan</option>
												<option value="Kazakhstan">Kazakhstan</option>
												<option value="Kenya">Kenya</option>
												<option value="Kiribati">Kiribati</option>
												<option value="Korea, Democratic People's Republic of">Korea,
													Democratic People's Republic of</option>
												<option value="Korea, Republic of">Korea, Republic
													of</option>
												<option value="Kuwait">Kuwait</option>
												<option value="Kyrgyzstan">Kyrgyzstan</option>
												<option value="Lao People's Democratic Republic">Lao
													People's Democratic Republic</option>
												<option value="Latvia">Latvia</option>
												<option value="Lebanon">Lebanon</option>
												<option value="Lesotho">Lesotho</option>
												<option value="Liberia">Liberia</option>
												<option value="Libyan Arab Jamahiriya">Libyan Arab
													Jamahiriya</option>
												<option value="Liechtenstein">Liechtenstein</option>
												<option value="Lithuania">Lithuania</option>
												<option value="Luxembourg">Luxembourg</option>
												<option value="Macao">Macao</option>
												<option value="Macedonia, The Former Yugoslav Republic of">Macedonia,
													The Former Yugoslav Republic of</option>
												<option value="Madagascar">Madagascar</option>
												<option value="Malawi">Malawi</option>
												<option value="Malaysia">Malaysia</option>
												<option value="Maldives">Maldives</option>
												<option value="Mali">Mali</option>
												<option value="Malta">Malta</option>
												<option value="Marshall Islands">Marshall Islands</option>
												<option value="Martinique">Martinique</option>
												<option value="Mauritania">Mauritania</option>
												<option value="Mauritius">Mauritius</option>
												<option value="Mayotte">Mayotte</option>
												<option value="Mexico">Mexico</option>
												<option value="Micronesia, Federated States of">Micronesia,
													Federated States of</option>
												<option value="Moldova, Republic of">Moldova,
													Republic of</option>
												<option value="Monaco">Monaco</option>
												<option value="Mongolia">Mongolia</option>
												<option value="Montenegro">Montenegro</option>
												<option value="Montserrat">Montserrat</option>
												<option value="Morocco">Morocco</option>
												<option value="Mozambique">Mozambique</option>
												<option value="Myanmar">Myanmar</option>
												<option value="Namibia">Namibia</option>
												<option value="Nauru">Nauru</option>
												<option value="Nepal">Nepal</option>
												<option value="Netherlands">Netherlands</option>
												<option value="Netherlands Antilles">Netherlands
													Antilles</option>
												<option value="New Caledonia">New Caledonia</option>
												<option value="New Zealand">New Zealand</option>
												<option value="Nicaragua">Nicaragua</option>
												<option value="Niger">Niger</option>
												<option value="Nigeria">Nigeria</option>
												<option value="Niue">Niue</option>
												<option value="Norfolk Island">Norfolk Island</option>
												<option value="Northern Mariana Islands">Northern
													Mariana Islands</option>
												<option value="Norway">Norway</option>
												<option value="Oman">Oman</option>
												<option value="Pakistan">Pakistan</option>
												<option value="Palau">Palau</option>
												<option value="Palestinian Territory, Occupied">Palestinian
													Territory, Occupied</option>
												<option value="Panama">Panama</option>
												<option value="Papua New Guinea">Papua New Guinea</option>
												<option value="Paraguay">Paraguay</option>
												<option value="Peru">Peru</option>
												<option value="Philippines">Philippines</option>
												<option value="Pitcairn">Pitcairn</option>
												<option value="Poland">Poland</option>
												<option value="Portugal">Portugal</option>
												<option value="Puerto Rico">Puerto Rico</option>
												<option value="Qatar">Qatar</option>
												<option value="Reunion">Reunion</option>
												<option value="Romania">Romania</option>
												<option value="Russian Federation">Russian
													Federation</option>
												<option value="Rwanda">Rwanda</option>
												<option value="Saint Helena">Saint Helena</option>
												<option value="Saint Kitts and Nevis">Saint Kitts
													and Nevis</option>
												<option value="Saint Lucia">Saint Lucia</option>
												<option value="Saint Pierre and Miquelon">Saint
													Pierre and Miquelon</option>
												<option value="Saint Vincent and The Grenadines">Saint
													Vincent and The Grenadines</option>
												<option value="Samoa">Samoa</option>
												<option value="San Marino">San Marino</option>
												<option value="Sao Tome and Principe">Sao Tome and
													Principe</option>
												<option value="Saudi Arabia">Saudi Arabia</option>
												<option value="Senegal">Senegal</option>
												<option value="Serbia">Serbia</option>
												<option value="Seychelles">Seychelles</option>
												<option value="Sierra Leone">Sierra Leone</option>
												<option value="Singapore">Singapore</option>
												<option value="Slovakia">Slovakia</option>
												<option value="Slovenia">Slovenia</option>
												<option value="Solomon Islands">Solomon Islands</option>
												<option value="Somalia">Somalia</option>
												<option value="South Africa">South Africa</option>
												<option value="South Georgia and The South Sandwich Islands">South
													Georgia and The South Sandwich Islands</option>
												<option value="Spain">Spain</option>
												<option value="Sri Lanka">Sri Lanka</option>
												<option value="Sudan">Sudan</option>
												<option value="Suriname">Suriname</option>
												<option value="Svalbard and Jan Mayen">Svalbard and
													Jan Mayen</option>
												<option value="Swaziland">Swaziland</option>
												<option value="Sweden">Sweden</option>
												<option value="Switzerland">Switzerland</option>
												<option value="Syrian Arab Republic">Syrian Arab
													Republic</option>
												<option value="Taiwan, Province of China">Taiwan,
													Province of China</option>
												<option value="Tajikistan">Tajikistan</option>
												<option value="Tanzania, United Republic of">Tanzania,
													United Republic of</option>
												<option value="Thailand">Thailand</option>
												<option value="Timor-leste">Timor-leste</option>
												<option value="Togo">Togo</option>
												<option value="Tokelau">Tokelau</option>
												<option value="Tonga">Tonga</option>
												<option value="Trinidad and Tobago">Trinidad and
													Tobago</option>
												<option value="Tunisia">Tunisia</option>
												<option value="Turkey">Turkey</option>
												<option value="Turkmenistan">Turkmenistan</option>
												<option value="Turks and Caicos Islands">Turks and
													Caicos Islands</option>
												<option value="Tuvalu">Tuvalu</option>
												<option value="Uganda">Uganda</option>
												<option value="Ukraine">Ukraine</option>
												<option value="United Arab Emirates">United Arab
													Emirates</option>
												<option value="United Kingdom">United Kingdom</option>
												<option value="United States">United States</option>
												<option value="United States Minor Outlying Islands">United
													States Minor Outlying Islands</option>
												<option value="Uruguay">Uruguay</option>
												<option value="Uzbekistan">Uzbekistan</option>
												<option value="Vanuatu">Vanuatu</option>
												<option value="Venezuela">Venezuela</option>
												<option value="Viet Nam">Viet Nam</option>
												<option value="Virgin Islands, British">Virgin
													Islands, British</option>
												<option value="Virgin Islands, U.S.">Virgin
													Islands, U.S.</option>
												<option value="Wallis and Futuna">Wallis and Futuna</option>
												<option value="Western Sahara">Western Sahara</option>
												<option value="Yemen">Yemen</option>
												<option value="Zambia">Zambia</option>
												<option value="Zimbabwe">Zimbabwe</option>
											</select>
										</div>
										<div class="col-md-3 mb-10">
											<label for="zip">Date of Birth</label> <input
												class="form-control" id="zip" placeholder="" type="date"
												name="dob" />
										</div>

<div class="col-md-3 mb-10">
											<label for="emp">Place of Birth</label> <input
												class="form-control" id="emp"
												placeholder="place of birth" name="birth" type="text"/>

										</div>

										<div class="col-md-3 mb-10">
											<label for="mobile">Gender</label> <select
												class="form-control custom-select d-block w-100" id="ws"
												name="sex">
												<option>Male</option>
												<option>Female</option>
											</select>
										</div>

									</div>
									<hr/>
									<h6 class="form-group">Contact Details</h6>
									<div class="row">


									<div class="col-md-6 mb-10">
										<label for="address">Primary Address</label> <input
											class="form-control" id="address" name="address"
											placeholder="1234 Main St" type="text"/>
									</div>

<div class="col-md-6 mb-10">
										<label for="address">Residential Address </label> <input
											class="form-control" id="address2" name="address2"
											placeholder="Address " type="text" />
									</div>
</div><br/>
									<div class="form-group" style={{"display": "none"}}>
										<input class="form-control" id="pict" name="pic" type="text"/>
									</div>

									<div class="row">
										<div class="col-md-6 mb-10">
											<label for="email">Email</label> <input class="form-control"
												id="email" placeholder="your email" name="email"
												type="email" />

										</div>
										<div class="col-md-6 mb-10">
											<label for="mob">Mobile Number</label> <input
												class="form-control" id="mob"
												placeholder="your mobile number" name="mobile" type="tel"/>

										</div>

									</div>

									<hr />
									<h6 class="form-group">Work Details</h6>

									<div class="row">

									<div class="col-md-3 mb-10">
											<label for="emp">Highest Education Level</label> <select
												class="form-control custom-select d-block w-100" id="state"
												name="cert">
																								<option >Choose...</option>

											</select>
										</div>

                    <div class="col-md-3 mb-10">
											<label for="emp">Biometric id</label> <input
												class="form-control" id="bioid"
												placeholder="your staff number" name="bioid" type="text"/>

										</div>
										<div class="col-md-3 mb-10">
											<label for="address2">Department</label> <select
												class="form-control custom-select d-block w-100" id="state"
												name="dept">
																								<option >Choose...</option>

											</select>
										</div>

										<div class="col-md-3 mb-10">
											<label for="emp">Date Employed</label> <input
												class="form-control" id="emp"
												placeholder="date of appointment" name="emp" type="date"/>

										</div>
									</div>
                  <br/>
									<div class="row">
										<div class="col-md-3 mb-10">
											<label for="type">Staff Type</label> <select
												class="form-control custom-select d-block w-100" id="type"
												name="type">
												<option >Choose...</option>

											</select>
										</div>

										<div class="col-md-3 mb-10">
										
										<label for="address2">Staff Category</label> <select
												class="form-control custom-select d-block w-100" id="state"
												name="cat">
												<option value="" selected="selected" disabled="disabled">--select one --</option>
                        <option >Choose...</option>

											</select>
											

										</div>

										<div class="col-md-3 mb-10 custom-control custom-checkbox">
											<label for="ws">Can work on Saturdays</label> <select
												class="form-control custom-select d-block w-100" id="ws"
												name="weekend">
												<option value="1">Yes</option>
												<option value="0">No</option>
											</select>

										</div>
                    <div class="col-md-3 mb-10">
											<label for="mob">TIN Number</label> <input
												class="form-control" id="mob"
												placeholder="your tin number" name="tin" type="text"/>

										</div>
									</div>
										<hr/>
									<h6 class="form-group">Financial Details</h6>
									<div class="row">
										<div class="col-md-3 mb-10">
											<label for="email">Bank</label><select
												class="form-control custom-select d-block w-100" id="bank"
												name="bankid">
																						<option >Choose...</option>

											</select>
										</div>
										<div class="col-md-3 mb-10">
											<label for="mob">Account Number</label> <input
												class="form-control" id="mob"
												placeholder="your account number" name="accno" type="tel"/>

										</div>
<div class="col-md-3 mb-10">
											<label for="sortcode">Sort Code</label> <input
												class="form-control" id="sortcode"
												placeholder="your account number" name="sortcode" type="tel"/>

										</div>
                    <div class="col-md-3 mb-10">
											<label for="ssn">Social Security Number</label> <input
												class="form-control" id="ssn"
												placeholder="your social security number" name="ssn"
												type="text"/>
										</div>
									</div>
									
									
										
									<hr/>
									<h6 class="form-group">Personal Details</h6>

									<div class="row">

										<div class="col-md-4 mb-10">
											<label for="rel">Relationship Status</label> <select
												class="form-control custom-select d-block w-100" id="rel"
												name="relation">
												<option>Married</option>
												<option>Single</option>
												<option>Divorced</option>
												<option>Separated</option>
												<option>Widowed</option>
												</select>
										</div>
										<div class="col-md-3 mb-10">
											<label for="address2">Religion</label> <select
												class="form-control custom-select d-block w-100" id="state"
												name="religion">
											<option >Choose...</option>

											</select>
										</div>

										<div class="col-md-2 mb-10">
											<label for="emp">Number of Children</label> <input
												class="form-control" id="emp"
												placeholder="Number of Children" name="children" type="number"/>

										</div>

                    <div class="col-md-3 mb-10">
											<label for="bio">Spouse Name</label> 
											<input
												class="form-control" id="bio"
												placeholder="Spouse Name" name="spouse" type="text"/>
										</div>
									</div>

		






									<hr/>

									<h6 class="form-group">Capture Face</h6>


									<div class="row">
										<div class="col-md-6 form-group">

											<div id="cover"></div>

										</div>
										<div class="col-md-6 form-group">

											<div id="my_camera"></div>

											<button type="button" class="btn btn-primary"
												onclick="take_snapshot()">Take Snapshot</button>
										</div>
									</div>

									<hr/>
									<button class="btn btn-primary" type="button" onclick="sele()">Add
										Staff</button>
              </form>
        </div>
        </div></div>
    </div>
    )
}
export default StaffForm