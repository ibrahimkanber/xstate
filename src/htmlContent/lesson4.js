export const source4 = {
  html: `
    <p style='text-align:center;margin:0'><strong>Guarded transitions</strong></p>
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
