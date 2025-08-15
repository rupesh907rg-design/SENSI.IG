// Enhanced sensitivity data with device models
const sensitivityData = {
  "2GB": {
    "general": "190-200",
    "redDot": "95-100",
    "twoXScope": "160-170", 
    "fourXScope": "140-150",
    "sniperScope": "45-55",
    "freeLook": "75-85",
    "dpi": "411-450",
    "description": "High sensitivity for low-end devices to compensate for lag"
  },
  "3GB": {
    "general": "185-195",
    "redDot": "90-95",
    "twoXScope": "155-165",
    "fourXScope": "135-145", 
    "sniperScope": "40-50",
    "freeLook": "70-80",
    "dpi": "450-480",
    "description": "Optimized for entry-level gaming devices"
  },
  "4GB": {
    "general": "150-160",
    "redDot": "85-95",
    "twoXScope": "145-155",
    "fourXScope": "130-140",
    "sniperScope": "35-45", 
    "freeLook": "65-75",
    "dpi": "488-520",
    "description": "Balanced settings for mid-range performance"
  },
  "6GB": {
    "general": "130-140",
    "redDot": "80-90",
    "twoXScope": "135-145",
    "fourXScope": "120-130",
    "sniperScope": "25-35",
    "freeLook": "55-65",
    "dpi": "560-600", 
    "description": "Smooth gameplay with good recoil control"
  },
  "8GB": {
    "general": "120-130",
    "redDot": "75-85",
    "twoXScope": "125-135",
    "fourXScope": "110-120",
    "sniperScope": "20-30",
    "freeLook": "45-55",
    "dpi": "597-620",
    "description": "High-end performance with precise control"
  },
  "12GB": {
    "general": "110-120",
    "redDot": "70-80", 
    "twoXScope": "115-125",
    "fourXScope": "100-110",
    "sniperScope": "15-25",
    "freeLook": "35-45",
    "dpi": "605-650",
    "description": "Premium gaming experience with maximum precision"
  },
  "iPhone": {
    "general": "50-60",
    "redDot": "45-55",
    "twoXScope": "50-60",
    "fourXScope": "45-55", 
    "sniperScope": "25-35",
    "freeLook": "40-50",
    "dpi": "N/A",
    "description": "Optimized for iOS gaming performance"
  }
};

