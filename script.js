let contactData = [{
        contactName: "John Doe",
        contactNumber: 37246,
    },
    {
        contactName: "Mark",
        contactNumber: 37249876,
    },
];

function addData(){
    let newContactName=document.getElementById('contactName').value;
    let newContactNumber=document.getElementById('contactNumber').value;

    if(newContactName.length != 0 && newContactNumber.length != 0){
        let newValue={
            contactName: newContactName,
            contactNumber: newContactNumber,
        };
    
        contactData.unshift(newValue);
        resetForm();
        showData();
    }
    else{
        alert("please enter inputs");
    }
}

function clearAllData(){
    resetForm();
    contactData=[];
    showData();
}

    

function resetForm(){
    document.getElementById('contactName').value="";
    document.getElementById('contactNumber').value="";
}

function showData(){
    document.getElementById('table-body').innerHTML = '';
    // `<tr>
    // <td>ldfskjdalk</td>
    // <td>98742098</td>
    // </tr>`;

    if(contactData.length !=0){
        let i=0;

        contactData.forEach((data) => {
    
            document.getElementById('table-body').innerHTML += 
            `
            <tr>
            <td>${data.contactName}</td>
            <td>${data.contactNumber}</td>
            <td>
            <button onClick="deleteData(${i})">Delete</button>
            </td>
            </tr>
            `;
            i++;
        });
    }
    else{
        document.getElementById('table-body').innerHTML=
        `
        <tr>
        <td colspan="2">no history found</td>

        </tr>`
    }

    
}

function deleteData(index){
    contactData.splice(index,1);
    showData();
}

showData();

//what is local storage and how to use it