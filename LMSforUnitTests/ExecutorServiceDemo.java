public class ExecutorServiceDemo{
	public static void main(String[] args) {
		ExecutorService executor1 = Executors.newFixedThreadPool(3);
		executor1.shutdown();
		for(int i=0;i<20;i++) {
			executor1.submit(new Worker2());
			}
	}