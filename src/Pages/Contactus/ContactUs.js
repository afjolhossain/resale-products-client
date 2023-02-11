import React from "react";

const ContactUs = () => {
  return (
    <div>
      <p className="text-3xl font-bold text-center py-10 ">CONTACT US</p>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="p-10">
          <div className="form-control">
            <textarea
              className="textarea textarea-bordered h-34"
              placeholder="MESSAGE"
            ></textarea>
          </div>
          <div className="flex gap-2 mt-4 lg:flex-nowrap	 sm:flex-wrap">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text"> Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <button className="btn btn-outline mt-4">Button</button>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text"> Your Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>

        <div className="p-10 leading-8 ">
          <p className="text-2xl font-bold"> Send us a message</p>
          <p className="hover:text-red-700">
            We’ve taken your item to the warehouse to resell on your behalf.
            This agreement is limited to 30 days, as we have very limited
            warehouse space and are not set up to operate as a consignment
            service.
          </p>
          <div className="flex items-center gap-2 hover:text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <p>afjodeco@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 hover:text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <p>44/2,afjol Banglow,sylhet,Bangladesh</p>
          </div>
          <div className="flex items-center gap-2 hover:text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 3.75L18 6m0 0l2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              />
            </svg>

            <p>01741 147275</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
