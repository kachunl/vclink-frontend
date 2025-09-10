"use client"

import { useState } from "react"
import Link from "next/link"
import AuthForm from "@/components/common/forms/auth-form"

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Login attempt:", formData)
    }

    const loginFields = [
        {
            name: "email",
            type: "email" as const,
            placeholder: "Email",
            required: true
        },
        {
            name: "password",
            type: "password" as const,
            placeholder: "Password",
            required: true
        }
    ]

    return (
        <AuthForm
            title="Batman"
            subtitle="Join now"
            fields={loginFields}
            buttonText="Sign In"
            formData={formData}
            onSubmit={handleSubmit}
            onChange={handleChange}
        >
            <div className="text-center text-black text-base font-medium my-4">
                OR
            </div>

            <p className="text-center text-black text-sm mb-3">
                Don't have an account?{" "}
                <Link href="/signup" className="text-green-500 underline font-semibold hover:text-green-200">
                    Sign up
                </Link>
            </p>
            
            <Link 
                href="/forgot-password" 
                className="block text-center text-black text-sm no-underline hover:underline"
            >
                Forgot password?
            </Link>
        </AuthForm>
    )
}