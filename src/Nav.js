import {Link} from 'react-router-dom'


function Nav()
{
    // CHAT GPT WAS USED LIGHTLY IN THE BETTERMENT OF THIS CODE 
    // PARTS CHANGED ARE - Instructions on how to better create expanding nav (mobile responsive)
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/SCP2">Scp-002</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SCP3">Scp-003</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SCP4">Scp-004</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SCP5">Scp-005</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SCP6">Scp-006</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <hr className="mb-3 mt-1 border border" />
        </div>
    );
}


export default Nav;