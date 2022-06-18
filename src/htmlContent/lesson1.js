export const source1 = {
  html: `
    <p style='text-align:center;margin:0'><strong>createMachine({config},{options})</strong></p>
  <pre><code style='font-size:12px;'>
  const exampleMachine = createMachine({
    // Machine identifier
    id: 'exampleMachine',
    // Initial state
    initial: 'first',
    // Local context for entire machine
    context: {
      elapsed: 0,
      direction: 'east',
    },
    // State definitions
    states: {
      first: {},
      second: {},
      third: {},
    },
  },{
    actions: {
      // action implementation
      alertGreen: (context, event) => {
        alert('Green!');
      }
    },
    activities: {
      /* ... */
    },
    delays: {
      /* ... */
    },
    guards: {
      /* ... */
    },
    services: {
      /* ... */
    });
  </code><pre/>`,
};
