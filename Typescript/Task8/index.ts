type Profile ={
    username:string;
    bio:string | null;
    avtarUrl?:string;
};

let profile1:Profile={
    username:"Shubham Vithalkar",
    bio:null
    //avtarurl undefined

};

let profile2:Profile={
    username:"alex Kepler",
    bio:"FrontendDeveloper",
    avtarUrl:"https://example.com/avatar.jpg"
};

function ShowProfile(profile:Profile):void{
     let biotext=profile.bio === null ? "No bio available":profile.bio;
     let avtar=profile1.avtarUrl !==undefined ? profile.avtarUrl :"defaulturl.png";

  console.log(`Username: ${profile.username}`);
  console.log(`Bio: ${biotext}`);
  console.log(`Avatar: ${avtar}`);
  console.log("-------------");
}
ShowProfile(profile1);
ShowProfile(profile2);
