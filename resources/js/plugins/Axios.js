import axios from "axios";
import { useStore } from "vuex";
import { LS_TOKEN_KEY } from "@/store/auth";

axios.defaults.headers = { accept: "application/json" };

export function useAxios() {
    const { commit, state, getters } = useStore();

    const postMultipart = (url, data) => {
        const multipartData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                for (let i = 0; i < value.length; i++)
                    multipartData.append(`${key}`, value[i]);
            } else if (typeof value !== "undefined" || value !== null)
                multipartData.append(key, value);
        });
        return axios.post(url, multipartData, {
            headers: {
                "content-type": "multipart/form-data",
                Authorization: `Bearer ${state.auth.accessToken}`,
            },
        });
    };

    // auth helpers ----->
    function authReq(method, url, data = null) {
        const config = {
            headers: { Authorization: `Bearer ${state.auth.accessToken}` },
        };
        if (method === axios.get || method === axios.delete)
            return method(url, config);
        return method(url, data, config);
    }
    const setUser = async (accessToken) => {
        const token = accessToken || localStorage.getItem(LS_TOKEN_KEY);
        const apiEndPoint = "/api/user";
        const setProfileMutation = "auth/SET_PROFILE";
        if (!token) {
            commit(setProfileMutation, { profile: null, accessToken: null });
            commit("auth/SET_READY");
            return;
        }
        commit(setProfileMutation, { accessToken: token });
        try {
            const response = await authReq(axios.get, apiEndPoint);
            commit(setProfileMutation, {
                accessToken: token,
                profile: response.data,
            });
            commit("auth/SET_READY");
        } catch (error) {
            commit("auth/CLEAR_STATE");
            commit("auth/SET_READY");
        }
    };
    const login = async (email, password) => {
        const loginResponse = await axios.post("/api/login", {
            email,
            password,
        });
        return setUser(loginResponse.data.token);
    };

    const logout = async () => {
        await authReq(axios.post, "/api/logout");
        commit("auth/CLEAR_STATE");
    };

    const adminLogin = async (email, password) => {
        await login(email, password);
        if (!getters["auth/isAdmin"]) {
            await logout();
            return Promise.reject(new Error("IsNonAdminUser"));
        }
        return Promise.resolve();
    };

    return {
        login,
        logout,
        setUser,
        adminLogin,
        post: axios.post,
        get: axios.get,
        delete: axios.delete,
        postMultipart,
        authGet: (url) => authReq(axios.get, url),
        authDelete: (url) => authReq(axios.delete, url),
        authPost: (url, data) => authReq(axios.post, url, data),
    };
}

export const Axios = axios;

export default useAxios;
