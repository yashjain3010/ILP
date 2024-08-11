import { useGlobalContext } from "../context";

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if(!searchValue) return;
    setSearchTerm(searchValue);

  };

  return (
    <section>
      <h1>Unsplash Images</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="cat" />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
