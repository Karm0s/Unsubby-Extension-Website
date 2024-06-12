import Image from "next/image";
import AddButton from "@/app/components/AddButton";

import Logo from "@/assets/logo.svg";

export default function Home() {

  return (
    <main className="mx-auto max-w-[90vw]">
      <section className="p-24 mx-auto h-screen w-full flex">
        <div className="w-1/2 h-full flex flex-col items-start justify-center">
          <h1 className="text-3xl font-bold"> <Image className="inline pb-2" src={Logo} width={48} alt="Unsubby extension logo"></Image> Unsubby Extension</h1>
          <h3 className="text-xl mt-2">A small tool to help you clean your youtube subscriptions.</h3>
          <AddButton></AddButton>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">hello</div>
      </section>
      <section className="p-24 h-[90vh] flex flex-col items-center">
        <h2 className="mb-4 text-3xl font-bold">Frequeltly Asked Question</h2>
        <div className="w-1/2">
          <div className="my-2 collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Is this extension free ?
            </div>
            <div className="collapse-content">
              <p>Yes ! Unsubby is totally free to use and it's open source ! You
                can checkout the code over on Github if you are interested.
              </p>
            </div>
          </div>
          <div className="my-2 collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title text-xl font-medium">
              What does it do exactly ?
            </div>
            <div className="collapse-content">
              <p>Nothing magical really. Instead of unsubscribing manually and clicking many times only to remove one subscription. Unsubby gives you the ability to select all the channels and then unsubscribe for you.</p>
            </div>
          </div>
          <div className="my-2 collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title text-xl font-medium">
              How can I support Unsubby ?
            </div>
            <div className="collapse-content">
              <p>You can buy me a coffee using the link bellow. Thank You !</p>
            </div>
          </div>
          <div className="my-2 collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title text-xl font-medium">
              How can I contact you ? 
            </div>
            <div className="collapse-content">
              <p>Feel free to contact me using the contact form in the contact page.</p>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
