import "../Main/Main.css"

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className="main_container">
			<nav className="navbar">
				<h1>Confidential</h1>
				<button className="white_btn" onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div>
				<h1 style={{textAlign:"center"}}>Welcome to the Confidential!</h1>
			</div>
		</div>
	);
};

export default Main;