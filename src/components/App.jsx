import Header from './Header/Header';
import Main from './Main/Main';
import AboutMe from './AboutMe/AboutMe';
import MyServices from './MyServices/MyServices';
import MyProjects from './MyProjects/MyProjects';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer'

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <AboutMe />
      <MyServices />
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
};
