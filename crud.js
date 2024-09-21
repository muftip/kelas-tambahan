let namakaryawan = [
  "tatang",
  "babang",
  "beben"
];

function showkaryawan() {
  let listkaryawan = document.getElementById("list-karyawan");
  listkaryawan.innerHTML = ""; // Clear the existing list

  for (let i = 0; i < namakaryawan.length; i++) {
      // Create list item with edit and delete buttons
      listkaryawan.innerHTML += `
          <li>
              ${namakaryawan[i]} 
              <button onclick="editKaryawan(${i})">Edit</button>
              <button onclick="deleteKaryawan(${i})">Delete</button>
          </li>
      `;
  }
}

function addkaryawan() {
  let newKaryawanInput = document.getElementById("new-karyawan");
  let newKaryawan = newKaryawanInput.value.trim(); // Get the value and trim whitespace

  if (newKaryawan) {
      namakaryawan.push(newKaryawan); // Add the new name to the array
      newKaryawanInput.value = ""; // Clear the input field
      showkaryawan(); // Refresh the list to show the updated array
  } else {
      alert("No name entered. Please try again.");
  }
}

function editKaryawan(index) {
  let updatedName = prompt("Enter the new name for the employee:", namakaryawan[index]);
  if (updatedName) {
      namakaryawan[index] = updatedName; // Update the name in the array
      showkaryawan(); // Refresh the list to show the updated array
  }
}

function deleteKaryawan(index) {
  if (confirm("Are you sure you want to delete this employee?")) {
      namakaryawan.splice(index, 1); // Remove the employee from the array
      showkaryawan(); // Refresh the list to show the updated array
  }
}

// Initialize the list when the page loads
document.addEventListener('DOMContentLoaded', function() {
  showkaryawan();
});
