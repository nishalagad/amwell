import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

{
  /* <div style={{ padding: 10 }}>
        <DoctorCard
          imageUrl="https://placekitten.com/300/200" // Replace with the actual image URL
          name="John Doe" // Replace with the actual name
          experience="5 years of experience" // Replace with the actual experience
        />
      </div> */
}

function DoctorCard(props) {
  return (
    <Row xs={1} md={2} className="g-4">
      {[Array.from({ length: 4 })].map((_, idx) => (
        <Col key={idx}>
          <Card style={{ marginRight: 10 }}>
            <Card.Img
              variant="top"
              style={{ height: 80, width: 80 }}
              src="https://img.freepik.com/premium-vector/doctor-with-stethoscope-around-his-neck-is-standing-front-blue-background_596437-183.jpg"
            />
            <Card.Body style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Card.Title style={{ fontSize: 14, fontWeight: "bold" }}>
                Dr. John Deo
              </Card.Title>
              <Card.Text style={{ fontSize: 12 }}>
                7 years of experience
              </Card.Text>
            </Card.Body>
            <Button
              variant="primary"
              style={{ fontSize: 12 }}
              onClick={props.selectDoctor}
            >
              Book Appointment
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default DoctorCard;
