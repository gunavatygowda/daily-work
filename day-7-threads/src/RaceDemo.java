
public class RaceDemo {
	public static void main(String[] args) throws InterruptedException {
		Counter counter = new Counter();
		Thread w1 = new Worker("w1",counter);
		Thread w2 = new Worker("w2",counter);
		w1.start();
		w1.join(); //main thread will wait on w1
		w2.join(); //main thread - waits on w1
		w2.start();
		System.out.println("final count="+counter.count);
		
	}

}
