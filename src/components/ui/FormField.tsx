import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

const baseControlClass =
  "focus-ring h-11 w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-3 text-sm text-neutral-900 placeholder:text-neutral-700/60";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
};

export function InputField({ id, label, className, ...rest }: InputFieldProps) {
  return (
    <label className="block space-y-1.5" htmlFor={id}>
      <span className="text-xs font-semibold text-neutral-700">{label}</span>
      <input id={id} className={cn(baseControlClass, className)} {...rest} />
    </label>
  );
}

type SelectOption = {
  label: string;
  value: string;
};

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  label: string;
  options: SelectOption[];
};

export function SelectField({ id, label, options, className, ...rest }: SelectFieldProps) {
  return (
    <label className="block space-y-1.5" htmlFor={id}>
      <span className="text-xs font-semibold text-neutral-700">{label}</span>
      <select id={id} className={cn(baseControlClass, className)} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
};

export function TextareaField({ id, label, className, ...rest }: TextareaFieldProps) {
  return (
    <label className="block space-y-1.5" htmlFor={id}>
      <span className="text-xs font-semibold text-neutral-700">{label}</span>
      <textarea
        id={id}
        className={cn(
          "focus-ring min-h-[100px] w-full resize-none rounded-2xl border border-neutral-100 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-700/60",
          className
        )}
        {...rest}
      />
    </label>
  );
}
