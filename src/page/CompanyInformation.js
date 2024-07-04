import MainNavigation from "../components/ui/Navigation/MainNavgation";
import Header from "../components/ui/Header";
import '../context/css/Company/CompanyInformationPage.css';
import CompanyNavigation from "../components/ui/Navigation/CompanyNavigation";
function CompanyInformation(){
    return (
        <div>
            <div>
                <Header/>
                <MainNavigation/>
            </div>
            <div className="Content">
                <div className="NavContainer">
                    <CompanyNavigation/>
                </div>
            </div>
        </div>
    )
}
export default CompanyInformation;