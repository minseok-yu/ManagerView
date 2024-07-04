import '../../../context/css/Navigation/MainNav.css';
import { Link } from 'react-router-dom';
function MainNavigation(){
    return(
        <nav className="main-navigation">
            <ul>
                <li><Link to="/pages/UserInformationPage" className="nav-link"> 회원 정보 조회</Link></li>
                <li><Link to="/pages/CompanyInformationPage" className="nav-link">회사 정보 조회</Link></li>
                <li><Link to="/pages/BoardPage" className="nav-link">게시판</Link></li>
                <li><Link to="/pages/RevisePage" className="nav-link">사업자 정보 수정</Link></li>
                <li><Link to="/pages/LoginPage" className="nav-link">로그인</Link></li>
            </ul>
        </nav>
    )
}
export default MainNavigation;