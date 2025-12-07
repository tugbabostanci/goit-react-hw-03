import s from './Searchbox.module.css';

const Searchbox = ({ filter, onChange }) => (
  <label className={s.searchbox}>
    Find contacts by name
    <input
      type="text"
      value={filter}
      onChange={e => onChange(e.target.value)}
      className={s.input}
    />
  </label>
);

export default SearchBox;