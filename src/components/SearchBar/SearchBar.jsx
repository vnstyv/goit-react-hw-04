import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

const notify = () => toast.error("Please type your search query");

const SearchBar = ({ onSearch }) => (
  <header className={css.header}>
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, { resetForm }) => {
        if (values.query === "") {
          notify();
          return;
        }
        onSearch(values.query);
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.inputWrapper}>
          <Field
            className={css.input}
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            <CiSearch className={css.icon} />
          </button>
        </div>
        <ErrorMessage name="query" component="div" />
      </Form>
    </Formik>
  </header>
);

export default SearchBar;