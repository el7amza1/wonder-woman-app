import { Transition, Dialog } from "@headlessui/react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { Fragment, Dispatch, SetStateAction } from "react";
import Alert from "./Alert";
import { database } from "../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function ApplyForm({ job }: { job: string }) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      pdf: "",
    },
    onSubmit: (values) => {
      const dbInstance = collection(database, "applicants");

      addDoc(dbInstance, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
      })
        .then(() => {
          const reader = new FileReader();
          reader.readAsDataURL(new Blob([values.pdf]));
          let file64 = "";
          reader.onload = () => {
            file64 = String(reader.result).split(",")[1];
          };
          axios.post("/api/applicant", {
            values: {
              ...values,
              pdf: file64,
              job,
            },
          });
        })
        .then(() => {
          formik.resetForm();
        });
    },
    validationSchema: yup.object({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      phone: yup.string().required("required"),
      email: yup.string().email().required("required"),
      pdf: yup.string().required("required"),
    }),
  });
  return (
    <div className="overflow-hidden bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-xl">
        <div className="text-start">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Apply
          </h2>
        </div>
        <div className="mt-12">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  autoComplete="given-name"
                  className="block w-full border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  autoComplete="family-name"
                  className="block w-full border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  autoComplete="email"
                  className="block w-full border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="relative mt-1 shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Phone Number
                  </label>
                </div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  autoComplete="tel"
                  className="block w-full border-gray-300 py-3 px-4 pl-20 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Upload CV
              </label>
              <div className="relative mt-1 shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    CV File
                  </label>
                </div>
                <input
                  type="file"
                  name="pdf"
                  id="pdf"
                  value={formik.values.pdf}
                  onChange={formik.handleChange}
                  autoComplete="tel"
                  className="block w-full border-gray-300 py-3 px-4 pl-20 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2 text-center">
              <button
                id="sendMessageButton"
                className="sim-btn hvr-bounce-to-top w-36"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
