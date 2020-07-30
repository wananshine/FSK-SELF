package hello;

import java.util.Scanner;

public class Hello {

	public static void main(String[] args) {

		double a = 1.0;
		double b = 0.1 + 0.1 + 0.1+ 0.1 + 0.1 + 0.1+ 0.1+ 0.1+ 0.1+ 0.1;
		System.out.println(a);
		System.out.println(b);

		Scanner in = new Scanner(System.in);
		
		System.out.println("请投币：");
		int amount = in.nextInt();
		System.out.println(amount);
		System.out.println(amount>=10);
		
		if( amount>=10 ) {
			System.out.println("*****************");
			System.out.println("Java城际路线");
			System.out.println("票价：10元");
			System.out.println("*****************");
			System.out.println("找零："+ (amount-10));
		}
		
	}

}
