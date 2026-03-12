import java.util.*;

public class LinkedlistExample {

	public static void main(String[] args) {
		
	  List<String> cities = createListOfCities();
		
		
		defensiveDowncasting(cities);
		System.out.println(cities.contains("Delhi"));
		System.out.println(cities.remove("Delhi"));
		System.out.println(cities.lastIndexOf("Delhi"));
		System.out.println(cities.set(0,"Chennai"));
		System.out.println(cities);

}


	private static List<String> createListOfCities() {
		List<String> cities = new LinkedList<>();
		
		cities.add("Delhi");
		cities.add("Delhi");
		cities.add("Mumbai");
		cities.add("Bangalore");
		return cities;
	}
	private static void defensiveDowncasting(List<String> cities) {
		if(cities instanceof LinkedList<String>) {
		LinkedList<String> LinkedList = ((LinkedList) cities);  //downcasting
		LinkedList.addFirst("Chennai");
		
	}
}
	}