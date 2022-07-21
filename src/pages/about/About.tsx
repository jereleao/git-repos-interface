import { Footer, Link } from '../../components/commom';

export function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
        <Link to="/jereleao" customColor={'#000'}>
          My GitHub
        </Link>
      </main>
      <Footer>
        <Link to="/">Home</Link>
      </Footer>
    </>
  );
}
