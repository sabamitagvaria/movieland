import '../styles/register.scss'
import Signup from '../components/Signup'
import TopNav from '../components/TopNav'
const Register = () => {
    return <section id='register-main'>
        <TopNav page='register' />
        <Signup />
    </section>
}

export default Register