import { states } from "./states";
import { useDispatch, useSelector } from 'react-redux';

const DropDown = () => {

    console.log(states);

    const listStates = states.map(state => <option key={state.abbreviation}>{state.name}</option>)
    console.log(listStates);

    return (
        <div>
            <select name="state" id="state">
                {listStates}
            </select>
        </div>
    )
};

export default DropDown
