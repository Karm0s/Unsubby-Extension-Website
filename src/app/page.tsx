import Image from "next/image";
import AddButton from "@/app/components/AddButton";

import Logo from "@/assets/logo.svg";

export default function Home() {

  return (
    <main className="mx-auto max-w-[90vw]">
      <section className="p-24 mx-auto min-h-screen w-full">
        <nav className="w-full flex items-center justify-center">
          <div className="flex items-center">
            <Image className="inline pb-2" src={Logo} width={62} alt="Unsubby extension logo"></Image>
          </div>
        </nav>
        <div className="flex flex-col w-full h-full">
          <div className="mx-auto w-1/2 h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold"> Unsubby Extension</h1>
            <h3 className="text-lg text-center mt-2">A small tool to help you clean your youtube subscriptions <br /> with less clicks.</h3>
            <AddButton></AddButton>
          </div>
          <div className=" mx-auto mt-24">
            <video width={1100} className="rounded-lg max-w-[1100px]" autoPlay muted loop>
              <source src="video.mp4" type="video/mp4"></source>
              VIDEO FORMAT NOT SUPPORTED
            </video>
          </div>
        </div>

      </section>
      <section className="p-24 min-h-[80vh] flex flex-col items-center">
        <h2 className="mb-4 text-3xl font-bold">Frequeltly Asked Question</h2>
        <div className="w-1/2">
          <div className="my-4 collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Is this extension free ?
            </div>
            <div className="collapse-content">
              <p>Yes ! Unsubby is totally free to use and it&apos;s open source ! You
                can checkout the code over on <a href="https://github.com/Karm0s/Unsubby" target="_blank" className="underline">Github</a> if you are interested.
              </p>
            </div>
          </div>
          <div className="my-4 collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title text-xl font-medium">
              What does it do exactly ?
            </div>
            <div className="collapse-content">
              <p>Nothing magical really. Instead of unsubscribing manually and clicking many times only to remove one subscription. Unsubby gives you the ability to select channels and then do the clicking for you.</p>
            </div>
          </div>
          <div className="my-4 collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title text-xl font-medium">
              How did you build this extension ?
            </div>
            <div className="collapse-content">
              <p>The Readme file of the <a href="https://github.com/Karm0s/Unsubby" target="_blank" className="underline">Github</a> repository  explains how I made it.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="">
        <div className="flex flex-col items-center">
          <Image className="inline" src={Logo} width={32} alt="Unsubby extension logo"></Image>
          <h1 className="text-xl font-bold"> Unsubby Extension</h1>
          <p className="text-gray-500">Copyright © Unsubby Extension - Icons by <a href="https://www.icons8.com" className="underline">Icon8</a></p>
        </div>
      </footer>
    </main>
  );
}
