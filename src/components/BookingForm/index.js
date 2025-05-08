import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { useAvailableTimes } from "../../hooks/useAvailableTimes";
import "./styles.css";

const validationSchema = Yup.object({
  date: Yup.date().required("Date is required"),
  time: Yup.string().required("Time is required"),
  guests: Yup.number()
    .required("Number of guests is required")
    .min(1, "At least 1 guest")
    .max(10, "Max 10 guests"),
});

const BookingForm = () => {
  const [availableTimes, updateTimes] = useAvailableTimes();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    date: "",
    time: "",
    guests: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form values:", values);
    setShowModal(true);
    resetForm();
  };

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="booking-container">
      <div className="form-wrapper">
        <h2>Book a Table!</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange }) => (
            <Form>
              <div className="input-wrapper">
                <label htmlFor="date">Date</label>
                <Field
                  type="date"
                  id="date"
                  name="date"
                  onChange={(e) => {
                    handleChange(e);
                    updateTimes(e.target.value);
                  }}
                />
                <ErrorMessage name="date" component="div" className="error" />
              </div>

              <div className="input-wrapper">
                <label htmlFor="time">Time</label>
                <Field as="select" id="time" name="time">
                  <option value="">-- Select a time --</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="time" component="div" className="error" />
              </div>

              <div className="input-wrapper">
                <label htmlFor="guests">Amount of customers</label>
                <Field
                  type="number"
                  id="guests"
                  name="guests"
                  placeholder="Count..."
                />
                <ErrorMessage name="guests" component="div" className="error" />
              </div>

              <Button type="submit">Submit Booking</Button>
            </Form>
          )}
        </Formik>
      </div>

      {showModal && (
        <Modal
          message="Reservation confirmed!"
          buttonText="Yeeey!"
          onClick={handleRedirect}
        />
      )}
    </div>
  );
};

export default BookingForm;