import "./search-box.styles.css";

const SearchBox = ({ onChange, className, placeholder }) => {
	return <input type="search" placeholder={placeholder} onChange={onChange} className={`search-box ${className}`} />;
};

export default SearchBox;
