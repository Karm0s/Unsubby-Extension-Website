import AddButton from "@/app/components/AddButton";

export default function Home() {

  return (
    <main className="py-24 mx-auto max-w-[90vw] h-screen flex bg-blue-100">
      <div className="w-1/2 h-full flex flex-col items-start justify-center bg-red-100">
        <h1 className="text-3xl font-bold">Unsubby Extension</h1>
        <h3 className="text-lg mt-2">A small tool to help you clean your youtube subscriptions.</h3>
        <AddButton></AddButton>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center bg-green-100">hello</div>
    </main>
  );
}
