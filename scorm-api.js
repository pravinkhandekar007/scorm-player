// scorm-api.js

window.API = {
  LMSInitialize: function() { return "true"; },
  LMSFinish: function() { return "true"; },
  LMSGetValue: function(element) { return window.cmiData[element] || ""; },
  LMSSetValue: function(element, value) { window.cmiData[element] = value; return "true"; },
  LMSCommit: function() { /* Save data logic */ return "true"; },
  LMSGetLastError: function() { return "0"; },
  LMSGetErrorString: function() { return "No error"; },
  LMSGetDiagnostic: function() { return ""; }
};

window.API_1484_11 = {
  Initialize: function() { return "true"; },
  Terminate: function() { return "true"; },
  GetValue: function(element) { return window.cmiData[element] || ""; },
  SetValue: function(element, value) { window.cmiData[element] = value; return "true"; },
  Commit: function() { /* Save data logic */ return "true"; },
  GetLastError: function() { return "0"; },
  GetErrorString: function() { return "No error"; },
  GetDiagnostic: function() { return ""; }
};
