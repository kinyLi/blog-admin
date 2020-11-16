interface IState {
    name?: string;
}

const auth = (state: IState = { name: 'lijinyi' }, action = {}): IState => {
    switch (action) {
        default:
            return state;
    }
};

export default auth;