const deviceModels = {
  "Samsung": {
    "models": {
      "Galaxy A54 5G": {
        "general": "160-170",
        "redDot": "140-150", 
        "twoXScope": "130-140",
        "fourXScope": "120-130",
        "sniperScope": "35-45",
        "freeLook": "65-75",
        "dpi": "520-560",
        "specifications": "6GB/8GB RAM, 120Hz Display",
        "performance": "Mid-range gaming performance"
      },
      "Galaxy M34 5G": {
        "general": "155-165",
        "redDot": "135-145",
        "twoXScope": "125-135", 
        "fourXScope": "115-125",
        "sniperScope": "30-40",
        "freeLook": "60-70",
        "dpi": "500-540",
        "specifications": "6GB/8GB RAM, 120Hz Display",
        "performance": "Good budget gaming"
      },
      "Galaxy S23": {
        "general": "120-130",
        "redDot": "110-120",
        "twoXScope": "105-115",
        "fourXScope": "95-105", 
        "sniperScope": "25-35",
        "freeLook": "50-60",
        "dpi": "600-650",
        "specifications": "8GB+ RAM, 120Hz AMOLED",
        "performance": "Premium gaming experience"
      },
      "Galaxy A34 5G": {
        "general": "165-175",
        "redDot": "145-155",
        "twoXScope": "135-145",
        "fourXScope": "125-135",
        "sniperScope": "35-45", 
        "freeLook": "65-75",
        "dpi": "480-520",
        "specifications": "6GB/8GB RAM, 120Hz",
        "performance": "Entry-level gaming"
      }
    },
    "brand_tips": "Enable Game Booster, use Performance Mode, disable background apps"
  },
  "Redmi": {
    "models": {
      "Note 12 Pro": {
        "general": "145-155",
        "redDot": "125-135",
        "twoXScope": "120-130",
        "fourXScope": "110-120",
        "sniperScope": "30-40",
        "freeLook": "55-65",
        "dpi": "550-590",
        "specifications": "6GB/8GB RAM, 120Hz AMOLED",
        "performance": "Excellent gaming performance"
      },
      "Note 12 5G": {
        "general": "150-160",
        "redDot": "130-140",
        "twoXScope": "125-135",
        "fourXScope": "115-125",
        "sniperScope": "32-42",
        "freeLook": "58-68",
        "dpi": "530-570",
        "specifications": "4GB/6GB RAM, 90Hz",
        "performance": "Good mid-range gaming"
      },
      "12 5G": {
        "general": "155-165",
        "redDot": "135-145", 
        "twoXScope": "130-140",
        "fourXScope": "120-130",
        "sniperScope": "35-45",
        "freeLook": "60-70",
        "dpi": "500-540",
        "specifications": "4GB/6GB RAM, 90Hz",
        "performance": "Budget gaming device"
      }
    },
    "brand_tips": "Use Game Turbo Mode, enable Performance Mode, clear RAM"
  },
  "POCO": {
    "models": {
      "X5 Pro 5G": {
        "general": "135-145",
        "redDot": "115-125",
        "twoXScope": "110-120",
        "fourXScope": "100-110",
        "sniperScope": "25-35",
        "freeLook": "50-60",
        "dpi": "580-620",
        "specifications": "6GB/8GB RAM, 120Hz AMOLED",
        "performance": "Flagship gaming experience"
      },
      "X5 5G": {
        "general": "140-150",
        "redDot": "120-130",
        "twoXScope": "115-125",
        "fourXScope": "105-115",
        "sniperScope": "28-38",
        "freeLook": "53-63",
        "dpi": "560-600",
        "specifications": "6GB/8GB RAM, 120Hz",
        "performance": "High-end gaming"
      },
      "F4 5G": {
        "general": "130-140", 
        "redDot": "110-120",
        "twoXScope": "105-115",
        "fourXScope": "95-105",
        "sniperScope": "22-32",
        "freeLook": "48-58",
        "dpi": "590-630",
        "specifications": "8GB/12GB RAM, 120Hz AMOLED",
        "performance": "Premium gaming flagship"
      }
    },
    "brand_tips": "Enable Game Turbo 2.0, use Beast Mode, optimize cooling"
  },
  "Realme": {
    "models": {
      "GT Neo 3": {
        "general": "125-135",
        "redDot": "105-115", 
        "twoXScope": "100-110",
        "fourXScope": "90-100",
        "sniperScope": "20-30",
        "freeLook": "45-55",
        "dpi": "600-640",
        "specifications": "8GB/12GB RAM, 120Hz AMOLED",
        "performance": "Flagship gaming performance"
      },
      "Narzo 70 Pro": {
        "general": "140-150",
        "redDot": "120-130",
        "twoXScope": "115-125",
        "fourXScope": "105-115",
        "sniperScope": "28-38",
        "freeLook": "53-63",
        "dpi": "570-610",
        "specifications": "6GB/8GB RAM, 120Hz",
        "performance": "Good gaming performance"
      },
      "C55": {
        "general": "160-170",
        "redDot": "140-150",
        "twoXScope": "135-145",
        "fourXScope": "125-135",
        "sniperScope": "38-48",
        "freeLook": "68-78",
        "dpi": "480-520",
        "specifications": "4GB/6GB RAM, 90Hz",
        "performance": "Entry-level gaming"
      },
      "Narzo N61": {
        "general": "165-175",
        "redDot": "145-155",
        "twoXScope": "140-150",
        "fourXScope": "130-140", 
        "sniperScope": "40-50",
        "freeLook": "70-80",
        "dpi": "460-500",
        "specifications": "4GB RAM, 90Hz",
        "performance": "Budget gaming"
      }
    },
    "brand_tips": "Use Gaming Space app, enable GT Mode, manage thermal throttling"
  },
  "OnePlus": {
    "models": {
      "Nord CE 3 Lite": {
        "general": "150-160",
        "redDot": "130-140",
        "twoXScope": "125-135",
        "fourXScope": "115-125",
        "sniperScope": "32-42",
        "freeLook": "58-68",
        "dpi": "530-570",
        "specifications": "8GB RAM, 120Hz",
        "performance": "Good mid-range gaming"
      },
      "Nord CE 2": {
        "general": "155-165",
        "redDot": "135-145",
        "twoXScope": "130-140",
        "fourXScope": "120-130",
        "sniperScope": "35-45",
        "freeLook": "60-70",
        "dpi": "520-560",
        "specifications": "6GB/8GB RAM, 90Hz AMOLED",
        "performance": "Solid gaming experience"
      },
      "11 Pro": {
        "general": "115-125",
        "redDot": "95-105",
        "twoXScope": "90-100",
        "fourXScope": "80-90",
        "sniperScope": "18-28",
        "freeLook": "40-50",
        "dpi": "620-660",
        "specifications": "8GB/12GB RAM, 120Hz Fluid AMOLED",
        "performance": "Flagship gaming excellence"
      }
    },
    "brand_tips": "Enable Gaming Mode, use Fnatic Mode, optimize OxygenOS"
  },
  "Vivo": {
    "models": {
      "V27 Pro": {
        "general": "145-155",
        "redDot": "125-135",
        "twoXScope": "120-130",
        "fourXScope": "110-120",
        "sniperScope": "30-40",
        "freeLook": "55-65",
        "dpi": "550-590",
        "specifications": "8GB/12GB RAM, 120Hz AMOLED",
        "performance": "Premium gaming experience"
      },
      "T2 Pro": {
        "general": "150-160",
        "redDot": "130-140",
        "twoXScope": "125-135",
        "fourXScope": "115-125",
        "sniperScope": "32-42",
        "freeLook": "58-68",
        "dpi": "530-570",
        "specifications": "8GB RAM, 120Hz AMOLED",
        "performance": "Good gaming performance"
      }
    },
    "brand_tips": "Use Game Mode, enable Ultra Game Mode, manage background apps"
  },
  "OPPO": {
    "models": {
      "Reno 8 Pro": {
        "general": "140-150",
        "redDot": "120-130",
        "twoXScope": "115-125",
        "fourXScope": "105-115",
        "sniperScope": "28-38",
        "freeLook": "53-63",
        "dpi": "560-600",
        "specifications": "8GB/12GB RAM, 120Hz AMOLED",
        "performance": "Flagship gaming"
      },
      "A78 5G": {
        "general": "155-165",
        "redDot": "135-145",
        "twoXScope": "130-140", 
        "fourXScope": "120-130",
        "sniperScope": "35-45",
        "freeLook": "60-70",
        "dpi": "520-560",
        "specifications": "8GB RAM, 90Hz",
        "performance": "Mid-range gaming"
      }
    },
    "brand_tips": "Enable Game Assistant, use Game Focus mode, optimize ColorOS"
  },
  "iPhone": {
    "models": {
      "iPhone 15 Pro Max": {
        "general": "45-55",
        "redDot": "40-50",
        "twoXScope": "45-55",
        "fourXScope": "40-50",
        "sniperScope": "20-30",
        "freeLook": "35-45",
        "dpi": "N/A (iOS optimized)",
        "specifications": "8GB RAM, 120Hz ProMotion",
        "performance": "Ultimate gaming experience"
      },
      "iPhone 15": {
        "general": "50-60",
        "redDot": "45-55",
        "twoXScope": "50-60",
        "fourXScope": "45-55",
        "sniperScope": "25-35", 
        "freeLook": "40-50",
        "dpi": "N/A (iOS optimized)",
        "specifications": "6GB RAM, 60Hz",
        "performance": "Excellent gaming"
      },
      "iPhone 14 Pro": {
        "general": "48-58",
        "redDot": "43-53",
        "twoXScope": "48-58",
        "fourXScope": "43-53",
        "sniperScope": "23-33",
        "freeLook": "38-48",
        "dpi": "N/A (iOS optimized)",
        "specifications": "6GB RAM, 120Hz ProMotion",
        "performance": "Premium gaming"
      },
      "iPhone 13": {
        "general": "52-62",
        "redDot": "47-57",
        "twoXScope": "52-62",
        "fourXScope": "47-57",
        "sniperScope": "27-37",
        "freeLook": "42-52",
        "dpi": "N/A (iOS optimized)",
        "specifications": "4GB RAM, 60Hz",
        "performance": "Solid gaming performance"
      }
    },
    "brand_tips": "Enable Do Not Disturb while gaming, close background apps, use Low Power Mode for extended sessions"
  }
};

