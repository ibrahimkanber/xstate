export const source3 = {
  html: `
    <p style='text-align:center;margin:0'><strong>context/assign</strong></p>
    <pre><code style='font-size:10px;'>
    const exampleMachine = createMachine(
        {
          initial: 'first',
          context:{
            counter:0
          },
          states: {
            first: {
              on: {
                NEXT: "second"
              },
            },
            second: {
              on: {
                NEXT: {
                  target:"third",
                  actions:assign({
                    counter:(ctx,event)=>ctx.counter+1
                  })
      
                }
              },
            },
            third: {
              on: {
                NEXT: "first",
                INCREASE:{
                  actions:"increaseCounter"
                }
              },
            },
          },
        },
        {
          actions: {
            increaseCounter:assign({
              counter:(ctx,event)=>ctx.counter+1
            })
          },
        },
      );
    </code><pre/>`,
};
