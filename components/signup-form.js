import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().min(2, "Name must have at least 2 charaters!")
        .required("Name field is required!"),
    email: yup.string().email("Invalid email provided!")
        .required("Email field is required"),
    password: yup.string().min(8, "Password must be at least 8 chars long!")
        .required("Password field is required!")
});

export default function SignUpForm({ postSignUp, isSubmting }) {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => postSignUp(values),
        validateOnChange: true
    });

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    } = formik;

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label className="input-label-icon">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                    </span>
                    <input
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text" placeholder="name"
                    />
                </label>
                <small className="text-red-400">{touched.name && errors.name}</small>
            </div>

            <div className="input-group">
                <label className="input-label-icon">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                    </span>
                    <input
                        id="email"
                        type="email"
                        placeholder="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </label>
                <small className="text-red-400">{touched.email && errors.email}</small>
            </div>
            <div className="input-group">
                <label className="input-label-icon">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
                    </span>
                    <input
                        id="password"
                        type="password"
                        placeholder="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </label>
                <small className="text-red-400">{touched.password && errors.password}</small>
            </div>

            <button type="submit" className="btn-submit">
                {isSubmting && (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                )}
                <span>
                    Start coding now
                </span>
            </button>
        </form>
    )
}