// Global variables for DOM elements
let ramSelect, brandSelect, modelSelect, calculateBtn, resultsSection, copyBtn, successToast;
let generalValue, redDotValue, twoXValue, fourXValue, sniperValue, freeLookValue, dpiValue;
let deviceDescription, deviceTips, deviceInfo, deviceName, deviceSpecs, performanceNote;
let modelGroup;

// Current settings storage
let currentSettings = null;

// Wait for DOM to be fully loaded
function waitForDOM() {
  return new Promise((resolve) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', resolve);
    } else {
      resolve();
    }
  });
}

// Initialize DOM elements
function initializeDOMElements() {
  console.log('Initializing DOM elements...');
  
  // Get form elements
  ramSelect = document.getElementById('ramSelect');
  brandSelect = document.getElementById('brandSelect');
  modelSelect = document.getElementById('modelSelect');
  calculateBtn = document.getElementById('calculateBtn');
  resultsSection = document.getElementById('resultsSection');
  copyBtn = document.getElementById('copyBtn');
  successToast = document.getElementById('successToast');
  modelGroup = document.getElementById('modelGroup');

  // Get result display elements
  generalValue = document.getElementById('generalValue');
  redDotValue = document.getElementById('redDotValue');
  twoXValue = document.getElementById('twoXValue');
  fourXValue = document.getElementById('fourXValue');
  sniperValue = document.getElementById('sniperValue');
  freeLookValue = document.getElementById('freeLookValue');
  dpiValue = document.getElementById('dpiValue');
  deviceDescription = document.getElementById('deviceDescription');
  deviceTips = document.getElementById('deviceTips');
  deviceInfo = document.getElementById('deviceInfo');
  
  // Get device info elements
  deviceName = document.getElementById('deviceName');
  deviceSpecs = document.getElementById('deviceSpecs');
  performanceNote = document.getElementById('performanceNote');

  // Verify critical elements exist
  const criticalElements = [ramSelect, brandSelect, modelSelect, calculateBtn];
  const missingElements = criticalElements.filter(el => !el);
  
  if (missingElements.length > 0) {
    console.error('Missing critical DOM elements:', missingElements);
    return false;
  }
  
  console.log('All DOM elements found successfully');
  return true;
}

