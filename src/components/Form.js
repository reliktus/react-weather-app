import React from "react";

const Form = props => {
  return (
    <div>
      <form>
        <input
          type="text"
          value={props.value}
          placeholder="Wpisz miasto"
          onChange={props.change}
        />
        <button>Wyszukaj miasta</button>
      </form>
    </div>
  );
};

export default Form;
