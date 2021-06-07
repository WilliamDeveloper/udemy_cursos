import './styles.css'

export const TextInput = ({handleChange,searchValue})=> {
    return(
        <input
            type="search"
            onChange={handleChange}
            value={searchValue}
        />
    )
}