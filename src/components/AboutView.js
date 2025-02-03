import Hero from './Hero';

const AboutView = () => {
    return (
      <>
      <Hero text="About Us"/>
      <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore iste cum illum, quasi, eos totam magni, excepturi libero cupiditate odit. Eius temporibus tempore error explicabo ab aut consequatur provident!
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }

export default AboutView;