import { AuthBindings } from "@refinedev/core";
import axios, { AxiosError } from "axios";
import { API_ENDPOINTS } from "routes";

type AuthActionResponse = {
    success: boolean;
    redirectTo?: string;
    error?: Error;
    [key: string]: unknown;
};

type CheckResponse = {
    authenticated: boolean;
    redirectTo?: string;
    logout?: boolean;
    error?: Error;
};

type OnErrorResponse = {
    redirectTo?: string;
    logout?: boolean;
    error?: Error;
};

export const AuthProvider: AuthBindings = {
    register: async (params: any): Promise<AuthActionResponse> => {
        const { email, password, redirectPath } = params;
        try {
            const { data } = await axios.post(API_ENDPOINTS.register, {email, password});
            return {
                success: true,
                redirectTo: redirectPath,
                data
            };
        } catch (error) {
            let err = error as AxiosError;
            if(!err.response) throw error;
            return {
                success: false,
                error: err
            };
        }
    },
    login: async (params: any): Promise<AuthActionResponse> => {
        const { email, password, redirectPath } = params;
        try {
            const { data } = await axios.post(API_ENDPOINTS.login, {email, password});
            return {
                success: true,
                redirectTo: redirectPath,
                data
            };
        } catch (error) {
            let err = error as AxiosError;
            if(!err.response) throw error;
            return {
                success: false,
                error: err
            };
        }
    },
    logout: async (params: any): Promise<AuthActionResponse>=> {
        return {
            success: true,
        };
    },
    check: async (): Promise<CheckResponse> => {
        return {
            authenticated: true,
        };
    },
    onError: async (): Promise<OnErrorResponse> => {
        return {
            redirectTo: ""
        }
    },
}