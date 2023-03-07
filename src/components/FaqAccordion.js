import Accordion from "react-bootstrap/Accordion";

import "../css/FaqAccordion.css";

export default function FaqAccordion(props, index) {
  return (
    <Accordion
      className="accordion-container"
      defaultActiveKey={["0"]}
      alwaysOpen
    >
      <Accordion.Item eventKey={index}>
        <Accordion.Header className="m-1">{props.question}</Accordion.Header>
        <Accordion.Body>{props.answer}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
