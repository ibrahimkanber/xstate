export const source2 = {
  html: `
      <p style='text-align:center;margin:0'><strong>action definitions</strong></p>
    <pre><code style='font-size:10px;'>
    const logger = (ctx, event) => console.log('action');
    const exampleMachine = createMachine(
    {
        initial: 'first',
        states: {
        first: {
            on: {
            NEXT: {
                target: 'second',
                //option1
                actions: (ctx, event) => console.log('action'),
            },
            },
        },
        second: {
            on: {
            NEXT: {
                target: 'third',
                //option2
                actions: logger,
            },
            },
        },
        third: {
            on: {
            NEXT: {
                target: 'third',
                //option3
                actions: 'logger',
            },
            },
        },
        },
    },
    {
        actions: {logger},
    },
    );
    </code><pre/>`,
};
