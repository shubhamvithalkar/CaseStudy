var Role;
(function (Role) {
    Role["Doctor"] = "Doctor";
    Role["Nurse"] = "Nurse";
    Role["Admin"] = "Admin";
})(Role || (Role = {}));
var staffMembers = [
    { id: 1, name: "Dr. Smith", role: Role.Doctor },
    { id: 2, name: "Nurse Carol", role: Role.Nurse },
    { id: 3, name: "Admin John", role: Role.Admin }
];
function printStaffSummary(staffList) {
    for (var i = 0; i < staffList.length; i++) {
        var staff = staffList[i];
        console.log("Name: " + staff.name + ", Role: " + staff.role);
    }
}
printStaffSummary(staffMembers);