// Setup event listeners
function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // RAM selection listener
  if (ramSelect) {
    ramSelect.addEventListener('change', handleRAMChange);
    console.log('RAM select listener added');
  }
  
  // Brand selection listener
  if (brandSelect) {
    brandSelect.addEventListener('change', handleBrandChange);
    console.log('Brand select listener added');
  }
  
  // Model selection listener
  if (modelSelect) {
    modelSelect.addEventListener('change', handleModelChange);
    console.log('Model select listener added');
  }
  
  // Calculate button listener
  if (calculateBtn) {
    calculateBtn.addEventListener('click', calculateSensitivity);
    console.log('Calculate button listener added');
  }
  
  // Copy button listener
  if (copyBtn) {
    copyBtn.addEventListener('click', copySensitivitySettings);
    console.log('Copy button listener added');
  }
  
  // Instagram button listener
  setupInstagramButton();
}

// Handle RAM selection change
function handleRAMChange() {
  const selectedRAM = ramSelect.value;
  console.log('RAM changed to:', selectedRAM);
  
  if (selectedRAM) {
    // Enable brand selection
    brandSelect.disabled = false;
    brandSelect.style.opacity = '1';
    
    // Reset subsequent selections
    resetBrandAndModel();
    
    // Update calculate button
    updateCalculateButton('Calculate with RAM Only', false);
    
    // Auto-calculate with RAM only
    calculateSensitivity();
  } else {
    // Reset everything
    brandSelect.disabled = true;
    brandSelect.style.opacity = '0.5';
    resetBrandAndModel();
    updateCalculateButton('Select RAM First', true);
    hideResults();
  }
}

// Handle brand selection change
function handleBrandChange() {
  const selectedBrand = brandSelect.value;
  console.log('Brand changed to:', selectedBrand);
  
  if (selectedBrand && deviceModels[selectedBrand]) {
    // Show and populate model selection
    showModelSelection(selectedBrand);
    updateCalculateButton('Select Model for Specific Settings', false);
  } else {
    // Hide model selection
    hideModelSelection();
    updateCalculateButton('Calculate with Brand', false);
    
    // Recalculate with just RAM and brand
    if (ramSelect.value) {
      calculateSensitivity();
    }
  }
}

