//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
import game.hero.Elf;
public class Main {
    public static void main(String[] args) {
        Elf elf = new Elf();
        elf.setAge(30);
        elf.setName("Bob");
        elf.setSkill("FireBall");
        elf.setWeapon("rifle");
        elf.setId(999999);
        System.out.println("Имя героя:" + elf.getName() + "\n" + "Возраст героя:" +
                elf.getAge() + "\n" + "Оружие:" + elf.getWeapon() + "\n" +
                "Специальный навык:" + elf.getSkill() + "\n" + "id:" + elf.getId());

    }
}
