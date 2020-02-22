import axios from 'axios';

export const getApi = (url, onSuccess, auth, loader) => {
    var isAuth = auth ? true : false, isLoader = loader ? true : false;
    return dispatch => {
        axios.get(url, { options: { auth: isAuth, loader: isLoader } }).then((res) => {
            onSuccess(res);
        })
    }
}

export const postApi = (url, data, onSuccess, auth, loader) => {
    var isAuth = auth ? true : false, isLoader = loader ? true : false;
    return dispatch => {
        axios.post(url, data, { options: { auth: isAuth, loader: isLoader } }).then((res) => {
            onSuccess(res);
        })
    }
}

export const updateApi = (url, data, onSuccess, auth, loader) => {
    var isAuth = auth ? true : false, isLoader = loader ? true : false;
    return dispatch => {
        axios.put(url, data, { options: { auth: isAuth, loader: isLoader } }).then((res) => {
            onSuccess(res);
        })
    }
}

export const deleteApi = (url, onSuccess, auth, loader) => {
    var isAuth = auth ? true : false, isLoader = loader ? true : false;
    return dispatch => {
        axios.delete(url, { options: { auth: isAuth, loader: isLoader } }).then((res) => {
            onSuccess(res);
        })
    }
}

export const nextUrlApi = (url, onSuccess, auth, loader) => {
    var isAuth = auth ? true : false, isLoader = loader ? true : false;
    return dispatch => {
        axios.get(url, { options: { apiBaseUrl: true, auth: isAuth, loader: isLoader } }).then((res) => {
            onSuccess(res);
        })
    }
}
