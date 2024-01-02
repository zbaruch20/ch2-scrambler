import { Button, Col, Container, ListGroup, ListGroupItem, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Scramble from "./scramble";

export interface ScrambleDisplayProps {
  scrambles: string[][];
}

export default function ScrambleDisplay({ scrambles }: ScrambleDisplayProps) {
  return (
    <Container>
      <Row>
        <Col className="justify-content-start">
          <ListGroup as="ol" numbered>
            {scrambles.map(scr => (
              <ListGroupItem as="li" className="mx-4" action>
                <br />
                <Scramble scrambleLines={scr} />
              </ListGroupItem>))}
          </ListGroup>
        </Col>
        <Col>
          <div hidden={scrambles.length === 0} className="mx-4">
            <OverlayTrigger
              placement="bottom"
              trigger="focus"
              overlay={<Tooltip>Copied!</Tooltip>}
            >
              <Button onClick={() => copyToCsTimer(scrambles)}>Copy in csTimer Format</Button>
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

function copyToCsTimer(scrambles: string[][]) {
  const scrambleStr = scrambles.map(
    scr => scr.join("\\n")
  ).join("\n")

  navigator.clipboard.writeText(scrambleStr);
}