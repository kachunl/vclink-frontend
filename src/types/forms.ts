export interface SelectOption {
    value: string
    label: string
}

export interface FormFieldType {
    name: string
    type: "text" | "email" | "password" | "select" | "textarea" | "number" | "tel" | "url"
    placeholder: string
    label?: string
    required?: boolean
    options?: SelectOption[]
    gridCol?: "full" | "half" | "third"
    helpText?: string
    minLength?: number
    maxLength?: number
    rows?: number
    min?: number
    max?: number
}

export interface AuthFormProps {
    title: string
    subtitle: string
    fields: FormFieldType[]
    buttonText: string
    formData: Record<string, string>
    onSubmit: (e: React.FormEvent) => void
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    children?: React.ReactNode
    loading?: boolean
    errors?: Record<string, string>
}

export interface FormValidationRule {
    field: string
    rule: "required" | "email" | "minLength" | "maxLength" | "match" | "custom"
    value?: string | number
    message: string
    customValidator?: (value: string, formData: Record<string, string>) => boolean
}

export interface FormErrors {
    [fieldName: string]: string
}