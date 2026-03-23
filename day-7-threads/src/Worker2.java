import java.util.concurrent.ExecutorService;

public class Worker2 implements Runnable{
	@Override
	public void run() {
		System.out.println(Thread.currentThread().getName()+" started");
		try {
			Thread.sleep(2000);
		}catch(Exception e) {
			
		}
		System.out.println(Thread.currentThread().getName()+"finished");
	}

}
	
