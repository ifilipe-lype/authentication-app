import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().min(2, "Name must have at least 2 charaters!")
        .required("Name field is required!"),
    email: yup.string().email("Invalid email provided!")
        .required("Email field is required"),
    password: yup.string().min(8, "Password must be at least 8 chars long!")
        .required("Password field is required!"),
    phone: yup.string(),
    bio: yup.string(),
    photo: yup.string()
});

export default function ProfileEditForm({
    user,
    isSubmting,
    putProfileEdit,
}) {
    const formik = useFormik({
        initialValues: {
            photo: user.photo,
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            bio: user.bio,
        },
        validationSchema: schema,
        onSubmit: (values) => putProfileEdit(values),
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
        <form onSubmit={handleSubmit} className="text-gray-6 md:w-8/12 dark:text-gray-5">
            <div className="hidden form-group flex flex-row items-center">
                <label className="relative block w-16 h-16 transition text-gray-5 hover:text-white cursor-pointer rounded overflow-hidden">
                    <img src={values.photo} className="w-16 h-16 object-cover object-top" alt="user's photo" />
                    <div className="bg-gray-dark bg-opacity-50 flex items-center justify-center h-full w-full absolute inset-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <input type="file" className="sr-only" />
                </label>
                <span className="ml-6 uppercase text-gray-6 text-sm dark:text-gray-5">change photo</span>
            </div>
            <div className="form-group">
                <label className="mb-1">
                    Photo's link
                </label>
                <input
                    id="photo"
                    value={values.photo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text" placeholder="photo url"
                />
                <small className="text-red-400">{touched.name && errors.name}</small>
            </div>
            <div className="form-group">
                <label className="mb-1">
                    Name
                </label>
                <input
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text" placeholder="name"
                />
                <small className="text-red-400">{touched.name && errors.name}</small>
            </div>
            <div className="form-group">
                <label className="mb-1">
                    Bio
                </label>
                <textarea
                    id="bio"
                    value={values.bio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text" placeholder="bio"
                ></textarea>
                <small className="text-red-400">{touched.name && errors.name}</small>
            </div>
            <div className="form-group">
                <label className="mb-1">
                    Phone
                </label>
                <input
                    id="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="string" placeholder="phone"
                />
                <small className="text-red-400">{touched.name && errors.name}</small>
            </div>
            <div className="form-group">
                <label className="mb-1">
                    Email
                </label>
                <input
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="string" placeholder="email"
                />
                <small className="text-red-400">{touched.name && errors.name}</small>
            </div>
            <div className="form-group">
                <label className="mb-1">
                    Password
                </label>
                <input
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password" placeholder="new password"
                />
                <small className="text-red-400">{touched.name && errors.name}</small>
            </div>
            <div className="form-group flex-row">
                <button type="submit" className="btn-submit w-full md:w-auto px-6 md:px-8">
                    {isSubmting && (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    )}
                    <span>
                        Save
                </span>
                </button>
            </div>
        </form>
    )
}