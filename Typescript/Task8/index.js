var profile1 = {
    username: "Shubham Vithalkar",
    bio: null
    //avtarurl undefined
};
var profile2 = {
    username: "alex Kepler",
    bio: "FrontendDeveloper",
    avtarUrl: "https://example.com/avatar.jpg"
};
function ShowProfile(profile) {
    var biotext = profile.bio === null ? "No bio available" : profile.bio;
    var avtar = profile1.avtarUrl !== undefined ? profile.avtarUrl : "defaulturl.png";
    console.log("Username: ".concat(profile.username));
    console.log("Bio: ".concat(biotext));
    console.log("Avatar: ".concat(avtar));
    console.log("-------------");
}
ShowProfile(profile1);
ShowProfile(profile2);
