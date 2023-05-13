import { AuthBindings } from "@refinedev/core";

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
            
            return {
                success: true,
                redirectTo: redirectPath,
            };
        } catch (error) {
            return {
                success: false,
            };
        }
    },
    login: async (params: any): Promise<AuthActionResponse> => {
        const { email, password, redirectPath } = params;
        try {
            
            return {
                success: true,
                redirectTo: redirectPath,
            };
        } catch (error) {
            return {
                success: false,
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