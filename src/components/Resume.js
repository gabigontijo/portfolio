import React from "react";
import "../style/Resume.css";
import Button from "@mui/material/Button";

export default function Resume() {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <div className="card_resume">
      <section className="section_resume">
        <h1>Hi there, I'm Gabriela Gontijo</h1>
        <h4>
          a software web developer,
          <br /> passionate about technology, <strong>high performance</strong>,
          studies and <strong>creativity</strong>.
        </h4>
        <p>
          I have more than 3 years of experience as a Front-end and Fullstack
          developer. I've worked with inventory control products, financial
          control and the cryptocurrency market. I love having new challenges
          and being able to learn the different stages included in the
          development process, working as a team and always keeping up with the
          web world.
        </p>

        {isClicked && (
          <div>
            <p>

            I am communicative, I like to work in a team and I love the creation process.
            Technology challenges me every day to seek new knowledge and solutions to
            different problems. My greatest satisfaction is being able to create codes to meet the customer's needs,
            adding to a more technological and performative world.
            </p>
          </div>
        )}
        <Button
          className="resume_btn"
          variant="outlined"
          color="secondary"
          sx={{ fontSize: "1.3rem", color: "#8e44ad", border: 2 }}
          onClick={() => setIsClicked(!isClicked)}
        >
          {isClicked ? "Show Less" : "Show more"}
        </Button>
      </section>
      <div className="img_resume"></div>
    </div>
  );
}
