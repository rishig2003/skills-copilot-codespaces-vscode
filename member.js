function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");

    member.style.display = "block";
    skills.style.display = "none";
    memberBtn.style.backgroundColor = "#e6e6e6";
    skillsBtn.style.backgroundColor = "#f2f2f2";
}