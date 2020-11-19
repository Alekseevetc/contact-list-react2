const initialState = {
    visible: false
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HIDEN_SWHOW_SIDEBAR':
            return {
                visible: action.payload
            };
        default:
            return state;
    }
};

export default adminReducer;