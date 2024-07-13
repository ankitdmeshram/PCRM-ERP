const header = ({ setSidebarOpen, sidebarOpen }) => {
    return (
        <div className="header  bg-white shadow-sm">
            <div className="logo ps-5 pe-3">PCRM <i class="fa-solid fa-bars" onClick={() => setSidebarOpen(!sidebarOpen)}></i></div>
            <div className="pageName ps-4">Home</div>
            <div className="header-nav-links pe-5">
                <div className="logout">Logout</div>
            </div>
        </div>
    )
}

export default header