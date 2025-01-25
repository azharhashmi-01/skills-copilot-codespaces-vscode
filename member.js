function skillsMember(name, skills) {
  this.name = name;
  this.skills = skills;

  this.addSkill = function(skill) {
    this.skills.push(skill);
  };

  this.getSkills = function() {
    return this.skills;
  };

  this.introduce = function() {
    return `Hi, I'm ${this.name} and I have skills in ${this.skills.join(', ')}.`;
  };
}

// Example usage:
// const member = new skillsMember('John Doe', ['JavaScript', 'Node.js']);
// member.addSkill('React');
// console.log(member.introduce()); // Hi, I'm John Doe and I have skills in JavaScript, Node.js, React.
