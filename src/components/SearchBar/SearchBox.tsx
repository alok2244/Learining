import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "../../global.css";

const SearchBox = () => {
  return (
    <div className="search_bar_container">
      <input
        type="text"
        placeholder="Find..."
        // className=""
        className="search_bar"
      />
      <button
        type="submit"
        className="button_primary" // Added text-white for better visibility
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
