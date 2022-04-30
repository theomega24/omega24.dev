import NavLink from "~/components/NavLink";

export default function Index() {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col h-5/6 w-[84rem] p-4">
        <div className="flex justify-between items-center p-6 mb-4 bg-zinc-800 rounded-2xl">
          <h1 className="text-3xl">
            <span className="font-bold">omega24</span>
            <span className="text-zinc-500"> | </span>
            <span className="text-sky-400">Software Engineer</span>
          </h1>
          <nav className="flex gap-4">
            <NavLink to="/" name="About" />
          </nav>
        </div>
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl">Under Construction</p>
        </div>
      </div>
    </div>
  );
}
