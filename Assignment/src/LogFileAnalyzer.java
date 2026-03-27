import java.io.*;
import java.util.*;
public class LogFileAnalyzer {
    public static void main(String[] args) {
<<<<<<< HEAD
        Map<String, Integer> map = new HashMap<>();
=======
>>>>>>> feature1
        String fileName = "system.log";
        Map<String, Integer> result = analyzeLogFile(fileName);
        for (Map.Entry<String, Integer> entry : result.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
    public static Map<String, Integer> analyzeLogFile(String fileName) {
        Map<String, Integer> map = new HashMap<>();
        try {
            BufferedReader br = new BufferedReader(new FileReader(fileName));
            String line;
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(":");
                if (parts.length > 0) {
                    String logType = parts[0].trim();
                    map.put(logType, map.get(logType) + 1);
                }
            }
            br.close();
        } catch (FileNotFoundException e) {
            System.out.println("Error: Log file not found");
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
        return map;
    }
}