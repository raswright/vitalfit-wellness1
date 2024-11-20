import React, { useState, useEffect } from 'react';

const NewDataForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    classType: '',
    customClassType: '',
    preferredDayTime: '',
    groupType: '',
    instructorPreference: '',
    comments: '',
    ...initialData,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.classType) newErrors.classType = 'Class Type is required.';
    if (formData.classType === 'Other' && !formData.customClassType) {
      newErrors.customClassType = 'Please specify the class type.';
    }
    if (!formData.preferredDayTime) newErrors.preferredDayTime = 'Preferred Day/Time is required.';
    if (!formData.groupType) newErrors.groupType = 'Group Type is required.';
    if (!formData.instructorPreference) {
      newErrors.instructorPreference = 'Instructor Preference is required.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      console.log('Validation errors:', formErrors); // Debugging
      return;
    }

    setErrors({});
    console.log('Submitting data:', formData); // Debugging
    const filteredFormData = { ...formData };
    if (filteredFormData.classType !== 'Other') {
      delete filteredFormData.customClassType;
    }

    const response = await onSubmit(filteredFormData);

    if (response.success) {
      setFormData({
        classType: '',
        customClassType: '',
        preferredDayTime: '',
        groupType: '',
        instructorPreference: '',
        comments: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Class Type:
        <select name="classType" value={formData.classType} onChange={handleChange}>
          <option value="">-- Select Class Type --</option>
          <option value="Yoga">Yoga</option>
          <option value="Pilates">Pilates</option>
          <option value="Running">Running</option>
          <option value="Cycling">Cycling</option>
          <option value="Zumba">Zumba</option>
          <option value="BodyPump">Body Pump</option>
          <option value="Other">Other</option>
        </select>
        {errors.classType && <span className="error">{errors.classType}</span>}
      </label>

      {formData.classType === 'Other' && (
        <label>
          Please Specify:
          <input
            type="text"
            name="customClassType"
            value={formData.customClassType || ''}
            onChange={handleChange}
            placeholder="Type your class type"
          />
          {errors.customClassType && <span className="error">{errors.customClassType}</span>}
        </label>
      )}

      <label>
        Preferred Day/Time:
        <input
          type="datetime-local"
          name="preferredDayTime"
          value={formData.preferredDayTime}
          onChange={handleChange}
        />
        {errors.preferredDayTime && <span className="error">{errors.preferredDayTime}</span>}
      </label>

      <fieldset>
        <legend>Group Type:</legend>
        <label>
          <input
            type="radio"
            name="groupType"
            value="One-on-One"
            checked={formData.groupType === 'One-on-One'}
            onChange={handleChange}
          />
          One-on-One
        </label>
        <label>
          <input
            type="radio"
            name="groupType"
            value="Group"
            checked={formData.groupType === 'Group'}
            onChange={handleChange}
          />
          Group
        </label>
        {errors.groupType && <span className="error">{errors.groupType}</span>}
      </fieldset>

      <fieldset>
        <legend>Instructor Preference:</legend>
        <label>
          <input
            type="radio"
            name="instructorPreference"
            value="Any"
            checked={formData.instructorPreference === 'Any'}
            onChange={handleChange}
          />
          Any
        </label>
        <label>
          <input
            type="radio"
            name="instructorPreference"
            value="Female"
            checked={formData.instructorPreference === 'Female'}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="instructorPreference"
            value="Male"
            checked={formData.instructorPreference === 'Male'}
            onChange={handleChange}
          />
          Male
        </label>
        {errors.instructorPreference && <span className="error">{errors.instructorPreference}</span>}
      </fieldset>

      <label>
        Comments:
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Any additional details or reasons"
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default NewDataForm;