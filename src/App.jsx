import { GlobalStyled } from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";
import { Header } from "./components/styles/Header";
import { Home } from "./components/styles/Home";
import { Hero } from "./components/styles/Hero";
import { Content } from "./components/styles/Content";
import logo from "./assets/images/logo.svg";
import heroImage from "./assets/images/illustration-mockups.svg";
import firstContentImage from "./assets/images/illustration-grow-together.svg";
import secondContentImage from "./assets/images/illustration-flowing-conversation.svg";
import thirdContentImage from "./assets/images/illustration-your-users.svg";
import location from "./assets/images/icon-location.svg";
import phone from "./assets/images/icon-phone.svg";
import email from "./assets/images/icon-email.svg";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { Footer } from "./components/styles/Footer";

function App() {
  return (
    <>
      <GlobalStyled />
      <Container>
        <Home>
          <Header>
            <img src={logo} alt="logo" className="logo" />
            <button className="btn-try">Try it free</button>
          </Header>
          <Hero>
            <div className="headline">
              <h1>Build The Community Your Fans Will Love</h1>
              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <button className="btn-get-started">Get Started For Free</button>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="hero image" />
            </div>
          </Hero>
        </Home>
        <Content>
          <section>
            <div className="cards">
              <div className="info">
                <h3>Grow Together</h3>
                <p>
                  Generate Meaningful discussion with your audience and build a
                  strong, loyal community. Think of the insightful conversations
                  you miss out on with a feedback form.
                </p>
              </div>
              <img src={firstContentImage} alt="" />
            </div>
            <div className="cards">
              <img src={secondContentImage} alt="" />
              <div className="info">
                <h3>Flowing Conversations</h3>
                <p>
                  You Wouldn't paginate a conversation in real life, so why do
                  it online? Our threads have just-in-time loading for a more
                  natural flow.
                </p>
              </div>
            </div>
            <div className="cards">
              <div className="info">
                <h3>Your Users</h3>
                <p>
                  It takes no time at all to integrate Huddle with your app's
                  authentication solution. This means, once signed in to your
                  app, your users can start chatting immediately.
                </p>
              </div>
              <img src={thirdContentImage} alt="" />
            </div>
          </section>
        </Content>
      </Container>
      <Footer>
        <Container>
          <div className="footer-logo">
            <img src={logo} alt="footer logo" className="filter-black" />
          </div>
          <div className="footer-row">
            <div className="col-1">
              <div className="location">
                <img src={location} alt="" />
                <p>1414 Ferry Street, Annistion Alabama.</p>
              </div>
              <div className="phone">
                <img src={phone} alt="" />
                <p>+1-543-123-4567</p>
              </div>
              <div className="email">
                <img src={email} alt="" />
                <p>huddlecompany@gmail.com</p>
              </div>
            </div>
            <div className="col-2">
              <a href="#">About Us</a>
              <a href="#">What We Do</a>
              <a href="#">FAQ</a>
            </div>
            <div className="col-3">
              <a href="#">Career</a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="col-4">
              <CiFacebook />
              <CiTwitter />
              <CiInstagram />
            </div>
          </div>
        </Container>
      </Footer>
    </>
  );
}

export default App;
