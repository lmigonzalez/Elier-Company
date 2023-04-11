import { type NextPage } from "next/types";
import Image from "next/image";
import Layout from "../layout/layout";

const AboutUs: NextPage = () => {
  return (
    <Layout>
      <h1 className=" mb-10 pl-10 pt-10 text-6xl">About Us</h1>

      <div className="flex justify-center">
        <Image
          src={
            "/depositphotos_2010106-stock-photo-modern-gray-stair-outside-of.jpg"
          }
          alt={""}
          width={600}
          height={400}
          className=" aspect-auto"
        />
      </div>
      <p className="p-20">
        Lorem ipsum dolor sit amet. Est quibusdam suscipit qui reiciendis
        perspiciatis et quibusdam dolores. Qui voluptatum porro id repellat illo
        qui pariatur inventore qui tenetur perspiciatis in numquam odio ut
        reiciendis rerum. Sit enim obcaecati qui commodi vitae et sint
        architecto eos commodi tempore ut odio aliquid sit nulla tempora ut esse
        autem. Et minima placeat et dolore quos et deserunt asperiores est
        nostrum autem qui vitae sequi. Non autem maiores qui maiores fugit eum
        eveniet enim eum adipisci perspiciatis ut dolor modi id magnam dolores?
        Non exercitationem inventore qui aspernatur tempore sed enim quasi ea
        obcaecati illum? Qui tempore accusantium eum rerum aliquam qui sunt
        illum aut beatae sequi? Eum odio ipsum eum nostrum officia et excepturi
        excepturi. Vel quam dolorem aut doloremque voluptas a rerum dolorum ex
        voluptate voluptas. Est inventore aliquam sed doloribus quibusdam eum
        ullam voluptas.
      </p>
    </Layout>
  );
};
export default AboutUs;
