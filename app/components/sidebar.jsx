
const sidebar = ({ sidebarOpen }) => {
    return (
        <div className={sidebarOpen ? "sidebar bg-white shadow-sm sideBarOpen" : "sidebar bg-white shadow-sm"}>
            <div className="sidebar-links">
                <div className="sidebar-link"><i className="fa-solid fa-house"></i> Home</div>
                <div className="sidebar-link"><i className="fa-solid fa-briefcase"></i> Projects</div>
                <div className="sidebar-link"><i className="fa-solid fa-users"></i> Customers</div>
                <div className="sidebar-link"><i className="fa-solid fa-gear"></i> Settings</div>
            </div>
        </div>
    )
}

export default sidebar