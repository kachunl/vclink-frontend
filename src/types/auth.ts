export interface LoginFormData {
    email: string
    password: string
}

export interface User {
    id: string
    email: string
    firstName: string
    lastName: string
    userType: "entrepreneur" | "investor"
    company: string
    position: string
    linkedin?: string
    createdAt: string
    updatedAt: string
}

export interface AuthState {
    user: User | null
    isAuthenticated: boolean
    loading: boolean
    error: string | null
}

export interface AuthContextType {
    user: User | null
    login: (credentials: LoginFormData) => Promise<void>
    logout: () => void
    loading: boolean
    error: string | null
}