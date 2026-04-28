// Email validation - checks format and domain
export const validateEmail = (email) => {
  if (!email) return { valid: false, message: "Email is required" };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Please enter a valid email address" };
  }

  // Check for common typos in email domains
  const commonDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "rediffmail.com", "icloud.com"];
  const domain = email.split("@")[1]?.toLowerCase();

  // Allow all domains but warn on suspicious ones
  const suspiciousDomains = ["gmali.com", "gmal.com", "gmai.com", "yaho.com", "hotmal.com"];
  if (suspiciousDomains.includes(domain)) {
    return { valid: false, message: "Did you mean " + domain.replace("mal", "mail").replace("gmai", "gmail") + "?" };
  }

  return { valid: true, message: "" };
};

// Phone validation - Indian phone numbers (10 digits starting with 6, 7, 8, or 9)
export const validatePhone = (phone) => {
  if (!phone) return { valid: false, message: "Phone number is required" };

  // Remove spaces, dashes, and country code
  const cleanPhone = phone.replace(/[\s\-]/g, "").replace(/^\+91/, "");

  // Check if it's exactly 10 digits
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(cleanPhone)) {
    return { valid: false, message: "Please enter a valid 10-digit Indian phone number" };
  }

  return { valid: true, message: "" };
};

// DOB validation - must be 18+ years old
export const validateDOB = (dob) => {
  if (!dob) return { valid: false, message: "Date of birth is required" };

  const birthDate = new Date(dob);
  const today = new Date();

  // Calculate age
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  if (age < 18) {
    const yearsNeeded = 18 - age;
    return {
      valid: false,
      message: `You must be at least 18 years old. Please wait ${yearsNeeded} more year${yearsNeeded > 1 ? "s" : ""}.`,
    };
  }

  if (age > 100) {
    return { valid: false, message: "Please enter a valid date of birth" };
  }

  return { valid: true, message: "" };
};

// Format phone for display
export const formatPhone = (phone) => {
  if (!phone) return "";
  const cleanPhone = phone.replace(/[\s\-]/g, "");
  if (cleanPhone.length === 10) {
    return `${cleanPhone.slice(0, 5)} ${cleanPhone.slice(5)}`;
  }
  return phone;
};

// Check if form is valid
export const validateForm = (formData, validations) => {
  const errors = {};
  let isValid = true;

  Object.keys(validations).forEach((field) => {
    const validation = validations[field];
    const value = formData[field];

    let result = { valid: true, message: "" };

    if (validation.required && !value) {
      result = { valid: false, message: validation.message || `${field} is required` };
    } else if (value && validation.validator) {
      result = validation.validator(value);
    }

    if (!result.valid) {
      isValid = false;
      errors[field] = result.message;
    }
  });

  return { isValid, errors };
};
