import React, { useState, useEffect } from 'react';

const NewDataForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    classType: '',
    customClassType: '',
    preferredDayTime: '',
    groupType: '',
    instructorPreference: '',
    comments: '',
  });
  const [image, setImage] = useState(null); // For image file
  const [errors, setErrors] = useState({});

  // Populates form with initial data when editing
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setImage(null); // Reset image during edit
    }
  }, [initialData]);

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

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Capture the file object
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});

    // Prepare FormData for submission
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    if (image) {
      formDataToSend.append('img_name', image);
    }

    const response = await onSubmit(formDataToSend);

    // Reset form after successful submission if not editing
    if (response.success && !initialData) {
      setFormData({
        classType: '',
        customClassType: '',
        preferredDayTime: '',
        groupType: '',
        instructorPreference: '',
        comments: '',
      });
      setImage(null); // Clear the image
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      {/* Class Type */}
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

      {/* Image Upload */}
      <label>
        Upload Image:
        <input type="file" name="img_name" accept="image/*" onChange={handleImageChange} />
      </label>

      {/* Custom Class Type */}
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

      {/* Preferred Day/Time */}
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

      {/* Group Type */}
      <fieldset>
        <legend>Group Type:</legend>
        <div className="radio-options">
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
        </div>
        {errors.groupType && <span className="error">{errors.groupType}</span>}
      </fieldset>

      {/* Instructor Preference */}
      <fieldset>
        <legend>Instructor Preference:</legend>
        <div className="radio-options">
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
        </div>
        {errors.instructorPreference && (
          <span className="error">{errors.instructorPreference}</span>
        )}
      </fieldset>

      {/* Comments */}
      <label>
        Comments:
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Any additional details or reasons"
        />
      </label>

      {/* Submit Button */}
      <button type="submit">{initialData ? 'Edit Class' : 'Submit'}</button>
    </form>
  );
};

export default NewDataForm;