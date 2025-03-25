import { Controller, UseControllerProps, FieldValues } from "react-hook-form";

interface InputTypeDateTimeProps<T extends FieldValues>
  extends UseControllerProps<T> {
  title: string;
  placeholder: string;
}

const InputTypeDateTime = <T extends FieldValues>({
  name,
  control,
  title,
  rules,
  placeholder,
}: InputTypeDateTimeProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <div className="w-full min-w-[200px] mb-5">
          <label className="block mb-1 text-lg text-black font-medium">
            {title}
          </label>
          <input
            id="dateInput"
            className="w-full h-10 bg-gray-200 text-black text-sm border border-black rounded-3xl px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow-md"
            value={typeof value === "string" ? value.split("T")[0] : ""} // Chỉ hiển thị YYYY-MM-DD
            onChange={(e) => {
              onChange(e.target.value); // Gửi YYYY-MM-DD trực tiếp
            }}
            placeholder={placeholder}
            type="date"
          />
          {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default InputTypeDateTime;