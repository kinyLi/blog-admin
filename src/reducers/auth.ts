interface IState {
  name?: string;
}

const auth = (state: IState = { name: "lijinyi" }, action = {}) => {
  switch (action) {
    default:
      return state;
  }
};

export default auth;
