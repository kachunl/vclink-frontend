import { FormFieldType, AuthFormProps } from "@/types/index"

export default function AuthForm({
    title,
    subtitle,
    fields,
    buttonText,
    formData,
    onSubmit,
    onChange,
    children
}: AuthFormProps) {
    return (
        <>
            {/* header */}
            <div className="mb-8 text-center md:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-black mb-1 tracking-tight font-amaranth">
                    {title}
                </h1>
                <p className="text-xl text-black font-normal font-amaranth">
                    {subtitle}
                </p>
            </div>

            {/* form */}
            <form className="flex flex-col gap-4 mb-6" onSubmit={onSubmit}>
                <div className="flex flex-col gap-4">
                    {fields.map((field, index) => {
                        // create grid layout for half width fields
                        const isHalfWidth = field.gridCol === "half"
                        const nextField = fields[index + 1]
                        const nextIsHalfWidth = nextField?.gridCol === "half"
                        const shouldGroupWithNext = isHalfWidth && nextIsHalfWidth

                        if (isHalfWidth && shouldGroupWithNext && index % 2 === 0) {
                            // render two half width fields in a grid
                            return (
                                <div key={`grid-${index}`} className="grid grid-cols-2 gap-4">
                                    {renderField(field, formData, onChange)}
                                    {renderField(fields[index + 1], formData, onChange)}
                                </div>
                            )
                        }
                        
                        if (isHalfWidth && index > 0 && fields[index - 1].gridCol === "half") {
                            return null
                        }

                        return (
                            <div key={field.name}>
                                {renderField(field, formData, onChange)}
                            </div>
                        )
                    })}
                </div>
                
                <button 
                    type="submit" 
                    className="w-full py-3 bg-green-200 text-black border-[1.5px] border-black rounded-2xl text-sm font-semibold cursor-pointer transition-colors duration-200 mt-2 outline-none hover:bg-green-500 hover:text-white"
                >
                    {buttonText}
                </button>
            </form>

            {children}
        </>
    )
}

function renderField(
    field: FormFieldType, 
    formData: Record<string, string>, 
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
) {
    const baseClassName = "w-full px-3.5 py-3 border-[1.5px] border-black rounded-2xl text-sm bg-white transition-colors duration-200 outline-none focus:border-green-500 placeholder-black"
    
    if (field.type === "select") {
        return (
            <select
                key={field.name}
                name={field.name}
                className={baseClassName}
                value={formData[field.name] || ""}
                onChange={onChange}
                required={field.required}
            >
                <option value="">{field.placeholder}</option>
                {field.options?.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        )
    }

    return (
        <input
            key={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            className={baseClassName}
            value={formData[field.name] || ""}
            onChange={onChange}
            required={field.required}
        />
    )
}