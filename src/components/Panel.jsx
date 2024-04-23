import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";

const Panel = () => {
  const initialValues = { day: "", month: "", year: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [result, setResult] = useState({});
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleKeyPress = (event) => {
    const numericKeys = [
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57, // Numeric keys at the top of the keyboard
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105, // Numeric keys on the numpad
    ];

    // Allow the following keys: Backspace, Tab, Left arrow, Right arrow, Delete, End, Home, and numeric keys
    if (
      !(
        (
          event.keyCode === 8 || // Backspace
          event.keyCode === 9 || // Tab
          event.keyCode === 37 || // Left arrow
          event.keyCode === 39 || // Right arrow
          event.keyCode === 46 || // Delete
          event.keyCode === 35 || // End
          event.keyCode === 36 || // Home
          numericKeys.includes(event.keyCode)
        ) // Numeric keys
      )
    ) {
      event.preventDefault();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const getCurrentMonth = () => {
    return new Date().getMonth() + 1;
  };

  const calculateAge = (birthDate) => {
    const currentDate = new Date();
    const dob = new Date(birthDate);

    let years = currentDate.getFullYear() - dob.getFullYear();
    let months = currentDate.getMonth() - dob.getMonth();
    let days = currentDate.getDate() - dob.getDate();

    if (months < 0 || (months === 0 && currentDate.getDate() < dob.getDate())) {
      years--;
      months += 12;
    }

    if (days < 0) {
      const prevMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        0
      );
      days = prevMonth.getDate() - dob.getDate() + currentDate.getDate();
      months--;
    }

    const day = Math.floor(days);
    const month = Math.floor(months);
    const year = Math.floor(years);

    return [day, month, year];
  };

  const animateResult = async (processResult) => {
    let day = 0;
    let month = 0;
    let year = 0;
    const interval = setInterval(() => {
      if (day < processResult[0]) day += 1;
      if (month < processResult[1]) month += 1;
      if (year < processResult[2]) year += 1;
      setResult({ day, month, year });
      if (
        day >= processResult[0] &&
        month >= processResult[1] &&
        year >= processResult[2]
      ) {
        clearInterval(interval);
      }
    }, 20);
  };

  useEffect(() => {
    const animate = async () => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        const birthDate = `${formValues.year}-${formValues.month}-${formValues.day}`;
        const processResult = calculateAge(birthDate);
        await animateResult(processResult);
      }
    };
    animate();
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.day) {
      errors.day = "This field is required";
    } else if (values.day > 31) {
      errors.day = "Must be a valid day";
    } else if (values.month) {
      values.day > getDaysInMonth(values.month, values.year)
        ? (errors.day = "Must be a valid date")
        : null;
    }
    if (!values.month) {
      errors.month = "This field is required";
    } else if (values.month > 12 || values.month < 1) {
      errors.month = "Must be a valid month";
    }
    if (!values.year) {
      errors.year = "This field is required";
    } else if (values.year) {
      values.year > getCurrentYear()
        ? (errors.year = "Must be in the past")
        : null;
    }
    if (values.year == getCurrentYear() && values.month > getCurrentMonth()) {
      errors.month = "Must be in the past";
    }
    return errors;
  };

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
      transition={{
        ease: "easeIn",
        duration: 0.55,
        type: "spring",
        stiffness: 200,
      }}
      className={`h-[380px] lg:h-[400px] sm:w-[320px] md:w-[400px] p-10  rounded-t-2xl rounded-bl-2xl rounded-br-[120px] font-Poppins mt-10 lg:w-[540px] mx-auto shadow-lg ${
        theme === "dark" ? "bg-slate-800 shadow-yellow-600" : "bg-white"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center -mb-6 lg:mb-5 lg:flex-row"
      >
        <div>
          <div className="flex -space-x-2 lg:-ml-2 lg:space-x-2">
            <div className="flex flex-col space-y-1 items-center">
              <label
                className={`font-normal self-start ml-5 lg:ml-3 text-[0.7rem] lg:text-[0.9rem] ${
                  theme === "dark" ? "text-white" : "text-Smokey"
                }`}
                htmlFor="day"
              >
                DAY
              </label>
              <input
                className={`w-[5rem] h-[3rem] lg:w-[6rem] hover:ring-1 hover:ring-slate-700 transition-all duration-200 ease-in ${
                  formErrors.day
                    ? "focus:outline-none focus:ring-1 focus:ring-red-900"
                    : null
                } px-3 py-1 font-bold text-[1rem] border-2 rounded-md  ${
                  formErrors.day
                    ? "border-red-500"
                    : `${
                        theme === "dark"
                          ? "border-slate-600"
                          : "border-slate-200"
                      }`
                } ${
                  theme === "dark"
                    ? `bg-slate-900 placeholder:text-yellow-300 text-yellow-400 focus:outline-none focus:ring-1 ${
                        formErrors.day
                          ? "focus:ring-yellow-300"
                          : "focus:ring-slate-200 "
                      } `
                    : null
                } `}
                placeholder="DD"
                id="day"
                name="day"
                type="text"
                pattern="[0-9]*"
                value={formValues.day}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
              />
              <p className="w-28 text-red-600 text-[9px] font-sans">
                {formErrors.day}
              </p>
            </div>

            <div className="flex flex-col space-y-1 items-center">
              <label
                className={`font-normal self-start ml-5 lg:ml-3 text-[0.7rem] lg:text-[0.9rem] ${
                  theme === "dark" ? "text-white" : "text-Smokey"
                }`}
                htmlFor="month"
              >
                MONTH
              </label>
              <input
                className={`w-[5rem] h-[3rem] lg:w-[6rem] hover:ring-1 hover:ring-slate-700 transition-all duration-200 ease-in ${
                  formErrors.month
                    ? "focus:outline-none focus:ring-1 focus:ring-red-900"
                    : null
                } px-3 py-1 font-bold text-[1rem] border-2 rounded-md  ${
                  formErrors.month
                    ? "border-red-500"
                    : `${
                        theme === "dark"
                          ? "border-slate-600"
                          : "border-slate-200"
                      }`
                } ${
                  theme === "dark"
                    ? `bg-slate-900 placeholder:text-yellow-300 text-yellow-400 focus:outline-none focus:ring-1 ${
                        formErrors.month
                          ? "focus:ring-yellow-300"
                          : "focus:ring-slate-200 "
                      } `
                    : null
                } `}
                placeholder="MM"
                id="month"
                name="month"
                type="text"
                pattern="[0-9]*"
                value={formValues.month}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
              />
              <p className="w-28 text-red-600 text-[9px] font-sans">
                {formErrors.month}
              </p>
            </div>

            <div className="flex flex-col space-y-1 items-center">
              <label
                className={`font-normal self-start ml-5 lg:ml-3 text-[0.7rem] lg:text-[0.9rem] ${
                  theme === "dark" ? "text-white" : "text-Smokey"
                }`}
                htmlFor="year"
              >
                YEAR
              </label>
              <input
                className={`w-[5rem] h-[3rem] lg:w-[6rem] hover:ring-1 hover:ring-slate-700 transition-all duration-200 ease-in ${
                  formErrors.year
                    ? "focus:outline-none focus:ring-1 focus:ring-red-900"
                    : null
                } px-3 py-1 font-bold text-[1rem] border-2 rounded-md  ${
                  formErrors.year
                    ? "border-red-500"
                    : `${
                        theme === "dark"
                          ? "border-slate-600"
                          : "border-slate-200"
                      }`
                } ${
                  theme === "dark"
                    ? `bg-slate-900 placeholder:text-yellow-300 text-yellow-400 focus:outline-none focus:ring-1 ${
                        formErrors.year
                          ? "focus:ring-yellow-300"
                          : "focus:ring-slate-200 "
                      } `
                    : null
                } `}
                placeholder="YYYY"
                id="year"
                name="year"
                type="text"
                pattern="[0-9]*"
                value={formValues.year}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
              />
              <p className="w-28 h-5 text-red-600 text-[9px] font-sans">
                {formErrors.year}
              </p>
            </div>
          </div>
          <hr
            className={`mt-8 lg:mt-4 w-full lg:w-[26rem] ${
              theme === "dark" ? "border-yellow-400" : null
            }`}
          />
        </div>
        <div className="flex justify-center">
          <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
              opacity: 0.9,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className={`w-14 h-14 relative top-[-28px] lg:top-[57px] ${
              theme === "dark" ? "bg-yellow-400" : "bg-purple"
            } rounded-full ${
              theme === "dark" ? "active:bg-yellow-800" : "active:bg-black"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="40"
              viewBox="0 0 46 44"
              className="relative left-4 z-10"
            >
              <g
                fill="none"
                stroke={`${theme === "dark" ? "black" : "#fff"}`}
                strokeWidth="3"
              >
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </motion.button>
        </div>
      </form>
      <div>
        <div
          className={`text-myinput ${
            theme === "dark" ? "text-slate-300" : null
          } lg:text-lginput italic font-bold`}
        >
          <span
            className={`${
              theme === "dark" ? "text-orange-500" : "text-purple"
            } text-spanmyinput lg:text-spaninput`}
          >
            {Object.keys(result).length === 0 ? "--" : result.year}
          </span>{" "}
          years
        </div>
        <div
          className={`text-myinput ${
            theme === "dark" ? "text-slate-300" : null
          } lg:text-lginput italic font-bold`}
        >
          <span
            className={`${
              theme === "dark" ? "text-orange-500" : "text-purple"
            } text-spanmyinput lg:text-spaninput`}
          >
            {Object.keys(result).length === 0 ? "--" : result.month}
          </span>{" "}
          months
        </div>
        <div
          className={`text-myinput ${
            theme === "dark" ? "text-slate-300" : null
          } lg:text-lginput italic font-bold`}
        >
          <span
            className={`${
              theme === "dark" ? "text-orange-500" : "text-purple"
            } text-spanmyinput lg:text-spaninput`}
          >
            {Object.keys(result).length === 0 ? "--" : result.day}
          </span>{" "}
          days
        </div>
      </div>
    </motion.div>
  );
};

export default Panel;
