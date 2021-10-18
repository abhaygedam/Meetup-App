

const ADD_LOGIN = "ADD_LOGIN";

const login = (data) => {
    return {
        type: ADD_LOGIN,
        payload: data
    }
}


const initialState = {
    login: {
        isLogin: false,
        token:""
    }
}

const reducrefun = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_LOGIN:
            return {
                ...state,
                isLogin: true,
                token: payload,
            }
    }
}