import InputField from "../InputField";
import Button from "../../components/Button/index";
import "./styles.css";

const BookingForm = () => {

    const submit = () => {
    }


    return (
        <div className="booking-container">
            <div className="form-wrapper">
                <h2>Book a Table!</h2>
                <form onSubmit={submit}>
                    <InputField label="Date" type="date" />
                    <InputField label="Time" type="time" />
                    <InputField label="Amount of customers" type="number" placeholder="Count..." />
                    <Button type="submit">Submit Booking</Button>
                </form>
            </div>
        </div>
    );
}

export default BookingForm;