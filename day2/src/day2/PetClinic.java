package day2;
import java.util.ArrayList;
import java.util.List;

public class PetClinic {

	public static void main(String[] args) {
		methodOverriding();
	}
		
		Dog dog = new Dog("Husky");
		Pet dog1 = new Dog("Husky");
		Cat cat = new Cat();
		//dog1.bark();
		dog.bark();
		List<Pet> pets = new ArrayList<Pet>();
		pets.add(dog);
		pets.add(dog1);
		}
private static void methodOverriding() {
	Pet pet = new Dog("Husky");
	Animal animal = (Anima)pet;
	animal.sound();
	}

