import java.io.*;
import java.util.*;

public class LogFileAnalyzer {

    public static void main(String[] args) {

        Map<String, Integer> map = new HashMap<>();

        String fileName = "system.log";

        try {
            BufferedReader br = new BufferedReader(new FileReader(fileName));
            String line;

            while ((line = br.readLine()) != null) {
                String[] parts = line.split(":");

                if (parts.length > 0) {
                    String logType = parts[0].trim();
                    map.put(logType, map.getOrDefault(logType, 0) + 1);
                }
            }

            br.close();

        } catch (FileNotFoundException e) {
            System.out.println("Error: Log file not found");
            return;
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
            return;
        }
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}