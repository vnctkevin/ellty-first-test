document.addEventListener('DOMContentLoaded', () => {
    const selectAll = document.getElementById('selectAll');
    const childCheckboxes = document.querySelectorAll('.child-item');

    // 1. Handle "Select All" Click
    // When the main box is clicked, force all children to match its state
    selectAll.addEventListener('change', (e) => {
        const isChecked = e.target.checked;

        childCheckboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    });

    // 2. Handle Child Clicks
    // When a child is clicked, update the main box state
    childCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateSelectAllState();
        });
    });

    // Function to calculate state
    function updateSelectAllState() {
        const allChecked = Array.from(childCheckboxes).every(c => c.checked);
        const someChecked = Array.from(childCheckboxes).some(c => c.checked);

        if (allChecked) {
            // All items are selected
            selectAll.checked = true;
            selectAll.indeterminate = false;
        } else if (someChecked) {
            // Some (but not all) are selected -> INDETERMINATE STATE
            selectAll.checked = false;
            selectAll.indeterminate = true;
        } else {
            // None are selected
            selectAll.checked = false;
            selectAll.indeterminate = false;
        }
    }
});