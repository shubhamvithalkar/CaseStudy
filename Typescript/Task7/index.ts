enum Role {
    Doctor="Doctor",
    Nurse="Nurse",
    Admin="Admin"
}

interface Staff {
    id:number;
    name:string;
    role:Role;
}


let staffMembers: Staff[] = [
  { id: 1, name: "Dr. Smith", role: Role.Doctor },
  { id: 2, name: "Nurse Carol", role: Role.Nurse },
  { id: 3, name: "Admin John", role: Role.Admin }
];

function printStaffSummary(staffList: Staff[]): void {
  for (let i = 0; i < staffList.length; i++) {
    let staff = staffList[i];
    console.log("Name: " + staff.name + ", Role: " + staff.role);
  }
}

printStaffSummary(staffMembers)