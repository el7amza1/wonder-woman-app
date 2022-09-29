import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Alert from "./Alert";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: (values) => {
      axios.post("./api/sendMail", { values }).then((res) => console.log(res));
    },
    validationSchema: yup.object({
      firstName: yup.string().required(),
      //   lastName: yup.string().required(),
      phone: yup.string().required(),
      email: yup.string().email().required(),
      message: yup.string().required(),
    }),
  });
  return (
    <div>
      <div id="contact" className="section db">
        <div className="container">
          <div className="section-title text-center">
            <h3>Contact</h3>
            <p>
              Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
              vehicula enim, non aliquam risus.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="contact_form">
                <div id="message"></div>
                <form
                  id="contactForm"
                  name="sentMessage"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="firstName"
                          id="firstName"
                          onChange={formik.handleChange}
                          value={formik.values.firstName}
                          autoComplete="given-name"
                          placeholder="Your Name"
                        />
                        <p className="help-block text-danger">
                          {formik.errors.firstName &&
                          formik.touched.firstName ? (
                            <Alert alert={formik.errors.firstName} />
                          ) : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          type="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          autoComplete="email"
                          placeholder="Your Email"
                        />
                        <p className="help-block text-danger">
                          {formik.errors.email && formik.touched.email ? (
                            <Alert alert={formik.errors.email} />
                          ) : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="phone"
                          id="phone"
                          onChange={formik.handleChange}
                          value={formik.values.phone}
                          autoComplete="tel"
                          aria-describedby="phone-description"
                          placeholder="Your Phone"
                        />
                        <p className="help-block text-danger">
                          {formik.errors.phone && formik.touched.phone ? (
                            <Alert alert={formik.errors.phone} />
                          ) : null}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          aria-describedby="how-can-we-help-description"
                          onChange={formik.handleChange}
                          value={formik.values.message}
                          placeholder="Your Message"
                        ></textarea>
                        <p className="help-block text-danger">
                          {formik.errors.message && formik.touched.message ? (
                            <Alert alert={formik.errors.message} />
                          ) : null}
                        </p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button
                        id="sendMessageButton"
                        className="sim-btn hvr-bounce-to-top"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
