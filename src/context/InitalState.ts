export type stateType = {
  posts: number;
  categories: Array<string | any>;
};

const InitialState: stateType = {
  posts: 0,
  categories: [''],
};

export default InitialState;
