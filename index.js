let id = document.getElementById('tableID').addEventListener('click', () => {
        let firstName = document.getElementById('tableFirstName');
        let lastName = document.getElementById('tableLastName');
        let table = document.getElementById('table');
});
        
        function addIntoTable() {
            let row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            
            cell1.innerHTML = id.value;
            cell2.innerHTML = firstName.value;
            cell3.innerHTML = secondName.value;
        }