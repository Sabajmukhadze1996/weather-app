import React, { useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import { FiSearch } from "react-icons/fi";
import "./form-input.css";
import { InputProps } from "../../interfaces/InputProps";
import CurrentDate from "../date/CurrentDate";

const FormInput = ({ text, submit, func }: InputProps) => {
  const { content } = useContext(Translation);

  return (
    <div>
      <CurrentDate />
      <form onSubmit={submit}>
        <FiSearch id="search-icon" />
        <input onChange={text} type="text" placeholder={content.search} />
        <button onClick={func} type="submit" className="form-btn">
          {content.submit}
        </button>
      </form>
    </div>
  );
};

export default FormInput;
