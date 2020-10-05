import java.util.Scanner;

/**
 * The class palindrome checks if a given string is a palindrome.
 * 
 * @author Selina Birkenbach
 * @date 02.10.2020
 *
 */
public class Palindrom {

	/**
	 * This method creates the menu with two options.
	 */
	private static void printMenu() {
		String menu = ""
				+ "|************************************************|\n"
				+ "|             ~ palindrome checker ~             |\n"
				+ "|------------------------------------------------|\n"
				+ "| - Press >1< to validate a string               |\n"
				+ "| - Press >2< to exit the programm               |\n"
				+ "|________________________________________________|\n"
				+ "Enter option: ";
		System.out.print(menu);
	}

	/**
	 * This method checks if the string is a palindrome.
	 * @param word is the string to be checked
	 * @return true if there is a palindrome and false if there is no palindrome
	 */
	private static boolean checkPalindrome(String word) {
		word = word.replaceAll(" ", "");
		word = word.toLowerCase();

		int len = word.length() - 1;

		for (int i = 0; i < word.length(); i++) {
			if (word.charAt(i) != word.charAt(len - i)) {
				return false;
			}
		}

		return true;
	}

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);

		String input = "";

		while(true) {
			printMenu();
			input = in.nextLine();

			if(input.equals("1")) {
				System.out.print("Enter string: ");
				boolean isPalindrome = checkPalindrome(in.nextLine());
				System.out.println(isPalindrome);
			} else if(input.equals("2")) {
				break;
			} else {
				System.out.println("Unknown option: >" + input + "<!");
			}
		}

		in.close();
	}
}
