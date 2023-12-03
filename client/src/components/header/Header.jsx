import "./Header.css"
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    return (
        <header>
            <Link className="home" to="/"><h1>Arena Battles</h1></Link>
            <nav>

                {/* <Link to="/games">All games</Link> */}
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/character-create"><button>Create Character</button></Link>
                        <Link to="/logout"><button>Logout</button></Link>

                    </div>)}

                {!isAuthenticated && (<div id="guest">
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/register"><button>Register</button></Link>
                </div>)}

            </nav>
        </header>
    );
}

