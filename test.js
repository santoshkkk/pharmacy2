// Import the necessary modules.
const assert = require('assert');
const PharmacyDrugManagementSystem = require('../Pharmacy');

// Create a new instance of the PharmacyDrugManagementSystem.
const pharmacyDrugManagementSystem = new PharmacyDrugManagementSystem();

// Test the addDrug() method.
pharmacyDrugManagementSystem.addDrug('Acetaminophen', 500);
assert.equal(pharmacyDrugManagementSystem.getDrugCount(), 1);

// Test the removeDrug() method.
pharmacyDrugManagementSystem.removeDrug('Acetaminophen');
assert.equal(pharmacyDrugManagementSystem.getDrugCount(), 0);

// Test the getDrug() method.
pharmacyDrugManagementSystem.addDrug('Acetaminophen', 500);
const drug = pharmacyDrugManagementSystem.getDrug('Acetaminophen');
assert.equal(drug.name, 'Acetaminophen');
assert.equal(drug.quantity, 500);

// Test the updateDrug() method.
pharmacyDrugManagementSystem.updateDrug('Acetaminophen', 1000);
const updatedDrug = pharmacyDrugManagementSystem.getDrug('Acetaminophen');
assert.equal(updatedDrug.quantity, 1000);

// All tests passed!
console.log('All tests passed!');