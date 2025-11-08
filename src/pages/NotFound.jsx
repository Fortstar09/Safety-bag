import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="text-center flex justify-center items-center w-full h-dvh head28 ">
      <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="text-[115px] font-monasan font-bold text-brand">404</h1>
        <h2 className="text-3xl font-neuemon font-medium text-grey">
          Oops! Page not found
        </h2>
        <p className="text-sm text-grey/80">Go back to <Link to='/' className="text-blue-700 cursor-pointer hover:scale-110">Home</Link></p>
      </div>
    </main>
  );
};

export default NotFound;
