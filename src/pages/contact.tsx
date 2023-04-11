import { type NextPage } from "next/types";
import Layout from "../layout/layout";

const ContactUs: NextPage = () => {
  return (
    <>
      <Layout>
        <h1 className="ml-10 mt-10 text-6xl">Contact Us</h1>

        <form action="" className="mt-20 flex flex-col  p-16">
          <div className="flex gap-8">
            <div className="relative w-1/2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="peer z-0 h-10 w-full rounded-lg border-2 border-gray-300 pl-2 text-gray-900  placeholder-transparent focus:outline-none"
                placeholder="john@doe.com"
              />
              <label
                htmlFor="firstName"
                className="absolute -top-2.5 left-2 z-10 bg-white  text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600"
              >
                First Name
              </label>
            </div>
            <div className="relative w-1/2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="peer z-0 h-10 w-full rounded-lg border-2 border-gray-300 pl-2 text-gray-900  placeholder-transparent focus:outline-none"
                placeholder="john@doe.com"
              />
              <label
                htmlFor="lastName"
                className="absolute -top-2.5 left-2 z-10 bg-white  text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative mt-8">
            <input
              id="email"
              name="email"
              type="email"
              className="peer input z-0 h-10 w-full  border-gray-300 pl-2  text-gray-900 placeholder-transparent focus:outline-none"
              placeholder="john@doe.com"
            />
            <label
              htmlFor="email"
              className="absolute -top-2.5 left-2 z-10 bg-white  text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Email
            </label>
          </div>

          <textarea
            placeholder="write your message here"
            className="textarea-bordered textarea textarea-lg mt-10 w-full "
          ></textarea>

          <button
            type="submit"
            className="btn-primary btn mt-10 w-full text-white"
          >
            Send Message
          </button>
        </form>
      </Layout>
    </>
  );
};
export default ContactUs;
