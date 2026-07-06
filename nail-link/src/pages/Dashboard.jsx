import Sidebar from "../components/Sidebar";
import DashboardHeader from "../dashboard/DashboardHeader";
import WelcomeCard from "../dashboard/WelcomeCard";

import "../styles/Dashboard.css";

function Dashboard() {

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="main-content">

                <DashboardHeader />

                <WelcomeCard />

            </div>

        </div>

    );

}

export default Dashboard;