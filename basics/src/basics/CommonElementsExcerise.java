package basics;

import java.util.Arrays;
import java.util.*;

public class CommonElementsExcerise {
	public static void main(String[] args) {
		List<Integer> list1 = Arrays.asList(1, 2, 3, 4);
        List<Integer> list2 = Arrays.asList(3, 4, 5, 6);

        List<Integer> common = new ArrayList<>();

        for (int i = 0; i < list1.size(); i++) {
            int num1 = list1.get(i);

            for (int j = 0; j < list2.size(); j++) {
                int num2 = list2.get(j);

                if (num1 == num2) {
                    common.add(num1); 
                    break;            
                }
            }
        }

        System.out.println("Common elements: " + common);
    }
	
}

