import {assign, createMachine} from 'xstate';
import axios from 'axios';
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
          NEXT: [
            {
              target: 'third',
              actions: 'increaseCounter',
              cond: 'checkCounter',
            },
            {target: 'error'},
          ],
        },
      },
      error: {},
    },
  },
  {
    actions: {
      increaseCounter: assign({
        counter: (ctx, event) => ctx.counter + 1,
      }),
    },
    guards: {
      checkCounter: (ctx, event) => ctx.counter < 5,
    },
  },
);

const saveAlarm=async()=>{
  return axios.get("https://jsonplaceholder.typicode.com/todos/1")
  
}

export const appMachine = createMachine(
  {
    initial: 'first',
    context: {counter: 0, data: ''},
    states: {
      first: {
        entry: 'log',
        on: {
          NEXT: {
            target: 'second',
          },
          PREV: 'third',
        },
      },
      second: {
        entry: ['log', 'action2'],
        on: {
          NEXT: {
            target: 'third',
          },
          PREV: 'first',
        },
      },
      third: {
        entry: 'log',
        on: {
          NEXT: {
            target: 'fourth',
          },
          PREV: 'second',
          INCREASE: {
            actions: 'increaseCounter',
          },
        },
      },
      fourth: {
        entry: 'log',
        on: {
          NEXT: 'fifth',
          PREV: 'third',
          INCREASE: [
            {
              actions: 'increaseCounter',
              cond: (ctx, event) => ctx.counter < 5,
            },
            {target: 'second'},
          ],
        },
      },
      fifth: {
        entry: 'log',
        on: {
          NEXT: 'first',
          PREV: 'third',
        },
        initial: 'idle',
        states: {
          idle: {
            on: {
              FETCH: 'loading',
            },
          },
          loading: {

            after:{
              5000:{
              actions:()=>console.log('delayed')
              }
            },

            invoke: {
              src: () =>saveAlarm(),
              onDone: {
                target: 'success',
                actions: (ctx,event) => console.log("event.data",event.data.data),
              },
              onError:{
                target:"rejected",
                actions:(ctx,event)=>console.log("eventttt",event.data)
              },
            },
            
          },
          success: {
            entry: 'log',
            on: {
              FETCH: 'loading',
            },
          },
          rejected:{
            on: {
              FETCH: 'loading',
            },
          }
        },
      },
    },
  },
  {
    actions: {
      log: (ctx, event, meta) => {
        console.log('entering stepp ctx', ctx.data);
        console.log('entering stepp', meta.state.value);
      },
      action2: (ctx, event) => console.log('horse powerrrrr'),
      increaseCounter: assign({
        counter: (ctx, event) => ctx.counter + 1,
      }),
    },
  },
);
