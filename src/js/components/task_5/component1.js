import React, { useEffect, useState } from 'react';

function PropChangeWatch({ a, b }) {
  useEffect(() => {
    console.log("value of 'a' changed to", a);
    console.log("value of 'B' changed to", b);
  }, [a]);

  return (
    <>
    <div>
      I've got 2 props: a={a} and b={b}
    </div>
    <div>
      I've got 2 props: a={a} and b={b}
    </div>
    </>

  );
}

function Component1() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <PropChangeWatch a={count1} b={count2} />
      <button onClick={() => setCount1(count1 + 1)}>Increment countA</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment countB</button>
    </div>
  );
}

export default Component1;
