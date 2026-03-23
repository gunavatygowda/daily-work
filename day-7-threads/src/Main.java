
public class Main {
	public static void main(String[] args) throws InterruptedException {
		//thread class
		Thread thread = new Thread();
		thread.start();
		//thread.sleep(2000);
		
		//using runnable
		Thread t = new Thread(new MyTask());
		t.start();
	}

}
