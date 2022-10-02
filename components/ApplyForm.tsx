import { Transition, Dialog } from "@headlessui/react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { Fragment, Dispatch, SetStateAction } from "react";
import Alert from "./Alert";
import { database } from "../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function ApplyForm({
  open,
  setOpen,
  job,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  job: string;
}) {
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
          setOpen(false);
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
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <form
                  action="#"
                  method="POST"
                  onSubmit={formik.handleSubmit}
                  className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
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
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    {formik.errors.firstName && formik.touched.firstName ? (
                      <Alert alert={formik.errors.firstName} />
                    ) : null}
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
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    {formik.errors.lastName && formik.touched.lastName ? (
                      <Alert alert={formik.errors.lastName} />
                    ) : null}
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
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        autoComplete="email"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    {formik.errors.email && formik.touched.email ? (
                      <Alert alert={formik.errors.email} />
                    ) : null}
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mt-2"
                      >
                        Phone
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    {formik.errors.phone && formik.touched.phone ? (
                      <Alert alert={formik.errors.phone} />
                    ) : null}
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mt-2"
                      >
                        upload CV
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="file"
                        name="pdf"
                        id="pdf"
                        onChange={(e) => {
                          formik.setFieldValue("pdf", e.target.files![0]);
                        }}
                        aria-describedby="cv-upload"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    {formik.errors.pdf && formik.touched.pdf ? (
                      <Alert alert={formik.errors.pdf} />
                    ) : null}
                  </div>
                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Apply
                    </button>
                  </div>
                </form>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Go back to dashboard
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
