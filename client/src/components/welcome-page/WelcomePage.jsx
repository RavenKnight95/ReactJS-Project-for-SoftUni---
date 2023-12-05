import { useEffect } from "react";

export default function WelcomePage() {

    useEffect(() => { document.body.style.backgroundImage = `url(${'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02721cb8-957d-4bae-b950-11016461189b/dgb4tbs-a54d3521-2535-42d6-bb97-36dfbe7496e1.jpg/v1/fill/w_1920,h_709,q_75,strp/fantasy_landscape_by_btgart_dgb4tbs-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzA5IiwicGF0aCI6IlwvZlwvMDI3MjFjYjgtOTU3ZC00YmFlLWI5NTAtMTEwMTY0NjExODliXC9kZ2I0dGJzLWE1NGQzNTIxLTI1MzUtNDJkNi1iYjk3LTM2ZGZiZTc0OTZlMS5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.fbBZw9pN7Sf9Rm5Wgly75kgCQeWzYsBHBQOk_B3KqOM'})` })
    return (
        <section id="welcome-page" className="auth">

            <h1>Home page goes here...</h1>
            {/* <button>Log in</button>
            <p>or</p>
            <button>Register</button> */}
        </section>
    );
}