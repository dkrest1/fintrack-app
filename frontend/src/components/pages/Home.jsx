import { Link } from "react-router-dom";
import Header from "../Header";
import section1Img from "../../Assets/images/section1_img.png";
import Transaction from "../../Assets/images/transaction.png";
import Branches from "../../Assets/images/branches.png";
const Home = () => {
  return (
    <main>
      <Header />
      <section className="section">
        <div className="section1">
          <h2 className="section1__header">How FinTrack works</h2>
          <div className="section1__contents">
            <div className="section1__contents__image">
              <img src={section1Img} alt="desktop computer" />
            </div>
            <div className="section1__contents__text">
              <Link className="section1__contents--link">
                Create an account
              </Link>
              <h3 className="section1__contents--header">
                Create/login to an existing account to get started
              </h3>
              <p className="section1__contents--paragraph">
                An account is created with your email and a desired password
              </p>
            </div>
          </div>
        </div>
        <div className="section__unique section2">
          <div className="section__unique--contents section2__contents">
            <div className="section__unique--image">
              <img src={Transaction} alt="desktop transaction" />
            </div>
            <div className="section__unique--text">
              <h3 className="section__unique--heading3">Track Transactions</h3>
              <h4 className="section__unique--heading4">
                Track all your transactions for each of your business branches
              </h4>
              <p className="section__unique--paragraph">
                Add all your bsiness branch information while signing up and
                track all your business trasactions
              </p>
            </div>
          </div>
        </div>
        <div className="section__unique section3">
          <div className="section__unique--contents section3__contents">
            <div className="section__unique--image">
              <img src={Branches} alt="branches transaction" />
            </div>
            <div className="section__unique--text">
              <h3 className="section__unique--heading3">Statistics</h3>
              <h4 className="section__unique--heading4">
                Check statistics for your business and compare branches
              </h4>
              <p className="section__unique--paragraph">
                Compare branch statistic and forecast your business income
              </p>
            </div>
          </div>
        </div>
        <div className="section4">
          <h2 className="section4__heading">
            <span className="section4__heading--main">
              Track your expenditures and
            </span>
            <span className="section4__heading--sub">
              business transaction with FinTrack
            </span>
          </h2>
          <Link className="header__btn">Get Started</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
