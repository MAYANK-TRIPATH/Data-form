"use-client";
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input"; // Custom Input component

export default function FormUi({ jsonForm }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (jsonForm?.fields) {
      const initialData = jsonForm.fields.reduce((acc, field) => {
        acc[field.name] = ''; // Initialize with empty values
        return acc;
      }, {});
      setFormData(initialData);
    }
  }, [jsonForm]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  if (!jsonForm) {
    return <div>Loading form...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-bold text-center text-2xl">{jsonForm?.title}</h2>
      <h2 className="text-gray-600 text-center text-sm">{jsonForm?.subtitle}</h2>

      {jsonForm?.fields?.map((field, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor={field.name}>
            {field.label}
          </label>

          {renderField(field, formData[field.name], handleChange)}
        </div>
      ))}

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

const renderField = (field, value, handleChange) => {
  switch (field.type) {
    case 'text':
    case 'email':
    case 'number':
    case 'date':
      return (
        <Input
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          value={value}
          onChange={handleChange}
        />
      );
    case 'textarea':
      return (
        <textarea
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          value={value}
          onChange={handleChange}
          className="textarea-class"
        />
      );
    case 'select':
      return (
        <select
          name={field.name}
          required={field.required}
          value={value}
          onChange={handleChange}
        >
          {field.options?.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    case 'checkbox':
      return (
        <input
          type="checkbox"
          name={field.name}
          checked={value}
          onChange={(e) =>
            handleChange({ target: { name: field.name, value: e.target.checked } })
          }
          required={field.required}
        />
      );
    default:
      return null;
  }
};
