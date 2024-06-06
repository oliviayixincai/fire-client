import { useNavigate } from "react-router-dom";
import CTAButton from "../../components/CTAButton/CTAButton";

import "./LandingPage.scss";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <h2>Welcome to the FIRE Calculator!</h2>
      <p>
        This is a simple calculator that helps you estimate how you can achieve Financial Independence, Retire Early
      </p>
      <CTAButton onClick={() => navigate("/calculator")} buttonText="Go to Calculator !" variant="primary" />
    </div>
  );
}

export default LandingPage;
