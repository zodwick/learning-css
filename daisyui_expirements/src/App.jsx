import { useState } from "react";

function App() {
  const [count, setCount] = useState(80);
  function increment() {
    // if (count == 99) {
    //   setCount(count + 1);
    // } else if (count > 99) {
    //   return;
    // } else {
      console.log("delay",count); 
      console.log(Math.round( (5+((-5/99)*count))));
      if (Math.round( (5+((-5/99)*count))) === 0 ){
        console.log("cunt");
        setCount(count + 1);
      }
      setCount(count +Math.round( (5+((-5/99)*count))));
    
  }

  return (
    <div className=" flex flex-col justify-center  gap-5   bg-primary h-[100vh] ">
      <div className=" flex  justify-center items-center w-full  gap-5">
        <h1>hello</h1>
        <h2>hai</h2>
      </div>

      <div className=" flex  gap-10 items-center justify-center ">
        <div data-theme="mytheme" className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-10 items-center ">
          <button
            className="btn btn-circle   btn-ghost  border-2  border-blue-500"
            onClick={increment}
          >
            {" "}
            add{" "}
          </button>

          <div className="radial-progress" style={{ "--value": count }}>
            {count}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
