const Header = () => {
    return (
        <div
        style={{
            background: "gray",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "30px 50px",
            height: "40px"
        }}
        >
            <div style={{ fontSize:"24px", fontWeight:"bold", cursor:"pointer"}}>
                Login
            </div>
            <div style={{ fontSize:"24px", fontWeight:"bold", cursor:"pointer"}}>
                Logout
            </div>
        </div>
    )
}

export default Header;