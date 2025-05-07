import FeedbackCard from "../FeedbackCard";
import customer from "../../assets/customer.jpg";
import "./styles.css";

const TestimonialsSection = () => {
    return ( 
        <div className="testimonials-container">
            <div className="testimonials-wrapper">
                <div className="testimonials-header">
                    <h2>Testimonials</h2>
                </div>
                <div className="feedbacks-container">
                    <FeedbackCard img={customer} customerName="Peter" text="Cozy restaurant!" />
                    <FeedbackCard img={customer} customerName="David" text="Best dish in city!" />
                    <FeedbackCard img={customer} customerName="Alan" text="I like it there" />
                    <FeedbackCard img={customer} customerName="Martin" text="I will come back soon." />
                </div>
            </div>
        </div>
     );
}
 
export default TestimonialsSection;