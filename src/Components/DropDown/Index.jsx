import { useForm } from "react-hook-form";
import { states } from "./states";

const DropDown = ({register}) => {

   // const {register} = useForm()

    const listStates = states.map(state => <option key={state.abbreviation}>{state.name}</option>)

    return (
        <div>
            <select name="state" id="state" {...register('state')}>
                {listStates}
            </select>
        </div>
    )
};

export default DropDown
