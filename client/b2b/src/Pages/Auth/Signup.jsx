import MultiStep from 'react-multistep'
import Comp1 from '../../Components/signupMultiStepComps/Comp1'
import Comp2 from '../../Components/signupMultiStepComps/Comp2'
import Comp3 from '../../Components/signupMultiStepComps/Comp3'

function Signup() {

    const prevStyle = () => {
        return {
          background: 'blue',
          color: 'white',
          fontSize: '16px',
          // additional styles...
        };
      };
      
      // Example nextStyle function
      const nextStyle = () => {
        return {
          background: 'green',
          color: 'white',
          fontSize: '16px',
          // additional styles...
        };
      };

    return (
        <>
            <MultiStep activeStep={0} prevStyle={prevStyle} nextStyle={nextStyle}>
                <Comp1 title='Step 1' />
                <Comp2 title='Step 2' />
                <Comp3 title='Step 2' />
            </MultiStep>
        </>
    )
}

export default Signup