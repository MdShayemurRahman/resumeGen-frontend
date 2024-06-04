// src/utils/validateForm.js

export const validateForm = (formData) => {
  const errors = [];

  // Validate experience fields
  const hasEmptyExperienceTitle = formData.experience.some(
    (exp) => !exp.title.trim()
  );
  const hasEmptyExperienceCompany = formData.experience.some(
    (exp) => !exp.company.trim()
  );
  if (hasEmptyExperienceTitle) {
    errors.push('Experience title cannot be empty');
  }
  if (hasEmptyExperienceCompany) {
    errors.push('Experience company cannot be empty');
  }

  // Validate education fields
  const hasEmptyEducationInstitution = formData.education.some(
    (edu) => !edu.institution.trim()
  );
  const hasEmptyEducationDegree = formData.education.some(
    (edu) => !edu.degree.trim()
  );
  if (hasEmptyEducationInstitution) {
    errors.push('Education institution cannot be empty');
  }
  if (hasEmptyEducationDegree) {
    errors.push('Education degree cannot be empty');
  }

  // Validate project fields
  const hasEmptyProjectTitle = formData.projects.some(
    (proj) => !proj.title.trim()
  );
  if (hasEmptyProjectTitle) {
    errors.push('Project title cannot be empty');
  }

  // Validate skill fields
  const hasEmptySkill = formData.skills.some((skill) => !skill.trim());
  if (hasEmptySkill) {
    errors.push('Skills cannot be empty');
  }

  return errors;
};