// Handle model selection change
function handleModelChange() {
  const selectedModel = modelSelect.value;
  console.log('Model changed to:', selectedModel);
  
  if (selectedModel) {
    updateCalculateButton('Calculate Device-Specific Settings', false);
    calculateSensitivity();
  }
}

// Update calculate button state
function updateCalculateButton(text, disabled) {
  if (!calculateBtn) return;
  
  calculateBtn.textContent = text;
  calculateBtn.disabled = disabled;
  
  if (disabled) {
    calculateBtn.style.background = '#666';
    calculateBtn.style.cursor = 'not-allowed';
  } else {
    calculateBtn.style.background = 'linear-gradient(45deg, #FF0000, #FF3333)';
    calculateBtn.style.cursor = 'pointer';
  }
}

// Show model selection with animation
function showModelSelection(brand) {
  const models = deviceModels[brand]?.models;
  if (!models || !modelSelect) return;
  
  console.log('Showing models for brand:', brand);
  
  // Clear existing options
  modelSelect.innerHTML = '<option value="">Select Device Model</option>';
  
  // Add model options
  Object.keys(models).forEach(modelName => {
    const option = document.createElement('option');
    option.value = modelName;
    option.textContent = modelName;
    modelSelect.appendChild(option);
  });
  
  // Show with animation
  if (modelGroup) {
    modelGroup.style.display = 'block';
    setTimeout(() => {
      modelGroup.classList.add('fade-in');
      modelSelect.disabled = false;
    }, 100);
  }
}

// Hide model selection
function hideModelSelection() {
  if (!modelGroup || !modelSelect) return;
  
  modelGroup.classList.remove('fade-in');
  modelGroup.classList.add('fade-out');
  
  setTimeout(() => {
    modelGroup.style.display = 'none';
    modelGroup.classList.remove('fade-out');
    modelSelect.disabled = true;
    modelSelect.value = '';
  }, 300);
}

// Reset brand and model selections
function resetBrandAndModel() {
  if (brandSelect) brandSelect.value = '';
  if (modelSelect) modelSelect.value = '';
  hideModelSelection();
}

// Calculate and display sensitivity settings
function calculateSensitivity() {
  const selectedRAM = ramSelect?.value;
  const selectedBrand = brandSelect?.value;
  const selectedModel = modelSelect?.value;
  
  console.log('Calculating sensitivity:', { RAM: selectedRAM, Brand: selectedBrand, Model: selectedModel });
  
  if (!selectedRAM) {
    console.error('No RAM selected');
    return;
  }
  
  let settings, isModelSpecific = false;
  
  // Priority: Model-specific > RAM-based
  if (selectedModel && selectedBrand && deviceModels[selectedBrand]?.models[selectedModel]) {
    settings = deviceModels[selectedBrand].models[selectedModel];
    isModelSpecific = true;
    console.log('Using model-specific settings for:', selectedModel);
  } else {
    settings = sensitivityData[selectedRAM];
    console.log('Using RAM-based settings for:', selectedRAM);
  }
  
  if (!settings) {
    console.error('No sensitivity data found');
    return;
  }
  
  // Store current settings for copying
  currentSettings = {
    ram: selectedRAM,
    brand: selectedBrand,
    model: selectedModel,
    settings: settings,
    isModelSpecific: isModelSpecific
  };
  
  // Update display
  displaySensitivitySettings(settings);
  displayDeviceInfo(selectedRAM, selectedBrand, selectedModel, isModelSpecific);
  showResults();
  
  console.log('Sensitivity calculation completed');
}

