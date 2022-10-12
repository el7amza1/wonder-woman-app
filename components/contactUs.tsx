import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Alert from "./Alert";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

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
      axios.post("./api/sendMail", { values }).then(() => formik.resetForm());

    },
    validationSchema: yup.object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      phone: yup.string().required(),
      email: yup.string().email().required(),
      message: yup.string().required(),
    }),
  });
  return (
    <div>
      <div id="contact" className="section db" style={{ background: "url(./images/form-bg.jpg)" }} >
        <div className="container">
          <div className="section-title text-center mt-10">
            <h3 className="text-white  ">Contact</h3>
            <p >
            We would love to hear from you! Leave us a message below and we will get back to you as soon as we can
            </p>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="contact_form">
                <div id="message"></div>
                <form
                  id="contactForm"
                  name="sentMessage"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="row ">
                    <h2 className="font-t-c font-bold">Get in touch !</h2>
                    <p className="text-gray-300	">Leave us your details below !</p>
                    <div className="col-md-12">
                      <div className="flex gap-4 ">
                        <div className="form-group w-1/2">
                          <input
                            className="form-control npt-l w-full"
                            type="text"
                            name="firstName"
                            id="firstName"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            autoComplete="first-name"
                            placeholder="First Name"
                          />
                          <p className="help-block text-danger">
                            {formik.errors.firstName &&
                              formik.touched.firstName ? (
                              <Alert alert={formik.errors.firstName!} />
                            ) : null}
                          </p>
                        </div>
                        <div className="form-group w-1/2">
                          <input
                            className="form-control npt-r "
                            type="text"
                            name="lastName"
                            id="lastName"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            autoComplete="last-name"
                            placeholder="Last Name"
                          />
                          <p className="help-block text-danger">
                            {formik.errors.lastName &&
                              formik.touched.lastName ? (
                              <Alert alert={formik.errors.lastName} />
                            ) : null}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="form-group w-1/2">
                          <input
                            className="form-control npt-l"
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            autoComplete="email"
                            placeholder="Email"
                          />
                          <p className="help-block text-danger">
                            {formik.errors.email && formik.touched.email ? (
                              <Alert alert={formik.errors.email!} />
                            ) : null}
                          </p>
                        </div>
                        <div className="form-group w-1/2">
                          <input
                            className="form-control npt-r"
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

                      <div className="form-group">
                        <textarea
                          className="form-control npt"
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
                      <button
                        id="sendMessageButton"
                        className="sim-btn hvr-bounce-to-top m-auto btn-bg-i"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>

                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 mt-5">
              <div className=" flex items-center justify-center">
                <div className="w-1/2 ">
                  <h2 className="font-t-c font-bold">Contact Information </h2>
                  <p className="text-gray-300">
                    6 Ibn Zinky St, Al Gabalayah, Zamalek, Cairo Governorate 4270131
                  </p>
                  <p className="text-gray-300">
                    Call us : <a href="tel:+20227371290">+20 227371290</a>
                  </p>
                  <p className=" text-gray-300">
                    We are open from Sunday - Thursday <br /> 09:00 am - 06:00 pm
                  </p>
                  <div className="text-4xl flex justify-around py-3 text-white">
                    <AiFillTwitterCircle />
                    <AiFillLinkedin />
                    <AiFillGithub />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
