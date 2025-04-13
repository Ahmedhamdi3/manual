// Automatically update available table options in the form
document.addEventListener('DOMContentLoaded', () => {
  const tables = document.querySelectorAll('.table[data-status="free"]');
  const tableSelect = document.getElementById('table-number');

  tables.forEach((table) => {
    const tableNumber = table.querySelector('p').textContent.split(' ')[1];
    const option = document.createElement('option');
    option.value = tableNumber;
    option.textContent = `Table ${tableNumber}`;
    tableSelect.appendChild(option);
  });
});
