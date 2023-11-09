



import java.util.Random;
import java.util.Scanner;
 
public class DropLowestGrade {
    // Scanner for reading input
    private static Scanner scanner = new Scanner(System.in);
 
    public static void main(String[] args) {
        // Get the number of students
        System.out.print("Enter the number of students in the course: ");
        int numOfStudents = scanner.nextInt();
        scanner.nextLine();
 
        // Initialize arrays based on the number of students
        String[] studentNames = new String[numOfStudents];
        int[][] testScores = new int[numOfStudents][5];
        double[] averageGrades = new double[numOfStudents];
        char[] letterGrades = new char[numOfStudents];
 
        // Loop to process each student
        for (int i = 0; i < numOfStudents; i++) {
            // Get each student's name
            studentNames[i] = getStudentNames(scanner);
 
            // Get each student's test scores
 
for (int u = 0; u < 5; u++) {
        System.out.print("Enter the score for Test " + (u + 1) + ": ");
        testScores[i][u] = scanner.nextInt();
        scanner.nextLine();
    }
 

 
            // Calculate average grade, dropping the lowest score
            averageGrades[i] = calculateAverageGrade(testScores[i]);
 
            // Assign letter grade based on average
            letterGrades[i] = assignLetterGrade(averageGrades[i]);
 
            // Display the grade report for each student
            displayStudentGradeReport(studentNames[i], testScores[i], averageGrades[i], letterGrades[i]);
        }
 
        // Close the scanner
        scanner.close();
    }
 
    // Method to get student names, ensuring no special characters
    public static String getStudentNames(Scanner scanner) {
        String nameInput;
        do {
            System.out.print("Enter the name of student: ");
            nameInput = scanner.nextLine();
        } while (!nameInput.matches("^[a-zA-Z\\s]+$"));
        return nameInput;
    }
 
    // Method to generate random test scores
    public static int getStudentTestScores() {
        Random rand = new Random();
        return rand.nextInt(100) + 1;
    }
 
    // Method to calculate the average grade after dropping the lowest score
    private static double calculateAverageGrade(int[] scores) {
        int lowest = findLowestScore(scores);
        double sum = 0;
        for (int score : scores) {
            sum += score;
        }
        sum -= lowest;
        return sum / (scores.length - 1);
    }
 
    // Method to find the lowest score in an array of scores
    private static int findLowestScore(int[] scores) {
        int lowest = scores[0];
        for (int i = 1; i < scores.length; i++) {
            if (scores[i] < lowest) {
                lowest = scores[i];
            }
        }
        return lowest;
    }
 
    // Method to assign a letter grade based on the average score
    public static char assignLetterGrade(double averageGrade) {
        if (averageGrade >= 90) return 'A';
        else if (averageGrade >= 80) return 'B';
        else if (averageGrade >= 70) return 'C';
        else if (averageGrade >= 60) return 'D';
        else return 'F';
    }
 
    // Method to display the grade report for each student
    public static void displayStudentGradeReport(String name, int[] scores, double average, char grade) {
        System.out.printf("%-15s %-9d %-9d %-9d %-9d %-9d %-12.2f %c%n",
                name, scores[0], scores[1], scores[2], scores[3], scores[4], average, grade);
    }
}

