export const source5 = {
  html: `
    <p style='text-align:center;margin:0'><strong>Invoking Services</strong></p>
    <p style='margin-left:30px'>You can invoke:</p>
    <ul>
    <li>Promises, which will take the onDone transition on resolve, or the onError transition on reject</li>
    <li>Callbacks, which can send events to and receive events from the parent machine</li>
    <li>Observables, which can send events to the parent machine, as well as a signal when it is completed</li>
    <li>Machines, which can also send/receive events, and also notify the parent machine when it reaches its final state
    </li>
    </ul>
    <pre><code style='font-size:10px;'>
    const exampleMachine = createMachine(
      {
        initial: 'first',
        context: {
          counter: 0,
        },
        states: {
          first: {
            on: {
              NEXT: 'second',
            },
          },
          second: {
            on: {
              NEXT: [{
                actions: 'increaseCounter',
                cond:'checkCounter'
              },{target: 'error'}]
            },
          },
          error:{}
        },
      },
      {
        actions: {
          increaseCounter: assign({
            counter: (ctx, event) => ctx.counter + 1,
          }),
        },
        guards:{
          checkCounter:(ctx,event)=>ctx.counter<5
        }
      },
    );
    </code><pre/>`,
};
