package basics;

public class Loops {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//for(int i=0;i<=5;i++) {
//			for(int j=5;j>=i;j--) {
//			System.out.print("*");
//		}
//			System.out.println();
		int a=5,b=9,c=2;
	  int result = largestOfThree(a,b,c);
	  System.out.println(result);
	}
	static int largestOfThree(int a, int b, int c) {
		int largest =0;
		if(a>b && a>c) {
			largest = a;
		}
		else if(b>c&&b>a){
			largest = b;
		}
		else {
			largest = c;
		}
		return largest;
	}
}
