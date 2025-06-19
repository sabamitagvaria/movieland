import { useNavigate, useParams } from 'react-router-dom'
import { FirstStepUI, SecondStepUI } from './RegisterSteps'
const Signup = () => {
    const { show: showId, step } = useParams()
    const navigate = useNavigate()
    function clickHandler() {
        navigate(`/register/${showId}/${parseInt(step) + 1}`)
    }
    return <section className="register-box">
        {step == 1 && <FirstStepUI currentStep={step} />}
        {step == 2 && <SecondStepUI currentStep={step} />}

        <button id={`${parseInt(step) >= 2 && 'disabled'}`} className='next-btn' onClick={clickHandler} disabled={parseInt(step) >= 2}>
            {step < 2 ? 'Next' : 'Register'}
        </button>
    </section>
}
export default Signup