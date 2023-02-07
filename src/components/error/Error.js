import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-container">
      <h1>OOPS, Something broke from your side.................</h1>
      <h2>{err.data}</h2>
      <p>{err.status + " " + err.statusText}</p>
    </div>
  );
};

export default Error;