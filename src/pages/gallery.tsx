import { type NextPage } from "next/types";
import Image from "next/image";
import Layout from "../layout/layout";

const ContactUs: NextPage = () => {
  return (
    <>
      <Layout>
        <div className=" flex w-screen items-center justify-between p-20">
          <h1 className=" w-1/2 text-6xl">Gallery</h1>
          <button className="btn-secondary btn inline-block text-custom">
            Add or Remove
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-8">
          <Image
            src={
              "/depositphotos_2010106-stock-photo-modern-gray-stair-outside-of.jpg"
            }
            alt={""}
            width={600}
            height={400}
            className=" aspect-auto"
          />
          <Image
            src={
              "/depositphotos_2270047-stock-photo-interior-of-hall-with-stairs.jpg"
            }
            alt={""}
            width={600}
            height={400}
            className=" aspect-auto"
          />
          <Image
            src={
              "/depositphotos_66124163-stock-photo-stainless-steel-handrail.jpg"
            }
            alt={""}
            width={600}
            height={400}
            className=" aspect-auto"
          />{" "}
          <Image
            src={
              "/depositphotos_87122986-stock-photo-modern-staircase-interior.jpg"
            }
            alt={""}
            width={600}
            height={400}
            className=" aspect-auto"
          />{" "}
          <Image
            src={
              "/depositphotos_138702098-stock-photo-second-floor-landing-features-skylight.jpg"
            }
            alt={""}
            width={600}
            height={400}
            className=" aspect-auto"
          />{" "}
          <Image
            src={
              "/depositphotos_216482156-stock-photo-low-angle-view-grey-stairs.jpg"
            }
            alt={""}
            width={600}
            height={400}
            className=" aspect-auto"
          />
        </div>
      </Layout>
    </>
  );
};
export default ContactUs;
