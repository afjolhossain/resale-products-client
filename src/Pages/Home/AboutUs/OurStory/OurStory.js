import React from "react";
import Logo from "../../../../Assets/Images/logo/logo.svg";
import CEO from "../../../../Assets/Images/ceo.jpg";

const OurStory = () => {
  return (
    <div>
      <img className="mx-auto mt-6 w-1/12" src={Logo} alt="" />
      <p className="text-3xl text-center mt-6">
        AfjoDeco is a marketplace that <br /> eliminates the hassle of buying
        and selling furniture
      </p>
      <div className="hero mt-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={CEO}
            className="max-w-lg h-[500px] rounded-lg shadow-2xl"
            alt=""
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold ml-4">Our Story</h1>
            <p className="leading-7 p-4">
              AfjoDeco stemmed out of frustration and necessity—buying and
              selling used furniture online more often than not leads to scams,
              delivery hassles and awkward encounters.
            </p>
            <p className=" p-4">
              After graduating from business school, I packed a moving truck and
              headed to NYC. At the same time, my co-founder, Kalam Dennis, was
              having trouble selling his couch because people wanted it
              delivered. So he borrowed my moving truck to see if including
              delivery would speed up the sale. After including delivery the
              sale took less than a day. And thus, AfjoDeco was born.
            </p>
            <p className=" p-4">
              What started in NYC in 2014 has since grown into a much larger
              operation. We recently expanded to the west coast and added new
              locations in the Northeast, with more to come! We believe buying
              and selling furniture shouldn’t be difficult. We’re also big on
              being kind to the environment. Over 12 million tons of furniture
              goes to the landfill every year. Let’s change that. —
            </p>
            <p className="mt-4 ml-4">Reham Fagiri, Co-Founder & CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
