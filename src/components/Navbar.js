import { Navbar as Header, Container } from 'react-bootstrap';

export const Navbar = (props) => {
  return (
    <Header bg={props.color} variant={props.variant}>
      <Container>
        <Header.Brand href={props.href}>{props.title}</Header.Brand>
      </Container>
    </Header>
  );
};
