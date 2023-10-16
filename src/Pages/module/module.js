import AnswerGroupform from "../../components/forms/question"
import StaffForm from "../../components/forms/enrolstaff"
import SectionForm from "../../components/forms/section"
import MainPage from "../../fragment/maincont"
import NewModuleForm from "../../components/module"

const NewModule=()=>{



return (
<MainPage>

<div class="container-fluid">
<h1 class="page-title">Create Module</h1>

<NewModuleForm></NewModuleForm>

          </div>

</MainPage>

)


}
export default NewModule