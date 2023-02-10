import React from "react";
import OurTeamMembers from "../../../../Assets/Images/our team.jpg";

const OurTeam = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="p-6">
          <h1 className="text-3xl font-bold ml-4">Our Team</h1>
          <p className="leading-7 p-4">
            We are a small, but fast-growing team of entrepreneurs looking to
            change the way people buy and sell furniture. Interested in joining
            our team?
          </p>
          <p className=" p-4">
            At AfjoDeco, we're ambitious, engaged, and excited about disrupting
            the furniture industry. We’re constantly looking for ways to
            innovate and provide the best service to our customers. Our team
            values collaboration, creativity, and transparency, and fosters an
            environment where every voice gets heard.
          </p>
          <p className=" p-4">
            What started in NYC in 2014 has since grown into a much larger
            operation. We recently expanded to the west coast and added new
            locations in the Northeast, with more to come! We believe buying and
            selling furniture shouldn’t be difficult. We’re also big on being
            kind to the environment. Over 12 million tons of furniture goes to
            the landfill every year. Let’s change that. —
          </p>
        </div>
        <img
          src={OurTeamMembers}
          className="max-w-lg h-[500px] rounded-lg shadow-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default OurTeam;
