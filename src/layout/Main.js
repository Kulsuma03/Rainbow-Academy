import { Outlet } from 'react-router-dom';
import { Footer } from '../Pages/shared/Footer/Footer';
import { Header } from '../Pages/shared/Header/Header';


const Main = () => {
    
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;