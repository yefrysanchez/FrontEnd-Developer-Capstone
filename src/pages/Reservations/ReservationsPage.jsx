import { useState } from "react";
import Confirmation from "./Confirmation";
import { useFormik } from "formik";


const ReservationsPage = () => {
  // Data arrays for times and occasions
  const times = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];
  const occasions = [
    "No Special Occasion",
    "Birthday",
    "Anniversary",
    "Wedding",
    "Graduation",
    "New Year's Eve",
    "Christmas",
    "Thanksgiving",
    "Baby Shower",
    "Retirement Party",
    "Housewarming",
    "Valentine's Day",
    "Easter",
    "Holiday Party",
  ];

  // Get the current date in YYYY-MM-DD format for validation
  const currentDate = new Date().toISOString().split("T")[0];

  // Formik form initialization
  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      time: "",
      guest: "",
      occasion: "",
    },
    validate: (values) => {
      const errors = {};

      // Validate name
      if (!values.name) {
        errors.name = "Name is required";
      }

      // Validate date (cannot be in the past)
      if (!values.date) {
        errors.date = "Date is required";
      } else if (values.date < currentDate) {
        errors.date = "Date cannot be in the past";
      }

      // Validate time
      if (!values.time) {
        errors.time = "Time is required";
      }

      // Validate number of guests
      if (!values.guest) {
        errors.guest = "Number of guests is required";
      } else if (values.guest < 1) {
        errors.guest = "Number of guests must be at least 1";
      }

      // Validate occasion
      if (!values.occasion) {
        errors.occasion = "Please select an occasion";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      setIsReserved(true)

      // Reset form after submission
      resetForm();

      // Optionally, you can also call `setIsReserved(true)` or do other actions after submission
    },
  });
  
  const [isReserved, setIsReserved] = useState(false)

  return (
    <section className="relative py-32 bg-olive flex justify-center items-center px-2">
        {isReserved && <Confirmation setIsReserved={setIsReserved} />}
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg ">
        <h1 className="text-4xl text-center font-serif text-olive mb-8">
          Table Reservation
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="name" className="font-bold text-olive">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="date" className="font-bold text-olive">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              min={currentDate} // Set min date to today's date
            />
            {formik.touched.date && formik.errors.date && (
              <div className="text-red-500 text-sm">{formik.errors.date}</div>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="time" className="font-bold text-olive">
              Time
            </label>
            <select
              id="time"
              name="time"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time}
            >
              <option value="">Select time</option>
              {times.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {formik.touched.time && formik.errors.time && (
              <div className="text-red-500 text-sm">{formik.errors.time}</div>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="guest" className="font-bold text-olive">
              Number of guests
            </label>
            <input
              type="number"
              id="guest"
              name="guest"
              min="1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.guest}
            />
            {formik.touched.guest && formik.errors.guest && (
              <div className="text-red-500 text-sm">{formik.errors.guest}</div>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="occasion" className="font-bold text-olive">
              Occasion
            </label>
            <select
              id="occasion"
              name="occasion"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.occasion}
            >
              <option value="">Select occasion</option>
              {occasions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            {formik.touched.occasion && formik.errors.occasion && (
              <div className="text-red-500 text-sm">
                {formik.errors.occasion}
              </div>
            )}
          </div>

          <input
            type="submit"
            value="Make your reservation"
            className="w-full py-2 rounded-corners font-bold text-olive hover:text-white hover:bg-olive transition-colors duration-300 cursor-pointer bg-yellow"
          />
        </form>
      </div>
    </section>
  );
};

export default ReservationsPage;

