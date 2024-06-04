import { useState } from 'react';

export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e, index, field, nestedField) => {
    const { value } = e.target;
    const updatedField = [...formData[field]];
    if (nestedField) {
      updatedField[index][nestedField] = value;
    } else {
      updatedField[index] = value;
    }
    setFormData({ ...formData, [field]: updatedField });
  };

  const handleAddField = (field, defaultValues) => {
    setFormData({ ...formData, [field]: [...formData[field], defaultValues] });
  };

  const handleRemoveField = (field, index) => {
    const updatedField = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updatedField });
  };

  return [
    formData,
    setFormData,
    handleChange,
    handleAddField,
    handleRemoveField,
  ];
};