// Display sensitivity settings in the UI
function displaySensitivitySettings(settings) {
  if (!generalValue) return;
  
  console.log('Displaying sensitivity settings:', settings);
  
  generalValue.textContent = settings.general || '-';
  redDotValue.textContent = settings.redDot || '-';
  twoXValue.textContent = settings.twoXScope || '-';
  fourXValue.textContent = settings.fourXScope || '-';
  sniperValue.textContent = settings.sniperScope || '-';
  freeLookValue.textContent = settings.freeLook || '-';
  dpiValue.textContent = settings.dpi || '-';
  
  // Add staggered animation to sensitivity items
  const sensitivityItems = document.querySelectorAll('.sensitivity-item');
  sensitivityItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      item.style.transition = 'all 0.5s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// Display device information and tips
function displayDeviceInfo(ram, brand, model, isModelSpecific) {
  console.log('Displaying device info:', { ram, brand, model, isModelSpecific });
  
  // Display description
  let description;
  if (isModelSpecific && brand && model && deviceModels[brand]?.models[model]) {
    const modelData = deviceModels[brand].models[model];
    description = modelData.performance || modelData.description;
  } else if (sensitivityData[ram]) {
    description = sensitivityData[ram].description;
  }
  
  if (deviceDescription) {
    const descriptionElement = deviceDescription.querySelector('p');
    if (descriptionElement && description) {
      descriptionElement.textContent = description;
    }
  }
  
  // Show device specifications for specific models
  if (isModelSpecific && deviceInfo && brand && model && deviceModels[brand]?.models[model]) {
    const modelData = deviceModels[brand].models[model];
    
    if (deviceName) deviceName.textContent = `${brand} ${model}`;
    if (deviceSpecs) deviceSpecs.textContent = modelData.specifications || '';
    if (performanceNote) performanceNote.textContent = modelData.performance || '';
    
    deviceInfo.style.display = 'block';
  } else if (deviceInfo) {
    deviceInfo.style.display = 'none';
  }
  
  // Display brand-specific tips
  if (brand && deviceModels[brand] && deviceTips) {
    const brandInfo = deviceModels[brand];
    const tipsContent = deviceTips.querySelector('.tips-content');
    
    if (tipsContent) {
      let tipsHTML = `<p><strong>Optimization Tips:</strong> ${brandInfo.brand_tips}</p>`;
      
      if (isModelSpecific && model && deviceModels[brand].models[model]) {
        tipsHTML += `<p><strong>Model Performance:</strong> ${deviceModels[brand].models[model].performance}</p>`;
      }
      
      tipsContent.innerHTML = tipsHTML;
    }
    
    deviceTips.style.display = 'block';
  } else if (deviceTips) {
    deviceTips.style.display = 'none';
  }
}

// Show results section
function showResults() {
  if (resultsSection) {
    resultsSection.style.display = 'block';
    
    // Smooth scroll to results after a brief delay
    setTimeout(() => {
      resultsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 300);
  }
}

// Hide results section
function hideResults() {
  if (resultsSection) {
    resultsSection.style.display = 'none';
  }
  currentSettings = null;
}

// Copy sensitivity settings to clipboard
function copySensitivitySettings() {
  console.log('Copy button clicked');
  
  if (!currentSettings) {
    console.error('No settings to copy');
    showErrorToast('No settings available to copy');
    return;
  }
  
  const settings = currentSettings.settings;
  const ram = currentSettings.ram;
  const brand = currentSettings.brand || 'Not specified';
  const model = currentSettings.model || 'Not specified';
  const isModelSpecific = currentSettings.isModelSpecific;
  
  let deviceInfo = `RAM: ${ram}\nBrand: ${brand}`;
  if (isModelSpecific && model !== 'Not specified') {
    deviceInfo += `\nModel: ${model}`;
    if (settings.specifications) {
      deviceInfo += `\nSpecs: ${settings.specifications}`;
    }
  }
  
  const settingsText = `🎮 IG.SENSI - Free Fire Sensitivity Settings 🎮
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 Device Configuration:
${deviceInfo}

🎯 Sensitivity Settings:
• General: ${settings.general}
• Red Dot: ${settings.redDot}
• 2X Scope: ${settings.twoXScope}
• 4X Scope: ${settings.fourXScope}
• Sniper Scope: ${settings.sniperScope}
• Free Look: ${settings.freeLook}
• DPI: ${settings.dpi}

📝 Performance: ${settings.performance || settings.description}
${isModelSpecific && settings.specifications ? `🔧 Specs: ${settings.specifications}` : ''}

${brand !== 'Not specified' && deviceModels[brand] ? `💡 Brand Tips: ${deviceModels[brand].brand_tips}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated by IG.SENSI - Enhanced Device Calculator
Follow @invisiblegamer.ig for more gaming tips!`;
  
  // Try modern clipboard API first
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(settingsText)
      .then(() => {
        console.log('Settings copied successfully');
        showSuccessToast();
      })
      .catch((err) => {
        console.error('Clipboard API failed:', err);
        fallbackCopyTextToClipboard(settingsText);
      });
  } else {
    fallbackCopyTextToClipboard(settingsText);
  }
}

// Fallback copy method for older browsers
function fallbackCopyTextToClipboard(text) {
  console.log('Using fallback copy method');
  
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = '0';
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.style.opacity = '0';
  
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      console.log('Fallback copy successful');
      showSuccessToast();
    } else {
      console.error('Fallback copy failed');
      showErrorToast('Copy failed. Please try again.');
    }
  } catch (err) {
    console.error('Fallback copy error:', err);
    showErrorToast('Copy not supported in this browser');
  }
  
  document.body.removeChild(textArea);
}

// Show success toast notification
function showSuccessToast() {
  if (!successToast) {
    console.error('Success toast element not found');
    return;
  }
  
  console.log('Showing success toast');
  
  successToast.textContent = 'Settings copied to clipboard!';
  successToast.classList.add('show');
  
  // Add copy button animation
  if (copyBtn) {
    copyBtn.style.transform = 'scale(0.9)';
    copyBtn.style.background = '#FF0000';
    copyBtn.style.color = 'white';
    
    setTimeout(() => {
      copyBtn.style.transform = 'scale(1)';
      copyBtn.style.background = 'transparent';
      copyBtn.style.color = '#FF0000';
    }, 200);
  }
  
  // Hide toast after 3 seconds
  setTimeout(() => {
    successToast.classList.remove('show');
  }, 3000);
}

// Show error toast notification
function showErrorToast(message) {
  if (!successToast) return;
  
  successToast.textContent = message;
  successToast.style.background = '#FF0000';
  successToast.classList.add('show');
  
  setTimeout(() => {
    successToast.classList.remove('show');
    successToast.style.background = '#FF0000'; // Reset to default
  }, 3000);
}

// Setup Instagram button functionality
function setupInstagramButton() {
  const igButton = document.querySelector('.ig-button');
  const igButtonAlt = document.getElementById('igButton');
  
  const button = igButton || igButtonAlt;
  
  if (button) {
    console.log('Setting up Instagram button');
    
    button.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Instagram button clicked');
      
      try {
        const newWindow = window.open('https://instagram.com/invisiblegamer.ig', '_blank', 'noopener,noreferrer');
        if (!newWindow) {
          // Fallback if popup blocker prevents opening
          window.location.href = 'https://instagram.com/invisiblegamer.ig';
        }
      } catch (error) {
        console.error('Error opening Instagram:', error);
        // Final fallback
        window.location.href = 'https://instagram.com/invisiblegamer.ig';
      }
    });
    
    console.log('Instagram button setup complete');
  } else {
    console.error('Instagram button not found');
  }
}

// Add entrance animations
function addEntranceAnimations() {
  const header = document.querySelector('.header');
  if (header) {
    header.style.transform = 'translateY(-50px)';
    header.style.opacity = '0';
    
    setTimeout(() => {
      header.style.transition = 'all 0.8s ease';
      header.style.transform = 'translateY(0)';
      header.style.opacity = '1';
    }, 300);
  }
  
  // Add staggered animation to main sections
  const sections = document.querySelectorAll('.selection-section, .tips-section');
  sections.forEach((section, index) => {
    section.style.transform = 'translateY(30px)';
    section.style.opacity = '0';
    
    setTimeout(() => {
      section.style.transition = 'all 0.6s ease';
      section.style.transform = 'translateY(0)';
      section.style.opacity = '1';
    }, 500 + (index * 200));
  });
}

// Main initialization function
async function initializeApp() {
  console.log('Starting app initialization...');
  
  try {
    // Wait for DOM to be ready
    await waitForDOM();
    console.log('DOM is ready');
    
    // Initialize DOM elements
    const domReady = initializeDOMElements();
    if (!domReady) {
      throw new Error('Failed to initialize DOM elements');
    }
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize UI state
    updateCalculateButton('Select RAM First', true);
    
    // Add entrance animations
    setTimeout(addEntranceAnimations, 200);
    
    console.log('✅ App initialization completed successfully');
    
  } catch (error) {
    console.error('❌ App initialization failed:', error);
  }
}

// Start the application
initializeApp();