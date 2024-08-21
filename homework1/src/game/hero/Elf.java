package game.hero;

public class Elf {
    int id;
    String name;
    int age;
    String weapon;
    String skill;

    public int getId(){
        return id;
    }
    public String getName(){
        return name;
    }
    public String getWeapon(){
        return weapon;
    }
    public int getAge(){
        return age;
    }
    public String getSkill(){
        return skill;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setWeapon(String weapon) {
        this.weapon = weapon;
    }
    public void setId(int id) {
        this.name = name;
    }
    public void setSkill(String skill){
        this.skill = skill;
    }
}
