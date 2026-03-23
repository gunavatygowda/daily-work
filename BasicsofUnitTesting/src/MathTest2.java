import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class MathTest2 {
	Math math;
	
	@BeforeEach
	void setup() {
		math = new Math();
	}
	@Test
	void testAddWithArray() {
		int result = math.addWithArray(new Integer[] {2,3,4,5,});
		assertEquals(7,result);
	}
	@Test
	void testAdd() {
		//fail("Not yet implemented");
		int result = math.add(2, 5);
		assertEquals(7,result);
		
//		@Test
//		void testDivide() {
//			int result = math.divide(25,5);
//			assertEquals(5,result);
//		}
//		
//	@Test
//	void testAddNegativeNumbers() {
//		int result = math.add(-2, 5);
//		assertEquals(3,result);
//	}
	}

}
