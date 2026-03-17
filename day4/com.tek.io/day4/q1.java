
package day4;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class q1 {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in); 
        FileWriter writer = new FileWriter("output.txt",true);
        while(true) {
        System.out.println("Enter name:");        
        String text = sc.nextLine();
        writer.write(text);
        System.out.println("You entered: " + text); 
        System.out.println("file updated");         
    }
    }
}