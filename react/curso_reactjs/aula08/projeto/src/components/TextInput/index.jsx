import P from 'prop-types';
import './styles.css'

export const TextInput = ({handleChange,searchValue})=> {
    return(
        <input
            className="text-input"
            type="search"
            onChange={handleChange}
            value={searchValue}
            placeholder="Type Your Search"
        />
    )
}

TextInput.propTypes = {
    searchValue: P.string,
    handleChange: P.func.isRequired
}